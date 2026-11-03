import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#0b122a] text-white"
    >
      <Image
        src="/hero-section.avif"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0b122a]/95 via-[#0b122a]/80 to-[#0b122a]/35"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 py-24 sm:px-10 md:py-32 lg:px-4">
        <div className="max-w-[720px]">
          <p className="text-sm font-semibold tracking-wide text-blue-200">
            Australian Bookkeeping &amp; Compliance Services
          </p>
          <h1 className="mt-5 font-serif text-[2.65rem] leading-[1.1] tracking-tight text-white sm:text-[3.35rem] lg:text-[4rem]">
            Spotless Numbers +<br className="hidden md:block" /> Flawless Compliance
            <br className="hidden md:block" /> = Total Peace of Mind.
          </h1>
          <p className="mt-7 max-w-[700px] text-base leading-[1.75] text-slate-200 sm:text-lg">
            Booksy Global provides reliable bookkeeping, payroll, BAS, IAS, GST, tax workpaper, and
            financial reporting support for Australian accounting practices and growing businesses.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "h-12 rounded-md bg-white px-6 text-[15.4px] font-semibold text-[#101a35] hover:bg-slate-100",
              )}
            >
              Discuss Your Needs
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-md border-white/60 bg-transparent px-6 text-[15.4px] font-semibold text-white hover:bg-white/10 hover:text-white",
              )}
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
