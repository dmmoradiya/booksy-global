import type { Metadata } from "next"
import PageContent from "@/site-pages/contact"

export const metadata: Metadata = {
  title: "Contact Booksy Global | Bookkeeping & Accounting Support",
  description:
    "Send a message to Booksy Global and we'll route your enquiry to the right person.",
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
