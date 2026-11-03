"use client"

import Image from "next/image"
import Link from "next/link"

import booksyLogo from "@/assets/booksy-global-logo.jpg"
import { cn } from "@/lib/utils"

type LogoProps = {
  variant?: "dark" | "light"
  className?: string
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const light = variant === "light"

  if (!light) {
    return (
      <Link
        href="/"
        aria-label="Booksy Global home"
        className={cn("relative block h-[36px] w-[108px] overflow-hidden sm:w-[132px]", className)}
      >
        <Image
          src={booksyLogo}
          alt="Booksy Global"
          fill
          priority
          sizes="(min-width: 640px) 132px, 108px"
          className="object-cover"
        />
      </Link>
    )
  }

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2", className)}
      aria-label="Booksy Global home"
    >
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect x="2" y="17" width="7" height="13" rx="1.2" fill={light ? "#ffffff" : "#1a63d6"} />
        <rect x="12.5" y="10" width="7" height="20" rx="1.2" fill={light ? "#ffffff" : "#1a63d6"} />
        <rect x="23" y="2" width="7" height="28" rx="1.2" fill={light ? "#ffffff" : "#0b3a86"} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn("text-[24.3px] font-bold tracking-tight", light ? "text-white" : "text-navy")}
        >
          Booksy
        </span>
        <span
          className={cn(
            "mt-0.5 text-[9.3px] font-semibold tracking-[0.32em]",
            light ? "text-white/80" : "text-navy/80",
          )}
        >
          GLOBAL
        </span>
      </span>
    </Link>
  )
}
