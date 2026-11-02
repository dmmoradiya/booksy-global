import type { Metadata } from "next"
import "./globals.css"
import { Layout } from "@/components/layout"
export const metadata: Metadata = {
  title: {
    default: "FinCore Accounting | Tax, Bookkeeping & Advisory",
    template: "%s | FinCore Accounting",
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
  applicationName: "FinCore Accounting",
  openGraph: {
    type: "website",
    siteName: "FinCore Accounting",
    title: "FinCore Accounting | Tax, Bookkeeping & Advisory",
    description: "Accounting and tax services for growing businesses.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinCore Accounting | Tax, Bookkeeping & Advisory",
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
