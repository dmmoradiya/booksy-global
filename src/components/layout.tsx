"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

import { ComingSoon } from "@/components/coming-soon"
import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"
import { useCountryState } from "@/lib/country"

function ScrollManager() {
  const pathname = usePathname()
  useEffect(() => {
    const hash = window.location.hash.slice(1)

    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ behavior: "smooth" })
      })
      return
    }

    window.scrollTo({ top: 0 })
  }, [pathname])
  return null
}

export function Layout({ children }: { children: ReactNode }) {
  const country = useCountryState()

  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <Header />
      <main>
        {country === "pending" ? (
          <ComingSoon showTitle={false} />
        ) : country === "AU" ? (
          children
        ) : (
          <ComingSoon />
        )}
      </main>
      {country === "AU" && <Footer />}
    </div>
  )
}
