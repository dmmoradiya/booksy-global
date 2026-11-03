import { Award, Gauge, Headset, Layers, LineChart, ShieldCheck } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Expert & Experience Professionals",
    text: "Our work follows structured processes and is reviewed by qualified Chartered Accountants to support consistent, reliable delivery.",
  },
  {
    icon: Gauge,
    title: "Flexible Accounting Capacity",
    text: "Scale your bookkeeping and accounting support based on your workload, reporting cycles, and business requirements.",
  },
  {
    icon: Layers,
    title: "Work Within Your Existing Systems",
    text: "We work in client-approved accounting and finance platforms, helping you maintain familiar systems and workflows.",
  },
  {
    icon: LineChart,
    title: "Clear Financial Reporting",
    text: "Receive organised bookkeeping and reporting support to help you monitor revenue, expenses, cash flow, and financial performance.",
  },
  {
    icon: Headset,
    title: "Dedicated Support Team",
    text: "Our team can work as an extension of your internal finance team, accounting practice, or business operations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential Workflows",
    text: "We use controlled cloud access, multi-factor authentication, confidentiality agreements, and structured review processes.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
            Institutional standards
          </p>
          <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Why Australian Businesses Choose Booksy Global
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-7">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="min-h-[168px] rounded-xl border border-slate-200 border-l-2 border-l-brand bg-[#f8fafc] p-5 transition-colors hover:border-brand/40 hover:bg-brand-soft/40 sm:min-h-[176px] sm:p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <Icon className="size-5 shrink-0" strokeWidth={1.9} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg leading-snug font-semibold tracking-tight text-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
