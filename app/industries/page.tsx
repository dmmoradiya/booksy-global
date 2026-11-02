import type { Metadata } from "next"
import PageContent from "@/site-pages/industries"
export const metadata: Metadata = {
  title: "Accounting Services by Industry",
  description:
    "Industry focused accounting and tax support for retail, e-commerce, SaaS, healthcare, real estate, restaurants, manufacturing, and hospitality.",
  keywords: [
    "industry accounting",
    "retail accountant",
    "SaaS accounting",
    "healthcare accounting",
    "real estate accounting",
    "restaurant bookkeeping",
  ],
}
export default function Page() {
  return <PageContent />
}
