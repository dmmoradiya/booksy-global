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
import { countryOptions, useCountry } from "@/lib/country"

const inputClass = "h-12 rounded-md border-slate-200 bg-white px-4 text-sm text-ink"

function ContactField({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-brand">*</span>}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={inputClass}
      />
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
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-white">
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
  const country = useCountry()
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")
  const [submissionMessage, setSubmissionMessage] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setSubmissionStatus("sending")
    setSubmissionMessage("")
    const selectedCountry =
      countryOptions.find((option) => option.code === country)?.name ?? "Australia"
    const payload = {
      ...Object.fromEntries(new FormData(form).entries()),
      country: selectedCountry,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const result = (await response.json()) as { error?: string }
      if (!response.ok) throw new Error(result.error || "Please try again shortly.")
      form.reset()
      setSubmissionStatus("success")
      setSubmissionMessage(
        "Thank you. Your enquiry has been sent. Our team will contact you shortly.",
      )
    } catch (error) {
      setSubmissionStatus("error")
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again.",
      )
    }
  }

  return (
    <>
      <section className="relative isolate min-h-[360px] overflow-hidden bg-navy text-white sm:min-h-[420px]">
        <Image
          src="/contact-hero.webp"
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
        <div className="relative mx-auto flex min-h-[360px] max-w-[1360px] flex-col items-start justify-center px-4 py-16 sm:min-h-[420px] sm:px-6 lg:px-4">
          <p className="text-base font-semibold tracking-wide text-blue-200">Get in Touch</p>
          <h1 className="mt-5 font-serif text-[2.65rem] leading-[1.1] tracking-tight text-white sm:text-[3.35rem] lg:text-[4rem]">
            Discuss Your Needs
          </h1>
          <p className="mt-5 max-w-[800px] text-base leading-relaxed text-white/90 sm:text-lg">
            Send a message and we&apos;ll route it, or go directly to whichever of us fits your situation - each name below links to a full profile.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1360px] gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.45fr)] lg:gap-12">
          <div>
            <div className="grid gap-3">
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
              {contact.address.length > 0 && (
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contact.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl transition-colors hover:bg-brand-soft/30"
                >
                  <ContactInfoCard icon={MapPin} title="Address">
                    {contact.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </ContactInfoCard>
                </a>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,29,51,0.2)] sm:p-8 lg:p-10">
            <form
              id="contact-form"
              onSubmit={onSubmit}
              onChange={() => {
                if (submissionStatus === "success" || submissionStatus === "error") {
                  setSubmissionStatus("idle")
                  setSubmissionMessage("")
                }
              }}
              className="grid gap-x-5 gap-y-5 sm:grid-cols-2"
            >
              <ContactField id="name" label="Name" autoComplete="name" required />
              <ContactField id="company" label="Company" autoComplete="organization" />
              <ContactField id="email" label="Email" type="email" autoComplete="email" required />
              <ContactField id="phone" label="Phone" type="tel" autoComplete="tel" />

              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message" className="text-sm font-medium text-ink">
                  What do you need help with?
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="min-h-24 rounded-md border-slate-200 bg-white px-4 py-3 text-sm text-ink"
                />
              </div>

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  className="h-12 gap-2.5 rounded-md bg-navy px-7 text-sm font-semibold"
                  disabled={submissionStatus === "sending"}
                >
                  {submissionStatus === "sending" ? "Sending..." : "Send Enquiry"}{" "}
                  <Send className="size-4" />
                </Button>
                {submissionMessage && (
                  <p
                    className={
                      "mt-4 flex items-start gap-2 text-sm leading-relaxed " +
                      (submissionStatus === "error" ? "text-red-600" : "text-brand")
                    }
                    role="status"
                    aria-live="polite"
                  >
                    {submissionStatus === "success" && (
                      <CircleCheck className="mt-0.5 size-5 shrink-0" strokeWidth={1.8} />
                    )}
                    <span>{submissionMessage}</span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-0 sm:px-6 lg:px-10">
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
