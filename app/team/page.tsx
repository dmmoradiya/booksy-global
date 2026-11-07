import type { Metadata } from "next"
import TeamPage from "@/site-pages/team"

export const metadata: Metadata = {
  title: "Leadership Team | Booksy Global",
  description:
    "Meet the Chartered Accountants leading Booksy Global’s country-specific accounting and outsourcing operations.",
}

export default function Page() {
  return <TeamPage />
}
