"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sanityClient } from "../lib/sanity";
import { urlFor } from "../lib/imageUrl";

type GalleryImage = {
  _id: string;
  alt: string;
  image: any;
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const PAGE_SIZE = 12;

  async function fetchPage(offset: number) {
    setIsLoading(true);
    const data = await sanityClient.fetch<GalleryImage[]>(
      `*[_type == "galleryImage"] | order(_createdAt desc)[$offset...$end] {
        _id,
        alt,
        image
      }`,
      { offset, end: offset + PAGE_SIZE }
    );
    setImages((prev) => {
      const byId = new Map<string, GalleryImage>();
      for (const item of prev) byId.set(item._id, item);
      for (const item of data) byId.set(item._id, item);
      return Array.from(byId.values());
    });
    setHasMore(data.length === PAGE_SIZE);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  useEffect(() => {
    if (modalIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') setModalIndex((i) => (i === null ? i : (i + 1) % images.length))
      if (e.key === 'ArrowLeft') setModalIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [modalIndex, images.length])

  // Infinite scroll via sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore || isLoading) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoading && hasMore) {
          fetchPage(images.length);
        }
      })
    }, { rootMargin: '200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [images.length, hasMore, isLoading])

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <h1 className="text-4xl font-bold text-center mb-12">Galerie Photos</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {images.map((img, i) => {
            const src = urlFor(img.image).width(800).height(600).url()
            return (
              <button
                key={img._id}
                onClick={() => openModal(i)}
                className="group relative block w-full overflow-hidden rounded-xl bg-gray-100 shadow-sm hover:shadow-md transition-shadow"
                aria-label={`Ouvrir l'image : ${img.alt}`}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    placeholder="blur"
                    blurDataURL={urlFor(img.image).width(24).height(18).quality(20).url()}
                    loading="lazy"
                  />
                </div>
              </button>
            )
          })}
          {/* Sentinel for infinite scroll */}
          <div ref={sentinelRef} className="col-span-full flex justify-center py-6">
            {isLoading && (
              <span className="text-sm text-gray-500">Chargement…</span>
            )}
            {!isLoading && !hasMore && images.length > 0 && (
              <span className="text-sm text-gray-500">Fin de la galerie</span>
            )}
          </div>
        </div>
        {/* Fallback button */}
        {hasMore && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => fetchPage(images.length)}
              disabled={isLoading}
              className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50 disabled:opacity-50"
            >
              {isLoading ? 'Chargement…' : 'Charger plus'}
            </button>
          </div>
        )}
      </section>

      {/* Modal Lightbox */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={images[modalIndex].alt}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold focus:outline-none"
            aria-label="Close modal"
          >
            &times;
          </button>
          <div className="relative max-w-5xl w-full">
            <Image
              src={urlFor(images[modalIndex].image).width(1600).height(1200).url()}
              alt={images[modalIndex].alt}
              width={1600}
              height={1200}
              sizes="(max-width: 768px) 90vw, 70vw"
              className="rounded-lg shadow-lg max-h-[80vh] w-full h-auto object-contain"
              placeholder="blur"
              blurDataURL={urlFor(images[modalIndex].image).width(24).height(18).quality(20).url()}
            />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={(e) => { e.stopPropagation(); setModalIndex((i) => i === null ? 0 : (i - 1 + images.length) % images.length) }}
                className="text-white/90 hover:text-white text-3xl px-4"
                aria-label="Image précédente"
              >
                ‹
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={(e) => { e.stopPropagation(); setModalIndex((i) => i === null ? 0 : (i + 1) % images.length) }}
                className="text-white/90 hover:text-white text-3xl px-4"
                aria-label="Image suivante"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
