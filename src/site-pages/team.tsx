import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { teamProfiles } from "@/data/team"

function TeamPortrait({ initials, size = "large" }: { initials: string; size?: "small" | "large" }) {
  return (
    <span
      aria-hidden="true"
      className={
        "inline-flex shrink-0 items-center justify-center rounded-full border-2 border-brand/20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 font-semibold tracking-tight text-navy shadow-sm " +
        (size === "large" ? "size-[104px] text-3xl" : "size-[84px] text-2xl")
      }
    >
      {initials}
    </span>
  )
}

export default function TeamPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src="/team-hero.jpeg"
          alt="A team collaborating in a planning meeting"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b192c]/90 via-[#0b192c]/75 to-[#0b192c]/55"
          aria-hidden="true"
        />
        <div className="mx-auto flex min-h-[340px] max-w-[1360px] flex-col justify-center px-4 py-16 sm:min-h-[390px] sm:px-6 lg:px-4">
          <p className="text-base font-semibold tracking-wide text-blue-200">Our Team</p>
          <h1 className="mt-5 font-serif text-[2.65rem] leading-[1.1] tracking-tight text-white sm:text-[3.35rem] lg:text-[4rem]">
            Leadership Team
          </h1>
          <p className="mt-5 max-w-[800px] text-base leading-relaxed text-white/90 sm:text-lg">
            Booksy Global is supported by qualified Chartered Accountants who oversee country-specific accounting and outsourcing operations.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f8fa] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1260px] gap-7 lg:grid-cols-2 lg:gap-6">
          {teamProfiles.map((profile) => (
            <article
              key={profile.slug}
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-[0_16px_36px_-24px_rgba(9,24,47,0.32)] transition-shadow duration-300 hover:shadow-[0_20px_44px_-22px_rgba(9,24,47,0.34)] sm:p-8"
            >
              <TeamPortrait initials={profile.initials} size="small" />
              <h2 className="mt-5 text-2xl leading-tight font-semibold tracking-tight text-ink">
                {profile.name}
              </h2>
              <p className="mt-1.5 text-xs font-medium tracking-wide text-slate-500">{profile.role}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{profile.specialty}</p>
              <p className="mt-5 text-[15.4px] leading-6 text-slate-600 sm:text-base sm:leading-7">
                {profile.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {profile.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-ink">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3 pt-6">
                <Link
                  href={"/team/" + profile.slug}
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand"
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
                <a
                  href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(profile.email)} target="_blank" rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-md border border-slate-400 px-5 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  Email
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-[1260px] text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-navy">
            Contact Booksy Global <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
