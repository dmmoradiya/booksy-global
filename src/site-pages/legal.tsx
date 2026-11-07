"use client"

import { PageHero } from "@/components/page-hero"
import { contact } from "@/data/site"

type LegalPageProps = { kind: "terms" }

const content = {
  terms: {
    title: "Terms of Service",
    description: "The terms that apply when you use this website and our services.",
    sections: [
      {
        h: "Use of This Website",
        p: "The content on this website is for general information only and is not professional advice. You should consult a qualified accountant before acting on any information here.",
      },
      {
        h: "Engagements",
        p: "Our services are provided under a written engagement letter that sets out the scope, fees and responsibilities for each client. That letter takes precedence over these terms.",
      },
      {
        h: "Limitation of Liability",
        p: "Booksy Global is not liable for decisions made based solely on general content published on this website.",
      },
      {
        h: "Changes to These Terms",
        p: "We may update these terms from time to time. The latest version will always be available on this page.",
      },
    ],
  },
}

export default function LegalPage({ kind }: LegalPageProps) {
  const page = content[kind]
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={page.title}
        description={page.description}
        crumbs={[{ label: "Home", to: "/" }, { label: page.title }]}
      />
      <section className="mx-auto max-w-[820px] px-4 py-16 sm:px-6">
        <p className="text-[14.4px] text-slate-500">Last updated: January 1, 2025</p>
        {page.sections.map((s) => (
          <div key={s.h} className="mt-8">
            <h2 className="text-[21px] font-semibold text-ink">{s.h}</h2>
            <p className="mt-3 text-[16px] leading-[1.85] text-slate-600">{s.p}</p>
          </div>
        ))}
        <p className="mt-10 text-[16px] leading-[1.85] text-slate-600">
          Questions? Email us at{" "}
          <a href={`mailto:${contact.email}`} className="font-medium text-brand hover:underline">
            {contact.email}
          </a>
          .
        </p>
      </section>
    </>
  )
}
