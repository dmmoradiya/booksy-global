import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Logo } from "@/components/logo"
import { Separator } from "@/components/ui/separator"
import { contact } from "@/data/site"

const navigationLinks = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Software", to: "/#software" },
  { label: "About Us", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
  { label: "Data Protection & Security", to: "/#data-protection-security" },
]

export function Footer() {
  return (
    <footer className="mt-2 bg-navy-deep pt-14 text-white/80 sm:pt-16">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-4 pb-20 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.35fr_0.8fr_1.2fr] lg:px-10">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-[380px] text-[16px] font-medium leading-relaxed text-white">
            <span className="block">Spotless Numbers + Flawless Compliance</span>
            <span className="block">= Total Peace of Mind.</span>
          </p>
          <p className="mt-3 max-w-[380px] text-[14.4px] leading-[1.8]">
            Bookkeeping &amp; Compliance Services
          </p>
        </div>

        <div>
          <h2 className="text-[16.6px] font-semibold text-white">Explore</h2>
          <ul className="mt-5 space-y-3 text-[14.9px]">
            {navigationLinks.map(({ label, to }) => (
              <li key={label}>
                <Link href={to} className="transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[16.6px] font-semibold text-white">Contact</h2>
          <ul className="mt-5 space-y-4 text-[14.9px] leading-relaxed">
            {contact.address.length > 0 && (
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contact.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {contact.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </a>
              </li>
            )}
            <li>
              <a href={contact.phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-white" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex gap-3 break-all hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-white" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
        <Separator className="bg-white/10" />
        <p className="py-6 text-center text-[13.2px]">
          © 2026 Booksy Global. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
