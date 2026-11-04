import { ResourceArticleCard } from "@/components/resource-article-card"
import { ResourceHero } from "@/components/resource-hero"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"
import { resourceArticles } from "@/data/articles"

export default function ResourcesPage() {
  return (
    <>
      <ResourceHero
        eyebrow="Resources"
        title="Insights to Help Your Business Grow"
        description="Practical articles and insights from our team of accountants and advisors."
        image="/resources-hero.webp"
        imageAlt="Tax paperwork, calculator, and financial records arranged on a desk"
      />

      <section className="mx-auto max-w-[1360px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="mb-10">
          <SectionHeading eyebrow="Blog & Insights" title="Latest Articles" align="center" divider />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resourceArticles.map((article) => (
            <ResourceArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
