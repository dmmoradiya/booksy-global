import Image from "next/image"

export function ResourceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        unoptimized
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b192c]/85 via-[#0b192c]/65 to-[#0b192c]/35"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[360px] max-w-[1360px] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[420px] sm:px-6 lg:px-4">
        <p className="text-sm font-semibold tracking-wide text-blue-200">{eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-[960px] font-serif text-balance text-[2.65rem] leading-[1.1] tracking-tight text-white sm:text-[3.35rem] lg:text-[4rem]">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-[760px] text-base leading-[1.75] text-slate-200 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
