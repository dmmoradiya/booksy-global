import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Check } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Card } from "@/components/ui/card"
import { industries } from "@/data/site"

export default function IndustriesPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#0b122a] text-white sm:min-h-[580px] lg:min-h-[calc(100svh-5rem)]">
        <Image
          src="/industries-hero.avif"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0b122a]/95 via-[#0b122a]/80 to-[#0b122a]/30"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 py-24 sm:px-10 md:py-28 lg:px-4">
          <div className="max-w-[850px]">
            <p className="text-sm font-semibold tracking-wide text-blue-200">
              Sectors & Practices
            </p>
            <h1 className="mt-5 font-serif text-[2.65rem] leading-[1.1] tracking-tight text-white sm:text-[3.35rem] lg:text-[4rem]">
              Accounting Support Built for Australian Businesses
            </h1>
            <p className="mt-7 max-w-[720px] text-base leading-[1.75] text-slate-200 sm:text-lg">
              Tailored workflow execution suited to the regulatory nuances and statutory schedules
              across diverse industry landscapes.
            </p>
            <Link
              href="#industry-cards"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#0b122a] transition hover:bg-brand-soft"
            >
              Explore industries <ArrowDown className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="industry-cards"
        className="scroll-mt-20 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-[1360px]">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Support shaped around your industry"
            divider
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-8 lg:gap-8">
            {industries.map(({ icon: Icon, title, text, points }, index) => (
              <Card
                key={title}
                className={`group gap-0 rounded-xl bg-white p-7 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] ring-slate-100 transition-all hover:-translate-y-1 hover:bg-navy hover:shadow-[0_18px_40px_-14px_rgba(15,29,51,0.35)] lg:col-span-2 lg:min-h-[500px] lg:p-8 ${index === 4 ? "lg:col-start-2" : ""}`}
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-brand-soft text-navy transition-colors group-hover:bg-white/10 group-hover:text-white">
                  <Icon className="size-7" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-[17.6px] font-semibold text-ink transition-colors group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-2.5 text-[14.4px] leading-[1.75] text-slate-600 transition-colors group-hover:text-white/80">
                  {text}
                </p>
                <ul className="mt-5 space-y-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[13.8px] leading-[1.5] font-medium text-ink transition-colors group-hover:text-white"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand group-hover:text-white"
                        strokeWidth={2.5}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
