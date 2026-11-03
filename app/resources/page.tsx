import type { Metadata } from "next"
import PageContent from "@/site-pages/resources"
export const metadata: Metadata = {
  title: "Small Business Accounting Blog & Insights",
  description:
    "Read practical accounting articles and small business finance insights from the Booksy Global team.",
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
