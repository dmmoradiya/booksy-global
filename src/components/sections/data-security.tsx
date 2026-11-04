import { Check } from "lucide-react"

const securityPractices = [
  "Secure cloud-based access",
  "Multi-factor authentication",
  "Controlled user permissions",
  "Confidentiality agreements and NDAs",
  "Structured review procedures",
  "Data Processing Agreement available on request",
  "Secure collaboration processes",
  "Work completed in client-approved systems wherever possible",
]

export function DataSecurity() {
  return (
    <section id="data-protection-security" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1360px] flex-col items-center gap-10">
        <div className="mx-auto w-full text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
            Data Protection & Security
          </p>
          <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-ink sm:text-4xl md:whitespace-nowrap md:text-[clamp(1.5rem,3vw,2.25rem)]">
            Your Financial Information Deserves Strong Protection
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16.6px] leading-7 text-slate-600">
            We use controlled access, client-approved systems, and structured review practices to
            support secure, reliable collaboration.
          </p>
        </div>

        <ul className="mx-auto grid w-full max-w-5xl gap-x-8 gap-y-2 sm:grid-cols-2 sm:gap-x-10">
          {securityPractices.map((practice) => (
            <li key={practice} className="flex min-h-[68px] items-center gap-4 py-2">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-brand/10 bg-brand-soft text-brand">
                <Check className="size-5" strokeWidth={2.3} aria-hidden="true" />
              </span>
              <span className="text-[16.6px] leading-relaxed font-medium text-slate-700 sm:text-base">
                {practice}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
