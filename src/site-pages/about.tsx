"use client"

import Image from "next/image"
import { Check } from "lucide-react"

const services = [
  "Daily bookkeeping and transaction categorisation",
  "Bank, credit card, and loan reconciliations",
  "Accounts payable and accounts receivable support",
  "Payroll processing and payroll reconciliation support",
  "Financial reporting and management dashboards",
  "Cash-flow forecasting support",
  "Tax workpapers and compliance preparation",
  "Year-end accounts preparation support",
  "E-commerce reconciliation for online sales platforms",
  "Catch-up and cleanup bookkeeping",
  "Dedicated accounting support for businesses and practices",
]

const commitments = [
  "Reliable and organised accounting support",
  "Flexible capacity based on your workload",
  "Clear communication and timely delivery",
  "Secure and confidential workflows",
  "Support within client-approved software systems",
  "Experienced Chartered Accountant supervision",
  "Country-specific support for the United States, Australia, and the United Kingdom",
]

const leaders = [
  {
    name: "CA Milan Baldaniya",
    role: "Co-Founder",
    paragraphs: [
      "CA Milan Baldaniya is a Chartered Accountant and Co-Founder of Booksy Global, with over 3 years of experience in accounting, taxation, and compliance. He helps Australian businesses and accounting firms manage their financial work smoothly and efficiently.",
      "His expertise includes Individual, Company, and Trust Tax Returns, BAS/IAS, GST compliance, bookkeeping, year-end accounts, and financial reporting. He is proficient in Xero and QuickBooks Online and is Xero Certified across all levels (L1, L2, and L3).",
      "As Co-Founder, Milan aims to support Australian accounting firms with reliable and quality offshore services, reduce their workload, and build long-term business relationships based on trust, professionalism, and excellence.",
    ],
  },
  {
    name: "CA Harsh Dhameliya",
    role: "Co-Founder",
    paragraphs: [
      "CA Harsh Dhameliya is a Chartered Accountant (ICAI) and Co-Founder of Booksy Global, with over 4 years of experience in accounting and bookkeeping for Australian and US businesses. He helps businesses and accounting firms manage their financial records accurately and efficiently.",
      "His expertise includes daily bookkeeping, bank and credit card reconciliations, accounts payable and receivable, payroll processing, month-end closing, and financial reporting. He is proficient in QuickBooks Online, Xero, NetSuite, and Bill.com. He is also an INTUIT ProAdvisor and Xero Certified Professional, with a strong understanding of accounting software and financial processes.",
      "As Co-Founder, Harsh focuses on providing reliable and quality outsourcing services, simplifying accounting processes, and building long-term client relationships based on trust, accuracy, and professionalism.",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src="/about-hero.avif"
          alt="Professional team collaborating in a modern office"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b192c]/85 via-[#0b192c]/65 to-[#0b192c]/35"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[360px] max-w-[1360px] flex-col justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-4">
          <p className="text-sm font-semibold tracking-wide text-blue-200">About Us</p>
          <h1 className="mt-5 font-serif text-[2.65rem] leading-[1.1] tracking-tight text-white sm:text-[3.35rem] lg:text-[4rem]">
            About Booksy Global
          </h1>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
              About Booksy Global
            </p>
            <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
              Smart Accounting Support for Businesses and Practices That Want to Scale
            </h2>
          </div>
          <div className="space-y-5 text-[16.6px] leading-7 text-slate-600 sm:text-base">
            <p>
              Booksy Global provides reliable bookkeeping, accounting, payroll, tax preparation,
              compliance, and financial reporting support to businesses and accounting practices
              across the United States, Australia, and the United Kingdom.
            </p>
            <p>
              We act as an extension of your finance team—helping you manage day-to-day accounting
              workloads, maintain organised records, prepare clear financial reports, and build
              capacity without the cost and complexity of expanding an in-house team.
            </p>
            <p>
              Our approach combines experienced accounting professionals, structured workflows,
              secure cloud collaboration, and Chartered Accountant-led review processes. Whether you
              need ongoing bookkeeping, support during busy periods, e-commerce reconciliation,
              payroll assistance, tax workpapers, or dedicated accounting staff, we tailor our
              support around your business requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fa]">
        <div className="mx-auto grid max-w-[1360px] items-stretch gap-0 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:my-16 lg:h-auto">
            <Image
              src="/about-workspace.avif"
              alt="Bright office workspace with desks and natural light"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center py-12 sm:py-16 lg:py-20 lg:pl-16">
            <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">Our Purpose</p>
            <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
              To Make Accounting Support More Accessible, Flexible, and Reliable
            </h2>
            <div className="mt-6 space-y-5 text-[16.6px] leading-7 text-slate-600 sm:text-base">
              <p>
                Managing bookkeeping, payroll, reporting, and compliance work can take valuable time
                away from running and growing a business. Booksy Global helps reduce that pressure
                by providing dependable offshore accounting support that works within your existing
                processes and software.
              </p>
              <p>
                Our goal is simple: to help businesses and accounting practices gain clearer
                financial visibility, stronger operational capacity, and more time to focus on
                high-value work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-5 text-[16.6px] leading-7 text-slate-600 sm:text-base">
              Our team supports a range of accounting and finance activities, including:
            </p>
          </div>
          <ul>
            {services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-3 border-b border-slate-200 py-3 text-sm leading-6 text-slate-700 sm:text-[16.6px]"
              >
                <Check
                  className="mt-1 size-4 shrink-0 text-brand"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand-soft/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
            Our Approach
          </h2>
          <div>
            <p className="text-xl leading-[1.45] font-semibold text-ink sm:text-2xl">
              We believe that effective outsourcing should feel like a natural extension of your
              existing team. That is why we focus on clear communication, structured workflows,
              secure access, and consistent delivery.
            </p>
            <div className="mt-8 grid gap-6 text-[16.6px] leading-7 text-slate-600 md:grid-cols-2">
              <p>
                Our process begins by understanding your business, software, reporting requirements,
                and deadlines. We then align our support with your preferred systems and working
                methods.
              </p>
              <p>
                Every engagement is supported by clear documentation, quality review procedures, and
                professional oversight from experienced Chartered Accountants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl">
              Our Commitment
            </h2>
            <p className="mt-6 text-xl leading-[1.45] font-semibold text-white sm:text-2xl">
              At Booksy Global, we are committed to helping clients gain clearer financial
              information, improve operational capacity, and focus more time on business growth.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-blue-100">We aim to provide:</p>
            <ul>
              {commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="flex items-start gap-3 border-b border-white/15 py-3 text-sm leading-6 text-white/90 sm:text-[16.6px]"
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-sky-300"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1360px]">
          <header className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
              Leadership &amp; Practice Governance
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-[16.6px] leading-7 text-slate-600 sm:text-base">
              Booksy Global is supported by qualified Chartered Accountants who oversee
              country-specific accounting and outsourcing operations.
            </p>
          </header>
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
            {leaders.map(({ name, role, paragraphs }) => (
              <article
                key={name}
                className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 shadow-[0_8px_28px_-20px_rgba(15,29,51,0.28)] sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-5">
                  <h3 className="text-xl leading-snug font-semibold text-ink sm:text-2xl">{name}</h3>
                  <span className="rounded-full bg-brand-soft px-4 py-1.5 text-sm font-semibold text-brand">
                    {role}
                  </span>
                </div>
                <div className="mt-5 space-y-6 text-[16.6px] leading-7 text-slate-600 sm:text-base">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
