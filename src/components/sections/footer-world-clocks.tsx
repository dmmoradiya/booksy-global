"use client"

import { useEffect, useState } from "react"

const clocks = [
  { label: "USA", timeZone: "America/New_York" },
  { label: "UK", timeZone: "Europe/London" },
  { label: "Australia", timeZone: "Australia/Sydney" },
]

function AnalogClock({ timeZone, now }: { timeZone: string; now: Date | null }) {
  const parts = now
    ? new Intl.DateTimeFormat("en", {
        timeZone,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hourCycle: "h23",
      }).formatToParts(now)
    : []
  const value = (type: string) => Number(parts.find((part) => part.type === type)?.value ?? 0)
  const seconds = value("second")
  const minutes = value("minute")
  const hours = value("hour") % 12
  const hourAngle = hours * 30 + minutes * 0.5 + seconds / 120
  const minuteAngle = minutes * 6 + seconds * 0.1
  const secondAngle = seconds * 6
  const accessibleTime = now
    ? new Intl.DateTimeFormat("en", { timeZone, hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(now)
    : "Loading local time"

  return (
    <svg viewBox="0 0 120 120" className="size-[82px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.24)] sm:size-24" role="img" aria-label={accessibleTime}>
      <circle cx="60" cy="60" r="57" fill="#17476d" stroke="#4b7798" strokeWidth="3" />
      {Array.from({ length: 60 }, (_, index) => {
        const major = index % 5 === 0
        return (
          <line
            key={index}
            x1="60"
            y1={major ? "8" : "10"}
            x2="60"
            y2={major ? "17" : "13"}
            transform={"rotate(" + index * 6 + " 60 60)"}
            stroke={major ? "#f4f8fc" : "#aac3d7"}
            strokeWidth={major ? "2.5" : "1.2"}
            strokeLinecap="round"
          />
        )
      })}
      <line x1="60" y1="63" x2="60" y2="37" transform={"rotate(" + hourAngle + " 60 60)"} stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <line x1="60" y1="65" x2="60" y2="23" transform={"rotate(" + minuteAngle + " 60 60)"} stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="70" x2="60" y2="14" transform={"rotate(" + secondAngle + " 60 60)"} stroke="#ff445b" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="60" cy="60" r="3.5" fill="#ff445b" />
      <circle cx="60" cy="60" r="1.4" fill="#ffffff" />
    </svg>
  )
}

export function FooterWorldClocks() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const updateTime = () => setNow(new Date())
    updateTime()
    const interval = window.setInterval(updateTime, 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="mx-auto grid max-w-[520px] grid-cols-3 justify-items-center gap-3 px-4 py-7 sm:gap-10">
      {clocks.map(({ label, timeZone }) => (
        <div key={timeZone} className="flex flex-col items-center gap-2.5 text-center">
          <AnalogClock timeZone={timeZone} now={now} />
          <p className="text-sm font-semibold text-white">{label}</p>
          <p className="text-xs tabular-nums text-white/65">
            {now
              ? new Intl.DateTimeFormat("en", {
                  timeZone,
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                }).format(now)
              : "--:--"}
          </p>
        </div>
      ))}
    </div>
  )
}
