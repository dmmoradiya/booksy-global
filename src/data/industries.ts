import {
  BriefcaseBusiness,
  Building2,
  Calculator,
  ClipboardList,
  Hotel,
  Rocket,
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
    text: "Extend your practice’s capacity without adding local overheads. We work as an offshore extension of your team, following your workflows, templates and review standards.",
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
    text: "Online sales create high transaction volumes across multiple platforms. We help keep your sales, fees and payouts matched so your books stay accurate.",
    points: [
      "Shopify reconciliation",
      "Amazon reconciliation",
      "Stripe and PayPal reconciliation",
      "Sales and settlement matching",
      "Management reporting",
    ],
  },
  {
    icon: Rocket,
    title: "Startups",
    text: "Early-stage teams need reliable financial records without hiring a full finance team. We provide structured, scalable support from day one.",
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
    text: "Consultants, agencies and other service providers need accurate billing and tidy records so they can focus on clients. We take care of the routine finance work.",
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
    text: "Hospitality generates daily sales across several payment channels. We help keep daily takings, payments and supplier bills accurately recorded.",
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
    text: "Running a business leaves little time for bookkeeping. We keep your records accurate and up to date so you always know where you stand.",
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
    title: "SMSF Administrators & Trustees",
    text: "Self-managed super funds need well-organised records throughout the year. We support administrators and trustees with accurate bookkeeping and supporting schedules.",
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
