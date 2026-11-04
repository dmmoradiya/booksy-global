import {
  Building2,
  Calculator,
  ChartLine,
  ClipboardList,
  FileChartColumn,
  ShoppingBag,
  UserRoundSearch,
  Users,
  type LucideIcon,
} from "lucide-react"
import type { CountryCode } from "@/lib/country"

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  category: string
  summary: string
  intro: string
  features: string[]
}

const australiaServices: Service[] = [
  {
    slug: "bookkeeping-accounting-support",
    icon: Users,
    category: "Core practice",
    title: "Bookkeeping & Accounting Support",
    summary: "Keep day-to-day records accurate, reconciled, and ready for month-end review.",
    intro:
      "Reliable bookkeeping support that helps keep your firm’s ledgers current and your clients’ financial records ready for review.",
    features: [
      "Daily bank-feed matching",
      "Transaction categorisation",
      "Expense coding and review",
      "Accounts payable support",
      "Accounts receivable support",
      "Bank reconciliation",
      "Credit card reconciliation",
      "Supplier account reconciliation",
      "Customer balance tracking",
      "General ledger maintenance",
      "Month-end books closures",
    ],
  },
  {
    slug: "payroll-stp-support",
    icon: Calculator,
    category: "Payroll operations",
    title: "Payroll & STP Support",
    summary: "Organised payroll processing and reporting support, including STP Phase 2.",
    intro:
      "Payroll administration support that helps maintain accurate employee records, reconciliations, and reporting across each pay cycle.",
    features: [
      "Payroll data review",
      "Payroll processing support",
      "Payroll reconciliation",
      "Single Touch Payroll Phase 2 support",
      "Superannuation tracking",
      "Employee payment record support",
      "Payroll reporting",
      "Payroll-related bookkeeping entries",
    ],
  },
  {
    slug: "bas-ias-gst-support",
    icon: ClipboardList,
    category: "Statutory lodgements",
    title: "BAS, IAS & GST Support",
    summary: "Reconciliations, working papers, and schedules for recurring lodgement periods.",
    intro:
      "Practical support for BAS, IAS, and GST workflows, with reconciliations and supporting schedules organised for review.",
    features: [
      "BAS preparation support",
      "IAS preparation support",
      "GST reconciliation",
      "Sales and purchase review",
      "GST coding checks",
      "Bank and ledger reconciliation",
      "Compliance-ready working papers",
      "Supporting schedules",
      "Monthly and quarterly reporting support",
    ],
  },
  {
    slug: "tax-workpapers-compliance-support",
    icon: FileChartColumn,
    category: "Year-end preparation",
    title: "Tax Workpapers & Compliance Support",
    summary: "Structured schedules and workpapers to support accurate year-end tax preparation.",
    intro:
      "Consistent workpaper preparation that helps accounting practices organise source records, schedules, and tax-ready financial information.",
    features: [
      "Company tax workpapers",
      "Trust tax workpapers",
      "Partnership tax workpapers",
      "Sole trader workpapers",
      "Financial statement schedules",
      "Capital asset records",
      "Capital Gains Tax tracking support",
      "Division 7A schedule support",
      "Franking credit account records",
      "Tax-ready financial information",
    ],
  },
  {
    slug: "financial-reporting-cash-flow-support",
    icon: ChartLine,
    category: "Executive intelligence",
    title: "Financial Reporting & Cash-Flow Support",
    summary: "Clear management reports and cash-flow visibility for better business decisions.",
    intro:
      "Timely reporting support that turns reconciled books into useful financial statements, performance insights, and cash-flow views.",
    features: [
      "Monthly Profit and Loss reports",
      "Balance Sheet reports",
      "Management reporting",
      "Cash-flow forecasting support",
      "Expense analysis",
      "Financial dashboards",
      "Budget versus actual reporting support",
      "Business performance reporting",
    ],
  },
  {
    slug: "e-commerce-accounting-support",
    icon: ShoppingBag,
    category: "Multi-channel commerce",
    title: "E-Commerce Accounting Support",
    summary: "Bring online store, marketplace, and payment-gateway activity into alignment.",
    intro:
      "Reconciliation support for e-commerce sales, settlements, payment gateways, fees, and marketplace payouts.",
    features: [
      "Shopify sales reconciliation",
      "Amazon sales reconciliation",
      "Stripe reconciliation",
      "PayPal reconciliation",
      "Payment gateway reconciliation",
      "Sales settlement matching",
      "Payout reconciliation",
      "Marketplace fee tracking",
      "E-commerce reporting support",
    ],
  },
  {
    slug: "catch-up-cleanup-bookkeeping",
    icon: UserRoundSearch,
    category: "Ledger remediation",
    title: "Catch-Up & Cleanup Bookkeeping",
    summary: "Bring overdue or inconsistent records back into a clear, reviewable order.",
    intro:
      "A methodical cleanup process to resolve backlogs, locate missing transactions, and prepare organised records for year-end reporting.",
    features: [
      "Historical transaction categorisation",
      "Bank reconciliation cleanup",
      "Credit card reconciliation cleanup",
      "Ledger cleanup",
      "Backlog bookkeeping",
      "Missing transaction review",
      "Financial record organisation",
      "Preparation for year-end reporting",
    ],
  },
  {
    slug: "dedicated-offshore-staff",
    icon: Users,
    category: "Accounting practice extension",
    title: "Dedicated Offshore Staff for Accounting Practices",
    summary: "Add dedicated bookkeeping and accounting capacity aligned to your firm’s workflows.",
    intro:
      "Dedicated team members who work within agreed firm workflows, naming conventions, review procedures, and client portfolio requirements.",
    features: [
      "Dedicated bookkeeping and accounting staff",
      "Client portfolio support",
      "Seasonal capacity during busy periods",
      "Reconciliation and bookkeeping production",
      "Accounts production and tax workpaper support",
      "White-label delivery support where agreed",
      "Firm-specific workflows, naming conventions, and review procedures",
    ],
  },
  {
    slug: "smsf-accounting-administration-support",
    icon: Building2,
    category: "Superannuation funds",
    title: "SMSF Accounting and Administration Support",
    summary: "Maintain SMSF records, reconciliations, schedules, and year-end working papers.",
    intro:
      "Bookkeeping and administration support for self-managed superannuation funds, with organised records for financial statement, audit, and tax preparation workflows.",
    features: [
      "SMSF bookkeeping",
      "Bank and investment account reconciliations",
      "Member contribution tracking",
      "Pension payment tracking",
      "Investment income reconciliation",
      "Asset and capital gains schedules",
      "Property income and expense tracking",
      "Year-end working papers",
      "Financial statement preparation support",
      "Audit and tax preparation support files",
    ],
  },
]

export const servicesByCountry: Record<CountryCode, Service[]> = {
  AU: australiaServices,
  US: [],
  UK: [],
}
