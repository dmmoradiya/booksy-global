"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

import { Logo } from "@/components/logo"
import { buttonVariants } from "@/components/ui/button"
import { bookingUrl, navItems, type NavItem } from "@/data/site"
import { countryContent } from "@/data/country-content"
import { cn } from "@/lib/utils"
import { countryOptions, setCountry, useCountryState, type CountryCode } from "@/lib/country"

function CountrySelector({
  country,
  onSelect,
}: {
  country: CountryCode
  onSelect: (country: CountryCode) => void
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const selected = countryOptions.find((option) => option.code === country) ?? countryOptions[0]

  useEffect(() => {
    if (!open) return
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        rootRef.current?.querySelector<HTMLButtonElement>('[aria-haspopup="menu"]')?.focus()
      }
    }
    document.addEventListener("pointerdown", closeOnOutsideClick)
    document.addEventListener("keydown", closeOnEscape)
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick)
      document.removeEventListener("keydown", closeOnEscape)
    }
  }, [open])

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return
    const items = rootRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]')
    if (!items?.length) return
    event.preventDefault()
    const currentIndex = Array.from(items).indexOf(document.activeElement as HTMLButtonElement)
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? items.length - 1
          : event.key === "ArrowDown"
            ? (currentIndex + 1) % items.length
            : (currentIndex <= 0 ? items.length : currentIndex) - 1
    items[nextIndex]?.focus()
  }

  return (
    <div ref={rootRef} onKeyDown={handleMenuKeyDown} className="relative">
      <button
        type="button"
        aria-label={"Country or region: " + selected.name}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 w-[116px] cursor-pointer items-center justify-between gap-1.5 rounded-md border border-blue-300 bg-blue-50 px-3 text-xs font-medium text-slate-700 transition-colors hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <span aria-hidden="true" className="flex shrink-0 items-center text-sm leading-none">
          {selected.flag}
        </span>
        <span className="leading-none">{selected.code === "AU" ? "AU" : selected.name}</span>
        <ChevronDown
          className={cn("size-3.5 shrink-0 self-center transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div
          role="menu"
          aria-label="Choose country or region"
          className={cn(
            "z-[60] min-w-[150px] rounded-lg border border-slate-200 bg-white p-2 shadow-[0_12px_30px_-10px_rgba(15,29,51,0.3)]",
            "absolute right-0 top-full mt-2",
          )}
        >
          {countryOptions.map((option) => (
            <button
              key={option.code}
              type="button"
              role="menuitemradio"
              aria-checked={country === option.code}
              onClick={() => {
                onSelect(option.code)
                setOpen(false)
                rootRef.current?.querySelector<HTMLButtonElement>('[aria-haspopup="menu"]')?.focus()
              }}
              className={cn(
                "flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md px-3 py-2.5 text-left text-sm transition-colors hover:bg-brand-soft hover:text-brand",
                country === option.code ? "bg-blue-50 font-semibold text-brand" : "text-ink",
              )}
            >
              <span aria-hidden="true" className="text-base leading-none">
                {option.flag}
              </span>
              <span>{option.code === "AU" ? "AU" : option.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function isActive(item: NavItem, pathname: string) {
  return item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)
}

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <div className="group relative">
      <Link
        href={item.to}
        className={cn(
          "relative flex items-center gap-1.5 py-7 text-[14.9px] font-medium text-ink transition-colors hover:text-brand",
          active && "text-brand",
        )}
      >
        {item.label}
        {item.children && (
          <ChevronDown
            className="size-3.5 transition-transform group-hover:rotate-180"
            strokeWidth={2.5}
          />
        )}
        {active && (
          <span className="absolute inset-x-0 bottom-[18px] h-0.5 rounded-full bg-brand" />
        )}
      </Link>

      {item.children && (
        <div className="invisible absolute top-full left-1/2 z-50 w-60 -translate-x-1/2 translate-y-2 opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-[0_20px_50px_-12px_rgba(15,29,51,0.25)]">
            {item.children.map((child) => (
              <Link
                key={child.to}
                href={child.to}
                className="block rounded-lg px-3 py-2.5 text-[14.4px] font-medium text-ink transition-colors hover:bg-brand-soft hover:text-brand"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const pathname = usePathname()

  return <HeaderContent key={pathname} pathname={pathname} />
}

function HeaderContent({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const countryState = useCountryState()
  const country = countryState === "pending" ? "AU" : countryState
  const countryResolved = countryState !== "pending"

  useEffect(() => {
    if (!open) return
    const closeOnOutsideClick = (event: PointerEvent) => {
      const target = event.target as Node
      if (!mobileMenuRef.current?.contains(target) && !menuToggleRef.current?.contains(target)) {
        setOpen(false)
        setExpanded(null)
      }
    }
    document.addEventListener("pointerdown", closeOnOutsideClick)
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick)
  }, [open])

  const regionalServices = countryResolved ? countryContent[country].services : []
  const displayedNavItems = navItems.map((item) =>
    item.label === "Services"
      ? {
          ...item,
          children: regionalServices.length
            ? regionalServices.map((service) => ({
                label: service.title,
                to: "/services#" + service.slug,
              }))
            : undefined,
        }
      : item,
  )

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-0">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {displayedNavItems.map((item) => (
            <DesktopNavItem key={item.label} item={item} active={isActive(item, pathname)} />
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className={countryResolved ? "" : "invisible"}>
            <CountrySelector country={country} onSelect={setCountry} />
          </div>
          <Link
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              "h-11 rounded-md bg-navy px-5 text-[14.9px] font-semibold",
            )}
          >
            Book a Consultation
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className={countryResolved ? "" : "invisible"}>
            <CountrySelector country={country} onSelect={setCountry} />
          </div>
          <button
            type="button"
            ref={menuToggleRef}
            className="inline-flex size-10 items-center justify-center rounded-md text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={mobileMenuRef}
          className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-slate-100 bg-white px-4 pb-6 sm:px-6 lg:hidden"
        >
          <nav className="flex flex-col py-2" aria-label="Mobile">
            {displayedNavItems.map((item) => {
              const active = isActive(item, pathname)
              const isOpen = expanded === item.label
              return (
                <div key={item.label} className="border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.to}
                      className={cn(
                        "flex-1 py-3 text-sm font-medium text-ink",
                        active && "text-brand",
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-label={`Toggle ${item.label} menu`}
                        aria-expanded={isOpen}
                        className="flex size-9 items-center justify-center text-ink"
                      >
                        <ChevronDown
                          className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && isOpen && (
                    <div className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          href={child.to}
                          className="block py-2 text-[14.4px] text-slate-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
          <Link
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "mt-3 h-11 w-full rounded-md bg-navy font-semibold")}
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
