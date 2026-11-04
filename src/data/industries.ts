import {
  Building2,
  Calculator,
  ClipboardList,
  Hotel,
  Laptop,
  ShoppingBag,
  Users,
  type LucideIcon,
} from "lucide-react"
import type { CountryCode } from "@/lib/country"

export type Industry = { icon: LucideIcon; title: string; text: string; points: string[] }

const australiaIndustries: Industry[] = [
  {
    icon: Building2,
    title: "Accounting Firms & Bookkeeping Practices",
    text: "Workflow-ready bookkeeping and accounting capacity for established practices.",
    points: [
      "Outsourced bookkeeping support",
      "Accounts preparation support",
      "Busy-season capacity",
      "GST record support",
      "Tax workpapers",
      "Dedicated accounting team members",
      "Review-ready working files",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Businesses",
    text: "Reconciliation and reporting support for stores, marketplaces, and payment platforms.",
    points: [
      "Shopify reconciliation",
      "Amazon reconciliation",
      "Stripe and PayPal reconciliation",
      "Sales and settlement matching",
      "Management reporting",
    ],
  },
  {
    icon: Laptop,
    title: "Startups",
    text: "Organised financial records and reporting support as your business grows.",
    points: [
      "Day-to-day bookkeeping",
      "Cash-flow reporting",
      "GST record support",
      "Expense tracking",
      "Monthly management (MIS) reports",
      "Financial record organisation",
    ],
  },
  {
    icon: ClipboardList,
    title: "Professional Service Businesses",
    text: "Reliable billing, payroll, and bookkeeping support for service-led teams.",
    points: [
      "Client invoice support",
      "Expense tracking",
      "GST record support",
      "Accounts receivable support",
      "Payroll support",
      "Monthly reporting",
    ],
  },
  {
    icon: Hotel,
    title: "Hotel & Motel Businesses",
    text: "Day-to-day accounting support across sales, suppliers, payroll, and reporting.",
    points: [
      "Daily sales reconciliation",
      "Payment gateway reconciliation",
      "Supplier bill processing support",
      "GST record support",
      "Payroll support",
      "Expense categorisation",
      "Monthly management (MIS) reports",
    ],
  },
  {
    icon: Users,
    title: "Sole Traders & Small Businesses",
    text: "Practical bookkeeping and reporting support for independent operators and small teams.",
    points: [
      "Bookkeeping support",
      "GST record support",
      "Payroll support",
      "Catch-up bookkeeping",
      "Financial reporting",
    ],
  },
  {
    icon: Calculator,
    title: "SMSF Administrators and Trustees",
    text: "Organised bookkeeping and administration support for self-managed super funds.",
    points: [
      "SMSF bookkeeping support",
      "Investment and bank reconciliation",
      "Contribution and pension tracking",
      "Year-end working papers",
      "Audit-ready supporting schedules",
      "Organised fund records",
    ],
  },
]

export const industriesByCountry: Record<CountryCode, Industry[]> = {
  AU: australiaIndustries,
  US: [],
  UK: [],
}
