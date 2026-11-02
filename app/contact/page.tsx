import type { Metadata } from "next"
import PageContent from "@/site-pages/contact"
export const metadata: Metadata = {
  title: "Contact an Accountant | Book a Free Consultation",
  description:
    "Contact FinCore Accounting to schedule a free consultation about bookkeeping, tax preparation, payroll, or business advisory services.",
  keywords: [
    "contact accountant",
    "free accounting consultation",
    "bookkeeping consultation",
    "tax accountant contact",
  ],
}
export default function Page() {
  return <PageContent />
}
