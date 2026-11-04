export const bookingUrl = "https://calendar.app.google/wTYfcaGt1YWVKd3P7"

export const contact = {
  phone: "+91 96874 87068",
  phoneHref: "tel:+919687487068",
  email: "info.booksyglobal@gmail.com",
  address: ["306, Laxmi Enclave-2, Katargam,", "Surat, Gujarat – 395004, India"],
  mapQuery: "306, Laxmi Enclave-2, Katargam, Surat, Gujarat – 395004, India",
  hours: ["Mon – Fri: 9:00 AM – 6:00 PM", "Sat: 10:00 AM – 2:00 PM"],
}

export type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Resources", to: "/resources" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
]
