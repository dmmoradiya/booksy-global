import type { Metadata } from "next"
import LegalPage from "@/site-pages/legal"
export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms and conditions for using the FinCore Accounting website and services.",
}
export default function Page() {
  return <LegalPage kind="terms" />
}
