"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, RotateCcw } from "lucide-react"

import type { Service } from "@/data/services"
import { countryContent } from "@/data/country-content"
import { useCountry } from "@/lib/country"

function FlippingServiceCard({ service }: { service: Service }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = service.icon

  return (
    <article className="group h-[420px] w-[min(84vw,380px)] shrink-0 text-left [perspective:1200px] sm:h-[440px] sm:w-[380px]">
      <span
        className={
          "relative block h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none " +
          (isFlipped ? "[transform:rotateY(180deg)]" : "")
        }
      >
        <button
          type="button"
          aria-label={
            isFlipped
              ? "Show overview for " + service.title
              : "Show included work for " + service.title
          }
          aria-hidden={isFlipped}
          tabIndex={isFlipped ? -1 : 0}
          onClick={() => setIsFlipped(true)}
          className="absolute inset-0 flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-[0_12px_36px_-24px_rgba(9,24,47,0.35)] [backface-visibility:hidden] sm:p-7"
        >
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-white">
            <Icon className="size-6" strokeWidth={1.8} />
          </span>
          <span className="mt-8 text-[12.2px] font-bold tracking-[0.12em] text-brand uppercase">
            {service.category}
          </span>
          <span className="mt-3 text-xl leading-snug font-semibold tracking-tight text-ink">
            {service.title}
          </span>
          <span className="mt-4 text-sm leading-6 text-slate-600">{service.summary}</span>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand">
            Click to see included work <ArrowRight className="size-4" />
          </span>
        </button>

        <div
          aria-hidden={!isFlipped}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-brand/25 bg-white p-6 shadow-[0_12px_36px_-24px_rgba(9,24,47,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7"
        >
          <span className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <span className="min-w-0">
              <span className="block text-[11px] font-bold tracking-[0.12em] text-brand uppercase">
                Included support
              </span>
              <span className="mt-1 block truncate text-base font-semibold text-ink">
                {service.title}
              </span>
            </span>
            <button
              type="button"
              tabIndex={isFlipped ? 0 : -1}
              aria-label={"Show overview for " + service.title}
              onClick={() => setIsFlipped(false)}
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-brand transition hover:bg-brand-soft"
            >
              <RotateCcw className="size-4" />
            </button>
          </span>
          <button
            type="button"
            tabIndex={isFlipped ? 0 : -1}
            aria-label={"Show overview for " + service.title}
            onClick={() => setIsFlipped(false)}
            className="mt-4 grid flex-1 cursor-pointer content-start gap-x-4 gap-y-2.5 pr-1 text-left sm:grid-cols-2"
          >
            {service.homeFeatures.map((feature) => (
              <span
                key={feature}
                className="flex items-start gap-2 text-[13.2px] leading-[1.45] text-slate-700"
              >
                <Check className="mt-0.5 size-3.5 shrink-0 text-brand" strokeWidth={2.5} />
                <span>{feature}</span>
              </span>
            ))}
          </button>
          <Link
            href={"/services#" + service.slug}
            tabIndex={isFlipped ? 0 : -1}
            className="mt-auto inline-flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-brand hover:text-navy"
          >
            View More <ArrowRight className="size-4" />
          </Link>
        </div>
      </span>
    </article>
  )
}

export function Services() {
  const country = useCountry()
  const services = countryContent[country].services
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  return (
    <section id="services" className="overflow-hidden bg-[#f6f8fa] py-20 sm:py-24">
      <div className="relative mx-auto max-w-[1360px] px-4 text-center sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
            Service catalogue & capabilities
          </p>
          <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Bookkeeping, Payroll & Taxation Compliance Support
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16.6px] leading-7 text-slate-600">
            Flexible support for daily bookkeeping, payroll, lodgements, reporting, and the work
            that keeps accounting practices moving.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-[1360px] px-4 sm:mt-10 sm:px-0">
        <div
          ref={trackRef}
          className="services-card-track flex gap-5 overflow-x-auto px-0 pb-5 sm:gap-6 sm:px-10"
          aria-label="Bookkeeping and compliance services"
          onScroll={(event) => {
            const track = event.currentTarget
            const maxScroll = track.scrollWidth - track.clientWidth
            setScrollProgress(maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0)
          }}
        >
          {services.map((service) => (
            <FlippingServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-[#f6f8fa]"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto mt-3 flex max-w-[1360px] justify-center px-4 sm:px-6 lg:px-10">
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={scrollProgress}
          aria-label="Scroll through service cards"
          onChange={(event) => {
            const track = trackRef.current
            const progress = Number(event.currentTarget.value)
            setScrollProgress(progress)
            if (track) {
              track.scrollLeft = (track.scrollWidth - track.clientWidth) * (progress / 100)
            }
          }}
          className="services-scrollbar w-36 sm:w-44"
        />
      </div>

      <div className="mx-auto mt-10 max-w-[1360px] px-4 text-center sm:px-6 lg:px-10">
        <Link
          href="/services"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-navy px-6 text-sm font-semibold text-white transition hover:bg-navy-deep"
        >
          Explore all service areas <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}
