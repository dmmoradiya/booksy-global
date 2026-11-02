import type { Metadata } from "next"
import LegalPage from "@/site-pages/legal"
export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the FinCore Accounting privacy policy and learn how information is handled when you use our website and services.",
}
export default function Page() {
  return <LegalPage kind="privacy" />
}
