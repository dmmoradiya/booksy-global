import type { Metadata } from "next"
import PageContent from "@/site-pages/about"

export const metadata: Metadata = {
  title: "About Booksy Global | Accounting Support for Growing Teams",
  description:
    "Learn how Booksy Global provides flexible bookkeeping, accounting, payroll, tax, compliance, and financial reporting support across the US, Australia, and UK.",
  keywords: [
    "About Booksy Global",
    "offshore accounting support",
    "bookkeeping support Australia US UK",
    "Chartered Accountant led accounting services",
  ],
}

export default function Page() {
  return <PageContent />
}
