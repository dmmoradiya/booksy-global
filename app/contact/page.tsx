import type { Metadata } from "next"
import PageContent from "@/site-pages/contact"

export const metadata: Metadata = {
  title: "Contact Booksy Global | Bookkeeping & Accounting Support",
  description:
    "Discuss bookkeeping, payroll, BAS, IAS, GST, reporting, compliance, and accounting outsourcing support with Booksy Global.",
  keywords: [
    "contact Booksy Global",
    "bookkeeping support enquiry",
    "accounting outsourcing consultation",
    "Australian payroll and BAS support",
  ],
}

export default function Page() {
  return <PageContent />
}
