"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

import { Footer } from "@/components/sections/footer"
import { Header } from "@/components/sections/header"

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
  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
