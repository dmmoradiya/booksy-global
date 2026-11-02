"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"

import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { posts } from "@/data/site"

const categories = ["All", "Tax", "Bookkeeping", "Payroll", "Growth"] as const

export default function ResourcesPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All")
  const visible = category === "All" ? posts : posts.filter((p) => p.category === category)

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights to Help Your Business Grow"
        description="Practical articles and insights from our team of accountants and advisors."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources" }]}
      />

      {/* Blog */}
      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Blog & Insights" title="Latest Articles" align="left" divider />
          <Tabs value={category} onValueChange={(v) => setCategory(v as typeof category)}>
            <TabsList className="h-auto flex-wrap justify-start gap-1 bg-brand-soft p-1">
              {categories.map((c) => (
                <TabsTrigger
                  key={c}
                  value={c}
                  className="h-9 rounded-md px-4 text-[13px] data-active:bg-navy data-active:text-white"
                >
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <Card
              key={post.title}
              className="group gap-0 overflow-hidden rounded-xl bg-white p-0 shadow-[0_6px_24px_-10px_rgba(15,29,51,0.12)] ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(15,29,51,0.22)]"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  width={1200}
                  height={750}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 h-6 rounded-md bg-white px-2.5 text-[11.5px] font-semibold text-navy">
                  {post.category}
                </Badge>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-[12px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {post.read}
                  </span>
                </div>
                <h3 className="mt-3 text-[16px] leading-snug font-semibold text-ink group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-[1.75] text-slate-600">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold text-brand transition-[gap] group-hover:gap-3">
                  Read Article <ArrowRight className="size-4" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
