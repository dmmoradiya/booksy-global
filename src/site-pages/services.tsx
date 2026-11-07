"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, Check } from "lucide-react"

import { countryContent } from "@/data/country-content"
import { useCountry } from "@/lib/country"

export default function ServicesPage() {
  const country = useCountry()
  const services = countryContent[country].services
  return (
    <>
      <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#0b172b] text-white sm:min-h-[580px] lg:min-h-[calc(100svh-5rem)]">
        <Image
          src="/services-hero.avif"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0b172b]/95 via-[#0b172b]/80 to-[#0b172b]/35"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 py-24 sm:px-10 md:py-28 lg:px-4">
          <div className="max-w-[850px]">
            <p className="text-base font-semibold tracking-wide text-blue-200">
              Service Catalogue & Capabilities
            </p>
            <h1 className="mt-5 font-serif text-[2.65rem] leading-[1.1] tracking-tight text-white sm:text-[3.35rem] lg:text-[4rem]">
              Bookkeeping, Payroll & Taxation
              <br className="hidden sm:block" /> Compliance Support
            </h1>
            <p className="mt-7 max-w-[720px] text-base leading-[1.75] text-slate-200 sm:text-lg">
              Whether you require day-to-day bookkeeping, payroll support, BAS preparation
              assistance, year-end reporting, catch-up bookkeeping, or a dedicated accounting
              resource, our team can work as an extension of your existing operations.
            </p>
            <Link
              href="#practice-areas"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#0b172b] transition hover:bg-brand-soft"
            >
              Explore practice areas <ArrowDown className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <nav
        id="practice-areas"
        aria-label="Index of practice areas"
        className="scroll-mt-20 border-y border-slate-200 bg-white"
      >
        <div className="w-full px-4 py-5 sm:px-6 lg:px-10">
          <p className="mb-3 text-[11px] font-bold tracking-[0.14em] text-slate-500 uppercase">
            Index of practice areas
          </p>
          <div className="practice-index-track flex gap-2 overflow-x-auto pb-2 scroll-smooth">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={"#" + service.slug}
                className="min-w-[132px] shrink-0 rounded-md border border-slate-200 bg-[#f8fafb] px-3 py-2.5 transition hover:border-brand/40 hover:bg-brand-soft"
              >
                <span className="block font-mono text-[11px] font-semibold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block text-[12.2px] leading-snug font-medium text-slate-700">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section
        aria-label="Our practice areas"
        className="bg-[#f3f6f8] px-4 py-10 sm:px-6 sm:py-14 lg:px-10"
      >
        <div className="mx-auto max-w-[1360px] space-y-5">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              data-service-index={index}
              className={
                "service-card-enter scroll-mt-24 rounded-xl border border-slate-200/80 p-5 sm:p-7 lg:p-9 " +
                (index % 2 === 0 ? "bg-white" : "bg-[#edf1f4]")
              }
            >
              <div className="grid gap-7 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-10">
                <div className="flex flex-col items-start">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-3xl leading-none font-semibold text-brand sm:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.13em] text-brand uppercase">
                      {service.category}
                    </span>
                  </div>
                  <h2 className="mt-4 max-w-[450px] text-2xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-[30.9px]">
                    {service.title}
                  </h2>
                  <p className="mt-3 max-w-[460px] text-[14.4px] leading-[1.75] text-slate-600 sm:text-sm">
                    {service.intro}
                  </p>
                </div>

                <ul className="grid content-start gap-x-6 gap-y-3 rounded-lg border border-slate-100 bg-white p-5 sm:grid-cols-2 sm:p-6 lg:p-7">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13.2px] leading-[1.55] text-slate-700 sm:text-[14.4px]"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-brand" strokeWidth={2.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0b1b2f] px-4 py-14 text-white sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-8 rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:p-9 md:flex-row md:items-center lg:p-10">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold tracking-[0.15em] text-brand-200 uppercase">
              Start a conversation
            </p>
            <h2 className="mt-3 text-2xl leading-tight font-semibold tracking-tight sm:text-3xl">
              Ready to streamline your firm’s bookkeeping and compliance workflow?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Tell us about your workflow, service mix, and current capacity. We’ll help you plan
              the right level of support.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-brand px-6 text-sm font-semibold text-white transition hover:bg-[#154fb3]"
          >
            Discuss your needs <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
