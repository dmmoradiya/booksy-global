"use client"

import Image from "next/image"
import { Award, Check, Eye, ShieldCheck, Target } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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

const principles = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver reliable, accurate and tailored accounting and financial services that help our clients manage their financial responsibilities with confidence. We are committed to providing professional support, maintaining high standards of quality and building lasting relationships based on trust, transparency and consistency.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be a trusted and respected financial services partner, recognised for our professional expertise, consistent quality and commitment to client success. We aim to continuously strengthen our capabilities and deliver practical financial solutions that support the long-term growth of the businesses we serve.",
  },
]

const coreValues = [
  {
    icon: Award,
    title: "Accuracy & Quality",
    text: "We take care over every entry, reconciliation and report. Structured processes and Chartered Accountant review help keep our work consistent and reliable.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    text: "We communicate honestly, set clear expectations and say what we can and cannot do. Trust is built through openness, not overstatement.",
  },
  {
    icon: Check,
    title: "Professional Excellence",
    text: "Our team’s commitment to learning, professional standards and continuous improvement keeps our support dependable as client needs evolve",
  },
]

export default function AboutPage() {
  const principlesRef = useRef<HTMLDivElement>(null)
  const [principlesVisible, setPrinciplesVisible] = useState(false)

  useEffect(() => {
    const section = principlesRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPrinciplesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

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
          <p className="text-base font-semibold tracking-wide text-blue-200">About Booksy Global</p>
          <h1 className="mt-5 max-w-[900px] font-serif text-[2.65rem] leading-[1.1] tracking-tight text-white sm:text-[3.35rem] lg:text-[4rem]">
            Smart Accounting Support for Businesses and Practices That Want to Scale
          </h1>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] items-center gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:h-[420px]">
            <Image
              src="/about-workspace.avif"
              alt="Bright office workspace with desks and natural light"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5 text-[16.6px] leading-7 text-slate-600 sm:text-base">
            <p>
              Booksy Global provides reliable bookkeeping, accounting, payroll, tax preparation,
              compliance and financial reporting support to businesses and accounting practices
              across the United States, Australia and the United Kingdom.
            </p>
            <p>
              We act as an extension of your finance team - helping you manage day-to-day accounting
              workloads, maintain organised records, prepare clear financial reports and build
              capacity without the cost and complexity of expanding an in-house team.
            </p>
            <p>
              Our approach combines experienced accounting professionals, structured workflows,
              secure cloud collaboration and Chartered Accountant-led review processes. Whether you
              need ongoing bookkeeping, support during busy periods, e-commerce reconciliation,
              payroll assistance, tax workpapers or dedicated accounting staff, we tailor our
              support around your business requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div ref={principlesRef} className="mx-auto max-w-[1360px]">
          <div className="grid gap-6 lg:grid-cols-2">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <article
                id={title === "Our Mission" ? "our-mission" : "our-vision"}
                key={title}
                className={
                  "scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_36px_-24px_rgba(9,24,47,0.3)] transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:p-9 " +
                  (principlesVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0")
                }
                style={{ transitionDelay: principlesVisible ? index * 100 + "ms" : "0ms" }}
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl leading-tight font-semibold tracking-tight text-ink sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-4 text-[16.6px] leading-7 text-slate-600 sm:text-base">{text}</p>
              </article>
            ))}
          </div>

          <h2 id="core-values"
            className="mt-14 scroll-mt-24 text-center text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
            Core Values
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {coreValues.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className={
                  "rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_36px_-24px_rgba(9,24,47,0.3)] transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none sm:p-7 " +
                  (principlesVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0")
                }
                style={{ transitionDelay: principlesVisible ? (index + 2) * 100 + "ms" : "0ms" }}
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl leading-snug font-semibold tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-[15.4px] leading-7 text-slate-600 sm:text-base">{text}</p>
              </article>
            ))}
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

      <section className="bg-brand-soft px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
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

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl">
              Our Commitment
            </h2>
            <p className="mt-6 text-xl leading-[1.45] font-semibold text-ink sm:text-2xl">
              At Booksy Global, we are committed to helping clients gain clearer financial
              information, improve operational capacity, and focus more time on business growth.
            </p>
          </div>
          <div>
            <p className="mb-3 text-sm font-medium text-slate-600">We aim to provide:</p>
            <ul>
              {commitments.map((commitment) => (
                <li
                  key={commitment}
                  className="flex items-start gap-3 border-b border-slate-200 py-3 text-sm leading-6 text-slate-700 sm:text-[16.6px]"
                >
                  <Check
                    className="mt-1 size-4 shrink-0 text-brand"
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
    </>
  )
}
