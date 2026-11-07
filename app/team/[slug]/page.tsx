import type { Metadata } from "next"
import { notFound } from "next/navigation"
import TeamProfilePage from "@/site-pages/team-profile"
import { teamProfiles } from "@/data/team"

export function generateStaticParams() {
  return teamProfiles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const profile = teamProfiles.find((person) => person.slug === slug)
  if (!profile) return { title: "Team member | Booksy Global" }
  return {
    title: profile.name + " | Booksy Global",
    description: profile.summary,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const profile = teamProfiles.find((person) => person.slug === slug)
  if (!profile) notFound()
  return <TeamProfilePage profile={profile} />
}
