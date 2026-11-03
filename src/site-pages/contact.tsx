"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, type FormEvent } from "react"
import { CalendarDays, CircleCheck, Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { bookingUrl, contact } from "@/data/site"

const engagementTypes = [
  "Ongoing Support",
  "Dedicated Team Member",
  "One-Time Cleanup",
  "Busy-Season Support",
  "Project-Based Support",
  "Not Sure Yet",
]

const inputClass = "h-12 rounded-md border-slate-200 bg-white px-4 text-sm text-ink"

function ContactField({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-brand">*</span>}
      </Label>
      <Input id={id} name={id} type={type} required={required} className={inputClass} />
    </div>
  )
}

function ContactInfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4 py-2">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
        <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-slate-600">{children}</div>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="relative isolate min-h-[260px] overflow-hidden bg-navy text-white sm:min-h-[320px]">
        <Image
          src="/contact-hero.avif"
          alt="Colleagues meeting to discuss business and accounting needs"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b192c]/95 via-[#0b192c]/75 to-[#0b192c]/45"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[260px] max-w-[1360px] flex-col items-start justify-center px-4 py-16 sm:min-h-[320px] sm:px-6 lg:px-4">
          <p className="text-xs font-bold tracking-[0.14em] text-blue-100 uppercase">
            Get in Touch
          </p>
          <h1 className="mt-3 text-balance text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1360px] gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.45fr)] lg:gap-12">
          <div>
            <p className="text-[16.6px] leading-7 text-slate-600 sm:text-base">
              Tell us about your bookkeeping, payroll, BAS, IAS, GST, reporting, compliance, or
              accounting outsourcing requirements. Our team will review your information and contact
              you to discuss the most suitable support model.
            </p>

            <div className="mt-7 grid gap-3">
              <a href={contact.phoneHref} className="block">
                <ContactInfoCard icon={Phone} title="Phone">
                  {contact.phone}
                </ContactInfoCard>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="rounded-xl transition-colors hover:border-brand/40 hover:bg-brand-soft/30"
              >
                <ContactInfoCard icon={Mail} title="Email">
                  {contact.email}
                </ContactInfoCard>
              </a>
              <ContactInfoCard icon={MapPin} title="Address">
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </ContactInfoCard>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,29,51,0.2)] sm:p-8 lg:p-10">
            <form
              id="contact-form"
              onSubmit={onSubmit}
              onChange={() => setSent(false)}
              className="grid gap-x-5 gap-y-5 sm:grid-cols-2"
            >
              <ContactField id="full-name" label="Full Name" required />
              <ContactField id="business-name" label="Business / Accounting Practice Name" />
              <ContactField id="email" label="Email Address" type="email" required />
              <ContactField id="business-type" label="Business Type" />
              <ContactField id="entity-type" label="Entity Type" />
              <ContactField id="accounting-software" label="Accounting Software Used" />
              <ContactField id="services-required" label="Services Required" />
              <ContactField id="preferred-contact-time" label="Preferred Contact Time" />

              <div className="grid gap-2">
                <Label htmlFor="engagement-type" className="text-sm font-medium text-ink">
                  Preferred Engagement Type
                </Label>
                <select
                  id="engagement-type"
                  name="engagement-type"
                  defaultValue=""
                  className="h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-sm text-ink outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <option value="" disabled>
                    Select an engagement type
                  </option>
                  {engagementTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="additional-message" className="text-sm font-medium text-ink">
                  Additional Message
                </Label>
                <Textarea
                  id="additional-message"
                  name="additional-message"
                  rows={5}
                  className="min-h-32 rounded-md border-slate-200 bg-white px-4 py-3 text-sm text-ink"
                />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  className="h-12 gap-2.5 rounded-md bg-navy px-7 text-sm font-semibold"
                >
                  Send Enquiry <Send className="size-4" />
                </Button>
                {sent && (
                  <p
                    className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-brand"
                    role="status"
                    aria-live="polite"
                  >
                    <CircleCheck className="mt-0.5 size-5 shrink-0" strokeWidth={1.8} />
                    <span>
                      Thank you. Your enquiry has been received. Our team will review your
                      requirements and contact you shortly.
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-navy px-6 py-8 text-white sm:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white text-navy">
                <CalendarDays className="size-7" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-white sm:text-[24.3px]">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="mt-1.5 text-[14.9px] text-white/85">
                  Book a free consultation today and let&apos;s discuss the support you need.
                </p>
              </div>
            </div>
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-[14.9px] font-semibold text-navy transition-colors hover:bg-white/90"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
