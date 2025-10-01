'use client'

import { useEffect, useMemo, useState } from 'react'
import { Megaphone } from 'lucide-react'
import { sanityClient } from '../lib/sanity'
import Reveal from './Reveal'

type NewsItem = {
  _id: string
  title: string
  summary: string
  link: string
  publishedAt: string
}

function getRelativeTime(dateString: string) {
  const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
  const date = new Date(dateString);
  const diff = (Date.now() - date.getTime()) / 1000;

  const times = [
    { unit: "year", seconds: 60 * 60 * 24 * 365 },
    { unit: "month", seconds: 60 * 60 * 24 * 30 },
    { unit: "week", seconds: 60 * 60 * 24 * 7 },
    { unit: "day", seconds: 60 * 60 * 24 },
    { unit: "hour", seconds: 60 * 60 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];

  for (const { unit, seconds } of times) {
    const delta = Math.floor(diff / seconds);
    if (Math.abs(delta) >= 1) {
      return rtf.format(-delta, unit as Intl.RelativeTimeFormatUnit);
    }
  }
  return "just now";
}

function formatDate(dateString: string) {
  try {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('fr-CH', { dateStyle: 'medium' }).format(date)
  } catch {
    return dateString
  }
}


export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const PAGE_SIZE = 6
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  async function fetchPage(offset: number) {
    setIsLoading(true)
    const data = await sanityClient.fetch<NewsItem[]>(
      `*[_type == "newsItem"] | order(publishedAt desc)[$offset...$end]{
        _id, title, summary, link, publishedAt
      }`,
      { offset, end: offset + PAGE_SIZE }
    )
    setNews((prev) => {
      const byId = new Map<string, NewsItem>()
      for (const item of prev) byId.set(item._id, item)
      for (const item of data) byId.set(item._id, item)
      return Array.from(byId.values())
    })
    setHasMore(data.length === PAGE_SIZE)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPage(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="bg-white text-gray-900 py-16 px-6" id="news">
      <div className="max-w-6xl mx-auto">
        <Reveal as="h2" className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Actualités
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => {
            const isNew = Date.now() - new Date(item.publishedAt).getTime() < 1000 * 60 * 60 * 24 * 7
            const hasLink = Boolean(item.link)
            const isExpanded = Boolean(expanded[item._id])
            return (
              <Reveal key={item._id} delayMs={idx * 80} className="h-full">
                <article className="relative bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-[#be4029] to-pink-500 opacity-80" />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-snug flex items-center gap-2">
                      <Megaphone aria-hidden="true" className="h-4 w-4 text-[#be4029]" />
                      {item.title}
                    </h3>
                    {isNew && (
                      <span className="inline-block text-[10px] uppercase tracking-wide bg-[#be4029]/10 text-[#be4029] px-2 py-1 rounded">Nouveau</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1" aria-label={`Publié ${getRelativeTime(item.publishedAt)}`}>
                    {formatDate(item.publishedAt)} · {getRelativeTime(item.publishedAt)}
                  </p>
                  <p className={`text-sm text-gray-700 mt-3 ${isExpanded ? '' : 'line-clamp-4'}`}>
                    {item.summary}
                  </p>
                  {hasLink ? (
                    <a
                      href={item.link as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-sm text-[#be4029] hover:underline underline-offset-4"
                    >
                      Lire plus
                      <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setExpanded((prev) => ({ ...prev, [item._id]: !isExpanded }))}
                      className="mt-4 inline-flex items-center text-sm text-[#be4029] hover:underline underline-offset-4"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Afficher moins' : 'Lire plus'}
                    </button>
                  )}
                </article>
              </Reveal>
            )
          })}
          {isLoading && Array.from({ length: 3 }).map((_, i) => (
            <div key={`skeleton-${i}`} className="animate-pulse bg-gray-50 border border-gray-200 rounded-xl p-6 h-40" />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          {hasMore ? (
            <button
              onClick={() => fetchPage(news.length)}
              disabled={isLoading}
              className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-50 disabled:opacity-50"
            >
              {isLoading ? 'Chargement…' : 'Charger plus'}
            </button>
          ) : (
            news.length > 0 ? <span className="text-sm text-gray-500">Fin des actualités</span> : null
          )}
        </div>
      </div>
    </section>
  )
}
