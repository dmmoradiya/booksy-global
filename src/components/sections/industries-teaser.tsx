import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function IndustriesTeaser() {
  return (
    <section className="bg-[#f6f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1360px] items-center gap-9 sm:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
            Sectors & practices
          </p>
          <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Accounting Support Built for Australian Businesses
          </h2>
          <p className="mt-5 text-[16.6px] leading-7 text-slate-600">
            Tailored workflow execution suited to the regulatory nuances and statutory schedules
            across diverse industry landscapes.
          </p>
          <Link
            href="/industries"
            className="mt-7 inline-flex h-12 items-center gap-2 rounded-md bg-navy px-5 text-sm font-semibold text-white transition hover:bg-navy-deep"
          >
            Explore industries <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-xl sm:min-h-[340px] lg:min-h-[390px]">
          <Image
            src="/industries-hero.avif"
            alt="Business team collaborating in an office"
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
