import type { Metadata } from "next"
import PageContent from "@/site-pages/about"
export const metadata: Metadata = {
  title: "About Our Accounting Firm",
  description:
    "Meet the FinCore Accounting team and learn how our experienced accountants help businesses manage finances, taxes, and growth.",
  keywords: ["about FinCore Accounting", "accounting team", "CPA firm", "business accountants"],
}
export default function Page() {
  return <PageContent />
}
