import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ResourceArticle } from "@/components/resource-article"
import { resourceArticles } from "@/data/articles"

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return resourceArticles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = resourceArticles.find((item) => item.slug === slug)
  if (!article) return { title: "Resource Not Found" }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = resourceArticles.find((item) => item.slug === slug)
  if (!article) notFound()

  return <ResourceArticle slug={slug} />
}
