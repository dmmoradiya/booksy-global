import type { Metadata } from "next"

import PageContent from "@/site-pages/services"

export const metadata: Metadata = {
  title: "Bookkeeping, Payroll & Taxation Compliance Support",
  description:
    "Explore bookkeeping, payroll, BAS, IAS, GST, tax workpapers, reporting, e-commerce, catch-up, and SMSF accounting support from Booksy Global.",
  keywords: [
    "bookkeeping services Australia",
    "payroll and STP support Australia",
    "BAS IAS GST support",
    "accounting practice support",
    "tax workpapers Australia",
    "SMSF accounting administration support",
    "Booksy Global services",
  ],
}

export default function Page() {
  return <PageContent />
}
