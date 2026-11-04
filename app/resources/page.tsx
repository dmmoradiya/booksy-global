import type { Metadata } from "next"
import PageContent from "@/site-pages/resources"
export const metadata: Metadata = {
  title: "Resources | Booksy Global",
  description:
    "Practical articles and insights from the Booksy Global team of accountants and advisors.",
  keywords: [
    "small business accounting blog",
    "accounting articles",
    "bookkeeping tips",
    "payroll insights",
    "tax planning articles",
  ],
}
export default function Page() {
  return <PageContent />
}
