"use client"

import Link from "next/link"
import { CalendarDays } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { bookingUrl } from "@/data/site"

export function CtaBanner({ grayBackground = false }: { grayBackground?: boolean }) {
  return (
    <section className={"relative z-10 w-full " + (grayBackground ? "bg-[#f6f8fa]" : "bg-white")}>
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-navy px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white text-navy">
              <CalendarDays className="size-7" strokeWidth={1.6} />
            </span>
            <div>
              <h2 className="text-[22.1px] font-semibold text-white sm:text-[24.3px]">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="mt-1.5 text-[14.9px] text-white/85">
                Book a free consultation today and let&apos;s grow your business together.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-md border-white bg-white px-6 text-[14.9px] font-semibold text-navy hover:bg-white/90 hover:text-navy",
              )}
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-md border-white/80 bg-transparent px-6 text-[14.9px] font-semibold text-white hover:bg-white/10 hover:text-white",
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
