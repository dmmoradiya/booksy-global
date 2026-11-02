"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react"

import { services } from "@/data/site"

function FlippingServiceCard({ service }: { service: (typeof services)[number] }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = service.icon

  return (
    <button
      type="button"
      aria-pressed={isFlipped}
      aria-label={
        isFlipped ? "Show overview for " + service.title : "Show included work for " + service.title
      }
      onClick={() => setIsFlipped((current) => !current)}
      className="group h-[420px] w-[min(84vw,380px)] shrink-0 snap-start text-left [perspective:1200px] sm:h-[440px] sm:w-[380px]"
    >
      <span
        className={
          "relative block h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] motion-reduce:transition-none " +
          (isFlipped ? "[transform:rotateY(180deg)]" : "")
        }
      >
        <span
          aria-hidden={isFlipped}
          className="absolute inset-0 flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_36px_-24px_rgba(9,24,47,0.35)] [backface-visibility:hidden] sm:p-7"
        >
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
            <Icon className="size-6" strokeWidth={1.8} />
          </span>
          <span className="mt-8 text-[11px] font-bold tracking-[0.12em] text-brand uppercase">
            {service.category}
          </span>
          <span className="mt-3 text-xl leading-snug font-semibold tracking-tight text-ink">
            {service.title}
          </span>
          <span className="mt-4 text-sm leading-6 text-slate-600">{service.summary}</span>
          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand">
            Click to see included work <ArrowRight className="size-4" />
          </span>
        </span>

        <span
          aria-hidden={!isFlipped}
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-brand/25 bg-white p-6 shadow-[0_12px_36px_-24px_rgba(9,24,47,0.35)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-7"
        >
          <span className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <span className="min-w-0">
              <span className="block text-[10px] font-bold tracking-[0.12em] text-brand uppercase">
                Included support
              </span>
              <span className="mt-1 block truncate text-base font-semibold text-ink">
                {service.title}
              </span>
            </span>
            <RotateCcw className="size-4 shrink-0 text-brand" />
          </span>
          <span className="mt-4 grid content-start gap-x-4 gap-y-2.5 overflow-y-auto pr-1 sm:grid-cols-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="flex items-start gap-2 text-[12px] leading-[1.45] text-slate-700"
              >
                <Check className="mt-0.5 size-3.5 shrink-0 text-brand" strokeWidth={2.5} />
                <span>{feature}</span>
              </span>
            ))}
          </span>
          <span className="mt-auto border-t border-slate-100 pt-3 text-xs font-semibold text-brand">
            Click to return to overview
          </span>
        </span>
      </span>
    </button>
  )
}

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scrollCards(direction: -1 | 1) {
    trackRef.current?.scrollBy({
      left: direction * 410,
      behavior: "smooth",
    })
  }

  return (
    <section className="overflow-hidden bg-[#f6f8fa] py-20 sm:py-24">
      <div className="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
            Service catalogue & capabilities
          </p>
          <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Australian Bookkeeping, Payroll & Compliance Support
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
            Flexible support for daily bookkeeping, payroll, lodgements, reporting, and the work
            that keeps accounting practices moving.
          </p>
        </div>
        <div className="mt-5 flex items-center justify-end gap-2">
          <span className="mr-2 text-xs text-slate-500 sm:hidden">Swipe to explore</span>
          <span className="mr-2 hidden text-xs text-slate-500 sm:inline">Scroll to explore</span>
          <button
            type="button"
            onClick={() => scrollCards(-1)}
            aria-label="Scroll services left"
            className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-brand transition hover:border-brand hover:bg-brand-soft"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollCards(1)}
            aria-label="Scroll services right"
            className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-brand transition hover:border-brand hover:bg-brand-soft"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="services-card-track mx-auto mt-10 flex max-w-[1280px] snap-x snap-mandatory gap-5 overflow-x-auto px-8 pb-5 sm:mt-10 sm:gap-6 sm:px-10"
        aria-label="Bookkeeping and compliance services"
      >
        {services.map((service) => (
          <FlippingServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mx-auto mt-5 max-w-[1280px] px-4 text-center sm:px-6 lg:px-10">
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
