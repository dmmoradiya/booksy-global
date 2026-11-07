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
  homeFeatures: string[]
}

const australiaServices: Service[] = [
  {
    slug: "bookkeeping-accounting-support",
    icon: Users,
    category: "Bookkeeping & accounting",
    title: "Bookkeeping & Accounting Support",
    summary: "Keep day-to-day records accurate, reconciled, and ready for review.",
    intro:
      "Reliable bookkeeping support for accurate day-to-day records, reconciliations, and period-end close.",
    features: [
      "Daily transaction categorisation",
      "Expense coding, verification and review",
      "Accounts payable management and supplier statement reconciliation",
      "Accounts receivable management and customer balance tracking",
      "Bank and credit card account reconciliations",
      "General ledger maintenance and routine journal entries",
      "Month-end and period-end financial closing",
    ],
    homeFeatures: [
      "Daily transaction categorisation",
      "Expense coding and verification",
      "Supplier bills and statement matching",
      "Customer invoices and balance tracking",
      "Bank and credit card reconciliations",
      "Ledger upkeep and routine journals",
      "Month-end and period-end close",
    ],
  },
  {
    slug: "payroll-stp-support",
    icon: Calculator,
    category: "Payroll operations",
    title: "Payroll & STP Support",
    summary: "Accurate payroll processing, reconciliations, and reporting support.",
    intro:
      "Payroll administration support for processing, compliance reporting, and pay-period reconciliations.",
    features: [
      "Payroll data verification and end-to-end processing support",
      "Single Touch Payroll (STP) Phase 2 reporting and compliance",
      "Superannuation calculation, tracking and lodgement support",
      "End-of-period payroll reconciliations and variance analysis",
      "Payroll journal entries and general ledger posting",
      "Custom payroll summary and management reporting",
    ],
    homeFeatures: [
      "Payroll data verification and processing",
      "STP Phase 2 reporting and compliance",
      "Superannuation calculations and tracking",
      "Super contribution lodgement support",
      "Payroll reconciliations and variance checks",
      "Payroll journals and management reports",
    ],
  },
  {
    slug: "bas-ias-gst-support",
    icon: ClipboardList,
    category: "Statutory lodgements",
    title: "BAS, IAS & GST Support",
    summary: "Reconciliations, workpapers, and schedules for recurring lodgement periods.",
    intro:
      "Practical BAS, IAS, and GST workflow support with reconciliations and schedules prepared for review.",
    features: [
      "Sales, purchase, and GST coding review across all transactions",
      "Bank and general ledger balance reconciliations",
      "GST account reconciliation and variance verification",
      "BAS and IAS preparation support (monthly and quarterly)",
      "Supporting schedules and compliance-ready workpaper preparation",
      "Timely monthly and quarterly compliance reporting support",
    ],
    homeFeatures: [
      "Sales, purchase, and GST coding checks",
      "Bank and general ledger reconciliations",
      "GST balance and variance review",
      "Monthly and quarterly BAS support",
      "IAS workpapers and supporting schedules",
      "Periodic compliance reporting",
    ],
  },
  {
    slug: "tax-workpapers-compliance-support",
    icon: FileChartColumn,
    category: "Year-end preparation",
    title: "Year-End Accounts Finalisation & Tax Return Support",
    summary: "Finalise accounts and prepare entity-specific, review-ready year-end tax workpapers.",
    intro:
      "Structured account finalisation, year-end schedules, and tax workpaper files prepared for professional review.",
    features: [
      "General ledger finalisation and balance sheet lead schedules",
      "Fixed asset registers, depreciation schedules and Capital Gains Tax (CGT) tracking",
      "Division 7A loan schedules, benchmark interest calculations and Franking credit account maintenance",
      "Annual BAS reconciliation and ATO portal reconciliation (ICA and ITA statements)",
      "Tax-ready financial statements and year-end workpaper files",
      "Entity-specific tax workpaper preparation (Company, Trust, Partnership and Sole Trader)",
      "Capital Gains Tax (CGT) event tracking, small business concessions and schedule preparation",
      "Trust distribution schedules, streaming calculations and partnership profit allocations",
      "Preparation of partner-review-ready Income Tax Return (ITR) workpaper files",
    ],
    homeFeatures: [
      "Ledger finalisation and balance sheet schedules",
      "Fixed assets, depreciation, and CGT tracking",
      "Division 7A, franking credits, and annual BAS",
      "ATO portal reconciliations and tax-ready statements",
      "Company, trust, partnership, and sole trader workpapers",
      "Trust distributions, partnership allocations, and review-ready tax files",
    ],
  },
  {
    slug: "financial-reporting-cash-flow-support",
    icon: ChartLine,
    category: "Financial reporting",
    title: "Financial Reporting & Cash-Flow Support",
    summary: "Clear management reporting and cash-flow visibility for better decisions.",
    intro:
      "Timely reporting support that turns reconciled books into financial statements, performance insights, and cash-flow views.",
    features: [
      "Monthly Profit and Loss and Balance Sheet statement preparation",
      "Budget versus actual variance analysis and expense trend reviews",
      "Rolling cash-flow forecasting and liquidity tracking support",
      "Visual financial dashboards and KPI tracking",
      "Custom management reporting packs (MIS) and business performance analysis",
    ],
    homeFeatures: [
      "Monthly Profit and Loss statements",
      "Balance Sheet preparation",
      "Budget versus actual analysis",
      "Expense trends and variance reviews",
      "Rolling cash-flow forecasts",
      "Liquidity tracking and KPI dashboards",
      "Custom management reporting packs",
    ],
  },
  {
    slug: "e-commerce-accounting-support",
    icon: ShoppingBag,
    category: "Multi-channel commerce",
    title: "E-Commerce Accounting Support",
    summary: "Bring online store, marketplace, and payment activity into alignment.",
    intro:
      "Reconciliation support for e-commerce sales, settlements, payment gateways, fees, and marketplace payouts.",
    features: [
      "E-commerce platform and marketplace integration with accounting software",
      "Multi-channel sales reconciliation across Shopify, Amazon and online storefronts",
      "Payment gateway reconciliation for Stripe, PayPal and merchant processors",
      "Gross sales, refunds, discounts and marketplace fee tracking",
      "Settlement clearance and net payout bank-feed matching",
      "Channel-wise sales, refund and margin performance reporting support",
    ],
    homeFeatures: [
      "Store and marketplace accounting integration",
      "Shopify, Amazon, and online sales matching",
      "Stripe, PayPal, and gateway reconciliation",
      "Gross sales, refunds, and discounts tracking",
      "Marketplace fees and payout matching",
      "Channel-wise sales and margin reporting",
    ],
  },
  {
    slug: "catch-up-cleanup-bookkeeping",
    icon: UserRoundSearch,
    category: "Ledger remediation",
    title: "Catch-Up & Cleanup Bookkeeping",
    summary: "Bring overdue or inconsistent records back into a clear, reviewable order.",
    intro:
      "A methodical cleanup process to resolve backlogs, locate missing transactions, and organise records for year-end.",
    features: [
      "Backlog bookkeeping and historical transaction categorisation",
      "Missing documentation identification and financial record organisation",
      "Multi-period bank and credit card reconciliation cleanup",
      "General ledger cleanup, unallocated entry clearance and balance verification",
      "Preparation of reconciled, audit-ready books for year-end and tax reporting",
    ],
    homeFeatures: [
      "Historical transaction coding and catch-up",
      "Missing document identification",
      "Financial record organisation",
      "Multi-period bank reconciliation cleanup",
      "Credit card and ledger balance cleanup",
      "Reconciled, review-ready year-end books",
    ],
  },
  {
    slug: "smsf-accounting-administration-support",
    icon: Building2,
    category: "Superannuation funds",
    title: "SMSF Accounting and Administration Support",
    summary: "Support SMSF records, investment reconciliations, and year-end compliance files.",
    intro:
      "Bookkeeping and administration support for self-managed superannuation funds, with organised year-end records for review.",
    features: [
      "SMSF daily bookkeeping and general ledger maintenance",
      "Bank, broker, and investment trading account reconciliations",
      "Investment income verification (dividends, interest, trust distributions) and corporate action matching",
      "Property rental income, property expense tracking, and loan reconciliations",
      "Member contribution caps monitoring and pension payment drawdown tracking",
      "Market valuation updates, asset registers, and Capital Gains Tax (CGT) schedules",
      "Draft financial statement preparation (Operating Statement, Financial Position, and Member Statements)",
      "Audit-ready year-end workpaper files and annual tax return compliance packs",
    ],
    homeFeatures: [
      "SMSF bookkeeping and ledger maintenance",
      "Bank, broker, and investment reconciliations",
      "Investment income and corporate action checks",
      "Property income, expenses, and loan tracking",
      "Member contributions, pensions, and asset valuations",
      "CGT, financial statements, and audit-ready year-end files",
    ],
  },
  {
    slug: "dedicated-offshore-staff",
    icon: Users,
    category: "Accounting practice extension",
    title: "Dedicated Offshore Staff for Accounting Practices",
    summary: "Add dedicated accounting capacity aligned to your firm’s workflows.",
    intro:
      "Dedicated team members working within your firm workflows, software, review procedures, and client portfolio requirements.",
    features: [
      "Dedicated bookkeeping and accounting specialists aligned to your client portfolio",
      "Full adoption of firm-specific workflows, software stacks and review procedures",
      "End-to-end production support for routine bookkeeping, reconciliations and payroll",
      "High-level accounts finalisation, compliance schedules and tax workpaper preparation",
      "Flexible, seasonal capacity scaling to manage peak workflow during year-end and tax deadlines",
      "Seamless, white-label service delivery acting as an integrated extension of your local team",
    ],
    homeFeatures: [
      "Dedicated specialists for your client portfolio",
      "Firm workflows, software, and review procedures",
      "Routine bookkeeping and reconciliation support",
      "Payroll and accounts finalisation production",
      "Compliance schedules and tax workpapers",
      "Flexible capacity for year-end and tax peaks",
      "Seamless white-label team delivery",
    ],
  },
]

export const servicesByCountry: Record<CountryCode, Service[]> = {
  AU: australiaServices,
  US: [],
  UK: [],
}
