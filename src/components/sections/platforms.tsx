import Image from "next/image"

const platforms = [
  { name: "Xero", logo: "/platform-logos/xero.svg" },
  { name: "MYOB Business", logo: "/platform-logos/myob.svg" },
  { name: "QuickBooks", logo: "/platform-logos/quickbooks.svg" },
  { name: "Zoho", logo: "/platform-logos/zoho.svg" },
  { name: "Sage Intacct", logo: "/platform-logos/sage.svg" },
  { name: "NetSuite", wordmark: "NetSuite" },
  { name: "Paychex", logo: "/platform-logos/paychex.svg" },
  { name: "Ripping", wordmark: "Ripping" },
]

export function Platforms() {
  return (
    <section id="software" className="overflow-hidden bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1360px] px-4 text-center sm:px-6 lg:px-10">
        <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
          Technology & workflows
        </p>
        <h2 className="mt-3 text-balance text-3xl leading-tight font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Powered by Trusted Accounting Technology
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[16.6px] leading-7 text-slate-600">
          Our team uses modern accounting, finance, and payroll platforms to deliver accurate
          bookkeeping, reliable reporting, and consistent support.
        </p>
      </div>

      <div className="platform-marquee relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden sm:mt-8">
        <div className="platform-marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {platforms.map(({ name, logo, wordmark }) => (
                <div
                  key={name}
                  role="img"
                  aria-label={name}
                  tabIndex={0}
                  title={name}
                  className="flex h-[min(9vw,120px)] w-[14.285vw] shrink-0 items-center justify-center"
                >
                  {logo ? (
                    <Image
                      src={logo}
                      alt=""
                      width={name === "Zoho" ? 1024 : 116}
                      height={name === "Zoho" ? 450 : 116}
                      className="h-auto w-[min(84%,116px)]"
                      unoptimized
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="text-center text-xl leading-tight font-bold tracking-tight text-ink"
                      aria-hidden="true"
                    >
                      {wordmark}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
