import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { servicesByCountry } from "@/data/services"
import ServiceDetailPage from "@/site-pages/service-detail"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return servicesByCountry.AU.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesByCountry.AU.find((item) => item.slug === slug)

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
  if (!servicesByCountry.AU.some((service) => service.slug === slug)) notFound()

  return <ServiceDetailPage slug={slug} />
}
