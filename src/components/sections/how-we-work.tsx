"use client"

import { BarChart3, ClipboardCheck, FileText, LockKeyhole, Pin } from "lucide-react"
import { countryDetails, useCountry } from "@/lib/country"

const steps = [
  {
    icon: FileText,
    title: "Tell Us About Your Requirements",
    text: "Share your business type, accounting software, required services, transaction volume, current challenges, and reporting deadlines.",
  },
  {
    icon: ClipboardCheck,
    title: "Receive a Tailored Support Plan",
    text: "Our team reviews your requirements and recommends the most suitable bookkeeping, payroll, reporting, or accounting support approach.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Setup",
    text: "We align with your workflow and establish secure access to your client-approved systems.",
  },
  {
    icon: BarChart3,
    title: "Ongoing Delivery & Review",
    text: "Our team provides structured accounting support, clear communication, and timely delivery based on your agreed workflow.",
  },
]

export function HowWeWork() {
  const region = countryDetails[useCountry()]
  return (
    <section className="overflow-hidden bg-[#f6f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1360px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
            A clear path forward
          </p>
          <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Simple, Secure Onboarding
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16.6px] leading-7 text-slate-600">
            A disciplined, phased journey designed to seamlessly embed {region.adjective}{" "}
            bookkeeping and accounting support into your existing practice.
          </p>
        </div>

        <div className="relative isolate mx-auto mt-12 max-w-[800px] sm:mt-16">
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
            viewBox="0 0 800 1100"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 230 140 C 450 160, 560 300, 570 410 C 580 540, 230 580, 230 710 C 230 830, 560 880, 570 990"
              stroke="#a9c2e9"
              strokeWidth="3"
              strokeDasharray="8 8"
              strokeLinecap="round"
            />
          </svg>

          <ol className="relative z-10 space-y-16 py-8 sm:space-y-24">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <li
                key={title}
                className={
                  index % 2 === 0 ? "flex justify-start md:pl-6" : "flex justify-end md:pr-6"
                }
              >
                <article
                  className={[
                    "relative w-full rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-b from-white to-[#f5f8ff] p-6 pt-8 shadow-[0_20px_35px_-8px_rgba(15,23,42,0.08),0_8px_16px_-6px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1 sm:p-8 sm:pt-9 md:w-[380px] lg:w-[410px]",
                    index === 0
                      ? "md:-rotate-[3.5deg]"
                      : index === 1
                        ? "md:rotate-[3deg]"
                        : index === 2
                          ? "md:-rotate-2"
                          : "md:rotate-[2.5deg]",
                  ].join(" ")}
                >
                  <span
                    className="absolute -top-6 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center text-brand drop-shadow-[0_3px_3px_rgba(15,29,51,0.24)]"
                    aria-hidden="true"
                  >
                    <Pin className="size-9 fill-brand" strokeWidth={1.8} />
                  </span>
                  <span className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-brand/10 bg-brand-soft text-brand shadow-sm sm:mb-5">
                    <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <p className="text-xs font-bold tracking-[0.12em] text-brand uppercase">
                    Phase {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-xl leading-snug font-semibold tracking-tight text-ink sm:text-2xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.7] text-slate-600 sm:text-base">{text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
