"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Mail, Phone } from "lucide-react"
import type { TeamProfile } from "@/data/team"
import { bookingUrl } from "@/data/site"

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=info.booksyglobal@gmail.com"

function TeamPortrait({ initials }: { initials: string }) {
  return (
    <span aria-hidden="true" className="inline-flex size-32 shrink-0 items-center justify-center rounded-full border-[3px] border-brand/70 bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-4xl font-semibold tracking-tight text-navy shadow-sm sm:size-36">
      {initials}
    </span>
  )
}

export default function TeamProfilePage({ profile }: { profile: TeamProfile }) {
  const [tab, setTab] = useState<"biography" | "focus">("biography")

  return (
    <>
      <section className="bg-navy-deep px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto flex max-w-[1276px] flex-col items-start gap-7 sm:flex-row sm:gap-8">
          <TeamPortrait initials={profile.initials} />
          <div className="max-w-[760px]">
            <p className="text-base font-semibold tracking-wide text-blue-200">Leadership Team</p>
            <h1 className="mt-2 text-3xl leading-tight font-semibold tracking-tight text-white sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-sm font-medium text-blue-200">{profile.role}</p>
            <p className="mt-2 text-sm text-white/80">{profile.specialty}</p>
            <p className="mt-4 max-w-[720px] border-l-2 border-brand pl-4 text-[15.4px] leading-6 text-white/90 sm:text-base sm:leading-7">
              {profile.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-md bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand/90">
                Make an appointment
              </a>
              <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-md border border-white/35 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10">
                <Mail className="size-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1276px] gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(310px,1fr)] lg:gap-12">
          <div>
            <Link href="/team" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-navy">
              <ArrowLeft className="size-4" /> All team members
            </Link>
            <div role="tablist" aria-label="Team member details" className="flex gap-6 border-b border-slate-300">
              <button type="button" role="tab" aria-selected={tab === "biography"} onClick={() => setTab("biography")} className={"relative cursor-pointer px-4 py-3 text-sm font-medium transition-colors " + (tab === "biography" ? "text-navy after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-brand" : "text-slate-500 hover:text-navy")}>
                Biography
              </button>
              <button type="button" role="tab" aria-selected={tab === "focus"} onClick={() => setTab("focus")} className={"relative cursor-pointer px-4 py-3 text-sm font-medium transition-colors " + (tab === "focus" ? "text-navy after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-brand" : "text-slate-500 hover:text-navy")}>
                Focus areas
              </button>
            </div>

            {tab === "biography" ? (
              <div role="tabpanel" className="space-y-5 pt-7 text-[15.4px] leading-6 text-slate-700 sm:text-base sm:leading-7">
                {profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ) : (
              <div role="tabpanel" className="space-y-8 pt-7">
                {profile.focusAreas.map((area) => (
                  <section key={area.title}>
                    <h2 className="text-xl font-semibold tracking-tight text-ink">{area.title}</h2>
                    <ul className="mt-3 space-y-2.5 text-[15.4px] leading-6 text-slate-700 sm:text-base">
                      {area.items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-brand" />{item}</li>)}
                    </ul>
                  </section>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-24px_rgba(9,24,47,0.35)] sm:p-7">
              <h2 className="text-xl font-semibold tracking-tight text-ink">Credentials</h2>
              <div className="mt-5 space-y-5">
                {profile.credentials.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1.5 size-2 shrink-0 rounded-full bg-brand" />
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.12em] text-slate-500">{item.label}</p>
                      <ul className="mt-1 space-y-1 text-sm leading-5 text-ink">
                        {item.items.map((value) => <li key={value}>{value}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_-24px_rgba(9,24,47,0.35)] sm:p-7">
              <h2 className="text-xl font-semibold tracking-tight text-ink">Direct contact</h2>
              <div className="mt-5 flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <p className="text-[11px] font-medium tracking-[0.12em] text-slate-500">EMAIL</p>
                  <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-ink hover:text-brand">{profile.email}</a>
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                <div>
                  <p className="text-[11px] font-medium tracking-[0.12em] text-slate-500">PHONE</p>
                  <a href={"tel:" + profile.phone.replaceAll(" ", "")} className="text-sm text-ink hover:text-brand">{profile.phone}</a>
                  <p className="mt-1 text-xs leading-5 text-slate-600">Office hours: Mon-Fri 9 AM-6 PM (GMT+5:30)</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </>
  )
}
