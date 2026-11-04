import Image from "next/image"

export function ComingSoon({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-76px)] items-center justify-center overflow-hidden bg-navy px-4 py-20 text-center text-white">
      <Image
        src="/hero-section.avif"
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#0b122a]/65" aria-hidden="true" />
      {showTitle && (
        <h1 className="text-balance font-serif text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl">
          Coming Soon
        </h1>
      )}
    </section>
  )
}
