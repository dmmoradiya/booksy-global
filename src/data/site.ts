import {
  Building2,
  Calculator,
  ChartLine,
  ClipboardList,
  FileChartColumn,
  Hotel,
  Laptop,
  ShoppingBag,
  UserRoundSearch,
  Users,
  type LucideIcon,
} from "lucide-react"

export const bookingUrl = "https://calendar.app.google/wTYfcaGt1YWVKd3P7"

export const contact = {
  phone: "+91 62803 47210",
  phoneHref: "tel:+916280347210",
  email: "info@booksyglobal.com",
  address: ["123, Health Street, Sector 45", "Your City, State 500001"],
  mapQuery: "123, Health Street, Sector 45, Your City, State 500001",
  hours: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 2:00 PM"],
}

export type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  category: string
  summary: string
  intro: string
  features: string[]
}

export const services: Service[] = [
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

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    to: "/services",
    children: services.map((s) => ({ label: s.title, to: `/services#${s.slug}` })),
  },
  { label: "Industries", to: "/industries" },
  { label: "Resources", to: "/resources" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
]

export type Industry = { icon: LucideIcon; title: string; text: string; points: string[] }

export const industries: Industry[] = [
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

export const team = [
  {
    name: "Robert Hayes, CPA",
    role: "Founder & Managing Partner",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&h=560&q=80",
  },
  {
    name: "Priya Sharma, CPA",
    role: "Director of Tax",
    photo:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&h=560&q=80",
  },
  {
    name: "Michael Turner",
    role: "Head of Advisory",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&h=560&q=80",
  },
  {
    name: "Laura Kim, EA",
    role: "Payroll & Compliance Lead",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&h=560&q=80",
  },
]

export type Post = {
  category: "Tax" | "Bookkeeping" | "Payroll" | "Growth"
  title: string
  excerpt: string
  date: string
  read: string
  image: string
}

export const posts: Post[] = [
  {
    category: "Tax",
    title: "10 Small Business Tax Deductions You're Probably Missing",
    excerpt:
      "From home office costs to startup expenses, these overlooked write-offs can add up to real savings.",
    date: "Oct 8, 2026",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Bookkeeping",
    title: "Cash vs. Accrual Accounting: Which Is Right for You?",
    excerpt:
      "A plain-English guide to the two methods and how your choice affects taxes and reporting.",
    date: "Sep 24, 2026",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Growth",
    title: "How to Build a 13-Week Cash Flow Forecast",
    excerpt:
      "The simple forecasting tool that helps owners spot shortfalls weeks before they happen.",
    date: "Sep 10, 2026",
    read: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Payroll",
    title: "Employee or Contractor? Getting Classification Right",
    excerpt:
      "Misclassification is costly. Here's how the IRS decides, and how to protect your business.",
    date: "Aug 27, 2026",
    read: "7 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Tax",
    title: "Should Your LLC Elect S-Corp Status?",
    excerpt: "When the S-Corp election saves money on self-employment tax, and when it doesn't.",
    date: "Aug 12, 2026",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Growth",
    title: "5 Financial KPIs Every Owner Should Track Monthly",
    excerpt:
      "Gross margin, burn, DSO and more: the numbers that tell you how your business is really doing.",
    date: "Jul 30, 2026",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
]

export const guides = [
  { title: "2026 Small Business Tax Calendar", pages: "PDF · 4 pages" },
  { title: "Year-End Bookkeeping Checklist", pages: "PDF · 6 pages" },
  { title: "New Employer Payroll Setup Guide", pages: "PDF · 8 pages" },
  { title: "Startup Financial Model Template", pages: "XLSX · Template" },
]

export const faqs = [
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the size and complexity of your business. Bookkeeping starts at $299/month and tax returns at $249. We always provide a fixed quote after a free consultation, with no hidden fees.",
  },
  {
    q: "Do you work with businesses outside our city?",
    a: "Yes. We serve clients in all 50 states. Our cloud-based tools and secure client portal let us work with you just as closely as a local firm.",
  },
  {
    q: "Which accounting software do you support?",
    a: "We are certified in QuickBooks Online, Xero and Zoho Books, and can also work with NetSuite, FreshBooks and industry-specific platforms.",
  },
  {
    q: "Can you help if my books are behind?",
    a: "Absolutely. Catch-up and clean-up bookkeeping is one of our specialties. We can bring months or even years of records up to date and file any missed returns.",
  },
  {
    q: "How do I share documents securely?",
    a: "All documents are exchanged through our encrypted client portal. We never ask you to email sensitive information such as tax IDs or bank details.",
  },
  {
    q: "Will I have a dedicated accountant?",
    a: "Yes. Every client is assigned a dedicated accountant who knows your business, backed by a senior CPA who reviews all work.",
  },
]
