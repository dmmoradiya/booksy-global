import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import type { ResourceArticleData } from "@/data/articles"

export function ResourceArticleCard({ article }: { article: ResourceArticleData }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(15,29,51,0.22)]">
      <Link href={"/resources/" + article.slug} className="flex h-full flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={750}
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h2 className="text-[19px] leading-snug font-semibold text-ink transition-colors group-hover:text-brand sm:text-xl">
            {article.title}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.75] text-slate-600">{article.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14.4px] font-semibold text-brand transition-[gap] group-hover:gap-3">
            Read Article <ArrowRight className="size-4" />
          </span>
        </div>
      </Link>
    </article>
  )
}
