import type { Metadata } from "next"

import PageContent from "@/site-pages/industries"

export const metadata: Metadata = {
  title: "Industries We Serve | Booksy Global",
  description:
    "Bookkeeping and accounting support for Australian accounting firms, e-commerce businesses, startups, professional services, hotels, small businesses, and SMSF administrators.",
  keywords: [
    "accounting support for Australian businesses",
    "accounting firm bookkeeping support",
    "e-commerce bookkeeping Australia",
    "startup bookkeeping Australia",
    "hotel bookkeeping support",
    "small business accounting Australia",
    "SMSF bookkeeping support",
  ],
}

export default function Page() {
  return <PageContent />
}
