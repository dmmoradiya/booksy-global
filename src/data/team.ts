export type TeamProfile = {
  slug: string
  name: string
  initials: string
  role: string
  specialty: string
  summary: string
  tags: string[]
  biography: string[]
  focusAreas: { title: string; items: string[] }[]
  credentials: { label: string; items: string[] }[]
  email: string
  phone: string
}

export const teamProfiles: TeamProfile[] = [
  {
    slug: "ca-milan-baldaniya",
    name: "CA Milan Baldaniya",
    initials: "MB",
    role: "CO-FOUNDER · CA (INDIA)",
    specialty: "Australian Tax & Compliance · Surat, Gujarat, India",
    summary:
      "Chartered Accountant with 3+ years of experience in accounting, taxation and compliance. Helps Australian businesses and accounting firms manage their financial work smoothly, from tax returns and BAS to year-end accounts and reporting.",
    tags: ["Team leadership", "Quality review", "BAS / IAS", "GST compliance", "Tax returns"],
    biography: [
      "CA Milan Baldaniya is a Co-Founder of Booksy Global and leads its Australian Division. He is a Chartered Accountant with 3+ years of experience in accounting, taxation and compliance. He built the Australian practice around one idea: Australian accounting firms and businesses get dependable, review-ready support when it is delivered by a well-organised team and overseen by a qualified Chartered Accountant.",
      "Milan manages the division’s work through his team of accounting professionals. He sets up each engagement, assigns the right team members, defines workflows around the client’s templates and reviews the output before it reaches the client. His team handles bookkeeping, bank and credit card reconciliations, GST and BAS/IAS preparation support, year-end accounts preparation and financial reporting. Milan ensures this work is accurate, consistent and delivered ahead of reporting deadlines.",
      "His own background is hands-on. His expertise covers Individual, Company and Trust tax return preparation, BAS/IAS, GST compliance, bookkeeping, year-end accounts and financial reporting. He is proficient in Xero and QuickBooks Online and is Xero Certified across all levels (L1, L2 and L3). That depth lets him guide his team on the platforms Australian firms already use and review their work with confidence.",
      "For accounting firms and bookkeeping practices, Milan arranges dedicated team members who work inside the firm’s own systems, workflows and templates. He remains the point of accountability for quality, communication and turnaround.",
      "He operates from Surat, Gujarat, and focuses on supporting Australian accounting firms with reliable, quality offshore services, reducing their workload and building long-term relationships based on trust, professionalism and excellence.",
    ],
    focusAreas: [
      { title: "Team Leadership & Delivery", items: ["Engagement setup and team allocation", "Workflow design aligned to each firm’s systems and templates", "Task planning around BAS quarters, EOFY and other deadlines"] },
      { title: "Quality Review & Oversight", items: ["Chartered Accountant review of team output", "Reconciliation and reporting checks", "Review-ready working files for accountants and tax agents"] },
      { title: "Work Handled by the Team", items: ["Daily bookkeeping and transaction categorisation", "Bank, credit card and loan reconciliations", "Accounts payable, accounts receivable and payroll support", "Catch-up and clean-up bookkeeping", "Financial reporting and management reports"] },
      { title: "Australian Tax & Compliance Support", items: ["Individual, Company and Trust tax return preparation support", "BAS/IAS preparation support", "GST compliance records", "Year-end accounts and working papers"] },
      { title: "Client Communication", items: ["Single point of accountability for each engagement", "Regular progress updates and timely delivery", "Busy-season and EOFY capacity planning"] },
    ],
    credentials: [
      { label: "LICENCES & CERTIFICATIONS", items: ["Chartered Accountant", "Xero Certified (L1, L2, L3)"] },
      { label: "EXPERIENCE", items: ["3+ years in accounting, taxation and compliance"] },
      { label: "BASED IN", items: ["Surat, Gujarat, India"] },
      { label: "ROLE", items: ["Co-Founder; leads the Australian Division and manages its delivery team"] },
    ],
    email: "info.booksyglobal@gmail.com",
    phone: "+91 96874 87068",
  },
  {
    slug: "ca-harsh-dhameliya",
    name: "CA Harsh Dhameliya",
    initials: "HD",
    role: "CO-FOUNDER · CA (INDIA)",
    specialty: "US Accounting & Tax Support · Surat, Gujarat, India",
    summary:
      "Chartered Accountant (ICAI) with 4+ years of experience in accounting and bookkeeping for Australian and US businesses. Leads Booksy Global’s US Division, helping US businesses and CPA firms keep clean books and tax-ready records, from daily bookkeeping and month-end close to US tax workpapers and compliance preparation support.",
    tags: ["Team leadership", "Quality review", "Bookkeeping oversight", "US tax"],
    biography: [
      "CA Harsh Dhameliya is a Co-Founder of Booksy Global and leads its US Division. He is a Chartered Accountant (ICAI) with 4+ years of experience in accounting and bookkeeping for Australian and US businesses. He built the US practice around one idea: clients get dependable, tax-ready accounting support when it is delivered by a well-organised team and overseen by a qualified Chartered Accountant.",
      "Harsh manages the division’s work through his team of accounting professionals. He sets up each engagement, assigns the right team members, defines the workflows and reviews the output before it reaches the client. His team handles daily bookkeeping, bank and credit card reconciliations, accounts payable and receivable, payroll processing support, month-end closing and financial reporting. Harsh ensures that this work is accurate, consistent and delivered on schedule.",
      "His own background is hands-on. He is proficient in QuickBooks Online, Xero, NetSuite and Bill.com, and is an Intuit ProAdvisor and Xero Certified Professional. That depth lets him guide his team on the platforms clients already use and review their work with confidence.",
      "For CPA firms and bookkeeping practices, Harsh arranges dedicated team members who work inside the firm’s own systems, workflows and templates. He remains the point of accountability for quality, communication and turnaround.",
      "He operates from Surat, Gujarat, and focuses on building long-term client relationships based on trust, accuracy and professionalism.",
    ],
    focusAreas: [
      { title: "Team Leadership & Delivery", items: ["Engagement setup and team allocation", "Workflow design aligned to each client’s systems", "Task planning around reporting cycles and deadlines"] },
      { title: "Quality Review & Oversight", items: ["Chartered Accountant review of team output", "Reconciliation and reporting checks", "Review-ready working files for CPAs and tax preparers"] },
      { title: "Work Handled by the Team", items: ["Daily bookkeeping and transaction categorisation", "Bank and credit card reconciliations", "Accounts payable, accounts receivable and payroll support", "Month-end closing and financial reporting", "Catch-up and clean-up bookkeeping"] },
      { title: "US Tax-Ready Records", items: ["Tax workpapers and supporting schedules for CPAs", "1099 vendor data and W-9 record organisation", "Sales tax and payroll tax records for review"] },
      { title: "Client Communication", items: ["Single point of accountability for each engagement", "Regular progress updates and timely delivery", "Busy-season and filing-season capacity planning"] },
    ],
    credentials: [
      { label: "LICENCES & CERTIFICATIONS", items: ["Chartered Accountant (ICAI, India)", "Intuit ProAdvisor", "Xero Certified Professional"] },
      { label: "EXPERIENCE", items: ["4+ years in accounting and bookkeeping for Australian and US businesses"] },
      { label: "BASED IN", items: ["Surat, Gujarat, India"] },
      { label: "ROLE", items: ["Co-Founder; leads the US Division and manages its delivery team"] },
    ],
    email: "info.booksyglobal@gmail.com",
    phone: "+91 90161 61163",
  },
]
