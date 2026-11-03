import type { Metadata } from "next"
import "./globals.css"
import { Layout } from "@/components/layout"
export const metadata: Metadata = {
  title: {
    default: "Booksy Global | Tax, Bookkeeping & Advisory",
    template: "%s | Booksy Global",
  },
  description:
    "Trusted accounting, tax preparation, bookkeeping, payroll, and business advisory services to help businesses stay compliant, save taxes, and grow with confidence.",
  keywords: [
    "accounting services",
    "bookkeeping services",
    "tax preparation",
    "payroll services",
    "small business accountant",
    "business advisory",
  ],
  applicationName: "Booksy Global",
  openGraph: {
    type: "website",
    siteName: "Booksy Global",
    title: "Booksy Global | Tax, Bookkeeping & Advisory",
    description: "Accounting and tax services for growing businesses.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booksy Global | Tax, Bookkeeping & Advisory",
    description: "Accounting and tax services for growing businesses.",
  },
  icons: { icon: "/favicon.svg" },
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
