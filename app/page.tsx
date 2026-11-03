import type { Metadata } from "next"
import HomePage from "@/site-pages/home"
export const metadata: Metadata = {
  title: "Accounting, Tax & Bookkeeping Services for Small Businesses",
  description:
    "Booksy Global helps businesses grow with expert bookkeeping, tax preparation, payroll, financial reporting, and strategic business advisory.",
  keywords: [
    "accounting firm",
    "small business accounting",
    "bookkeeping",
    "tax preparation",
    "payroll",
    "financial advisory",
  ],
}
export default function Page() {
  return <HomePage />
}
