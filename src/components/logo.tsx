"use client"

import Image from "next/image"
import Link from "next/link"

import booksyLogo from "@/assets/booksy-global-logo.png"
import booksyFooterLogo from "@/assets/booksy-global-logo-footer.png"
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
      aria-label="Booksy Global home"
      className={cn(
        "relative block h-[68px] w-[220px] overflow-hidden rounded-sm bg-transparent",
        className,
      )}
    >
      <Image src={booksyFooterLogo} alt="Booksy Global" fill sizes="220px" className="scale-[1.6] object-contain" />
    </Link>
  )
}
