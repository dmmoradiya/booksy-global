import type { MetadataRoute } from "next"
import { resourceArticles } from "@/data/articles"
import { servicesByCountry } from "@/data/services"
import { teamProfiles } from "@/data/team"

const siteUrl = "https://booksyglobal.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/services",
    "/industries",
    "/resources",
    "/about",
    "/team",
    "/contact",
    "/terms",
  ]
  const servicePaths = servicesByCountry.AU.map((service) => "/services/" + service.slug)
  const articlePaths = resourceArticles.map((article) => "/resources/" + article.slug)
  const teamPaths = teamProfiles.map((profile) => "/team/" + profile.slug)

  return [...staticPaths, ...servicePaths, ...articlePaths, ...teamPaths].map((path) => ({
    url: siteUrl + path,
  }))
}
