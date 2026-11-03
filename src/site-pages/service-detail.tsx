import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

import { services } from "@/data/site"
import NotFoundPage from "@/site-pages/not-found"

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((item) => item.slug === slug)

  if (!service) return <NotFoundPage />

  const Icon = service.icon
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <section className="bg-[#f3f6f8] px-4 py-12 sm:px-6 sm:py-16 lg:px-4">
        <div className="mx-auto max-w-[1360px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-slate-500"
          >
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="transition hover:text-brand">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="truncate text-slate-700" aria-current="page">
              {service.title}
            </span>
          </nav>
          <div className="max-w-3xl">
            <div className="flex size-14 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <Icon className="size-7" strokeWidth={1.8} />
            </div>
            <p className="mt-6 text-xs font-bold tracking-[0.14em] text-brand uppercase">
              {service.category}
            </p>
            <h1 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              {service.intro}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-md bg-[#0b1b2f] px-5 text-sm font-semibold text-white transition hover:bg-[#12304b]"
            >
              Discuss your needs <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
              Service scope
            </p>
            <h2 className="mt-3 text-2xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Practical support, built around your workflow
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Our team can support this work within your existing accounting processes, systems, and
              review requirements.
            </p>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
            >
              <ArrowLeft className="size-4" /> View all services
            </Link>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-950">What’s included</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-[0_8px_24px_-22px_rgba(9,24,47,0.35)]"
                >
                  <Check className="mt-1 size-4 shrink-0 text-brand" strokeWidth={2.5} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fa] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
                Explore more
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Related services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              All service areas <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={"/services/" + item.slug}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
              >
                <p className="text-[11px] font-bold tracking-[0.12em] text-brand uppercase">
                  {item.category}
                </p>
                <h3 className="mt-2 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-[gap] group-hover:gap-3">
                  View service <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
