import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { ResourceHero } from "@/components/resource-hero"
import { CtaBanner } from "@/components/sections/cta-banner"
import type { ArticleBlock, ResourceArticleData } from "@/data/articles"

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (typeof block === "string") {
    return <p className="mt-5 whitespace-pre-line text-[16.6px] leading-7 text-slate-600 sm:text-[17px]">{block}</p>
  }

  if (block.type === "comparison") {
    return (
      <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[720px] border-collapse text-left text-[15px]">
          <thead className="bg-navy text-white">
            <tr>
              {block.headers.map((header) => (
                <th key={header} className="px-5 py-4 font-semibold">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-t border-slate-200 even:bg-[#f6f8fb]">
                {row.map((cell, index) => (
                  <td key={row[0] + index} className={"px-5 py-4 leading-relaxed " + (index === 0 ? "font-semibold text-ink" : "text-slate-600")}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const numbered = block.variant !== "bullets"
  const List = numbered ? "ol" : "ul"

  return (
    <List className="mt-8 space-y-7">
      {block.items.map((item, index) => {
        const [heading, ...contentLines] = item.split(/\r?\n/)
        const bulletItems = contentLines.filter((line) => line.startsWith("• ")).map((line) => line.slice(2))
        const paragraphs = contentLines.filter((line) => !line.startsWith("• ") && line.length > 0)
        return (
          <li key={heading} className="flex gap-4">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-bold text-brand">
              {numbered ? index + 1 : <Check className="size-4" strokeWidth={2.4} />}
            </span>
            <div className="min-w-0">
              {numbered || contentLines.length > 0 ? (
                <h3 className="text-lg font-semibold leading-snug text-ink">{heading}</h3>
              ) : (
                <p className="text-[16.6px] leading-7 text-slate-600">{heading}</p>
              )}
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-2 text-[16.6px] leading-7 text-slate-600">{paragraph}</p>
              ))}
              {bulletItems.length > 0 && (
                <ul className="mt-4 space-y-3">
                  {bulletItems.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[16.6px] leading-7 text-slate-600">
                      <Check className="mt-1 size-4 shrink-0 text-brand" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        )
      })}
    </List>
  )
}

export function ResourceArticle({ article }: { article: ResourceArticleData }) {
  return (
    <>
      <ResourceHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        image={article.image}
        imageAlt={article.imageAlt}
      />
      <article className="mx-auto max-w-[1080px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
          <ArrowLeft className="size-4" /> All Resources
        </Link>
        <div className="mx-auto mt-9 max-w-[820px] space-y-6 text-[16.6px] leading-7 text-slate-600 sm:text-[17px]">
          {article.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mx-auto mt-14 max-w-[820px] space-y-14">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[27px] leading-tight font-semibold tracking-tight text-ink sm:text-[32px]">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-[16.6px] leading-7 text-slate-600 sm:text-[17px]">{paragraph}</p>
              ))}
              {section.blocks?.map((block, index) => <ArticleBlockView key={section.heading + index} block={block} />)}
            </section>
          ))}
        </div>
      </article>
      <CtaBanner />
    </>
  )
}
