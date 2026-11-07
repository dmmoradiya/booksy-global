"use client"

import { Award, Headset, Layers, LockKeyhole, PiggyBank, ShieldCheck } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Expert & Experienced Professionals",
    text: "Our work follows structured processes and is reviewed by qualified Chartered Accountants, supporting consistent, reliable and review-ready delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Quality control",
    text: "Our rigorous quality control process ensures every report and tax return is reviewed and verified. We check all financial data for accuracy and compliance with standard procedures and regulations.",
  },
  {
    icon: Layers,
    title: "Work Within Your Existing Systems",
    text: "We work in your client-approved accounting and finance platforms, so you keep your familiar systems, workflows and templates with no disruption to daily operations.",
  },
  {
    icon: Headset,
    title: "Dedicated Support Team",
    text: "Our team works as an extension of your internal finance team, accounting practice or business operations. It manages day-to-day production so you can focus on advisory, clients and growth.",
  },
  {
    icon: PiggyBank,
    title: "Cost Savings",
    text: "Outsourcing your accounting and tax services to us can save you time and money. You don’t have to worry about hiring, training staff and worry about employee turnover.",
  },
  {
    icon: LockKeyhole,
    title: "Data Security & Confidentiality",
    text: "Your data is always safe with us. We work in your approved cloud systems and on our own secure cloud infrastructure, protected by MFA, encryption and strict access controls. Also binding team NDAs and rigorous review checks.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1360px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
            Institutional standards
          </p>
          <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Why Choose Booksy Global
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-7">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="min-h-[168px] rounded-xl border border-slate-200 border-l-2 border-l-brand bg-[#f8fafc] p-5 transition-colors hover:border-brand/40 hover:bg-brand-soft/40 sm:min-h-[176px] sm:p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Icon className="size-5 shrink-0" strokeWidth={1.9} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg leading-snug font-semibold tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
