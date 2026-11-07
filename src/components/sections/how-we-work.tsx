"use client"

import { useEffect, useRef, useState } from "react"
import { BarChart3, ClipboardCheck, FileText, LockKeyhole } from "lucide-react"

const steps = [
  {
    icon: FileText,
    color: "#f00046",
    title: "Tell Us About Your Requirements",
    text: "Share your business type, accounting software, required services, transaction volume, current challenges and reporting deadlines.",
  },
  {
    icon: ClipboardCheck,
    color: "#b000f0",
    title: "Receive a Tailored Support Plan",
    text: "Our team reviews your requirements and recommends the most suitable bookkeeping, payroll, reporting or accounting support approach.",
  },
  {
    icon: LockKeyhole,
    color: "#3719ea",
    title: "Secure Setup",
    text: "We align with your workflow and establish secure access to your client-approved systems.",
  },
  {
    icon: BarChart3,
    color: "#00a98c",
    title: "Ongoing Delivery & Review",
    text: "Our team provides structured accounting support, clear communication, and timely delivery based on your agreed workflow.",
  },
]

export function HowWeWork() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(track)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">How We Work</p>
          <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Simple, Secure Onboarding
          </h2>
        </div>
        <div
          role="list"
          aria-label="Onboarding process"
          ref={trackRef}
          className="mt-10 flex items-stretch snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 sm:mt-12 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:pb-0"
        >
          {steps.map(({ icon: Icon, color, title, text }, index) => (
            <div
              key={title}
              role="listitem"
              className={
                "relative mt-4 min-w-[min(86vw,350px)] snap-start drop-shadow-[0_2px_5px_rgba(15,23,42,0.16)] transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none lg:min-w-0 " +
                (isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0")
              }
              style={{ transitionDelay: isVisible ? `${index * 110}ms` : "0ms" }}
            >
              <article
                className="relative flex h-full min-h-[190px] flex-col items-center border border-slate-200 bg-white px-6 py-8 pr-14 text-center"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 44px) 0, 100% 50%, calc(100% - 44px) 100%, 0 100%)",
                }}
              >
                <h3 className="text-base leading-snug font-semibold tracking-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 w-11"
                  style={{
                    backgroundColor: color,
                    clipPath: "polygon(0 0, 35% 0, 100% 50%, 35% 100%, 0 100%, 65% 50%)",
                  }}
                />
              </article>
              <span
                className="absolute -top-4 left-0 z-10 flex size-12 items-center justify-center rounded-full border-2 border-white text-white shadow-md lg:-top-5 lg:-left-3"
                style={{ backgroundColor: color }}
              >
                <Icon className="size-6" strokeWidth={2.2} aria-hidden="true" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
