import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { services } from "@/data/site"
import ServiceDetailPage from "@/site-pages/service-detail"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) return { title: "Service Not Found | Booksy Global" }

  return {
    title: service.title,
    description: service.intro,
    keywords: [
      service.title.toLowerCase(),
      service.title.toLowerCase() + " Australia",
      "accounting practice support Australia",
      "Booksy Global",
    ],
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  if (!services.some((service) => service.slug === slug)) notFound()

  return <ServiceDetailPage slug={slug} />
}
