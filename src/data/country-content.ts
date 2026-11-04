import { resourceArticles, type ResourceArticleData } from "@/data/articles"
import { industriesByCountry, type Industry } from "@/data/industries"
import { servicesByCountry, type Service } from "@/data/services"
import type { CountryCode } from "@/lib/country"

type CountryDataset = {
  services: Service[]
  industries: Industry[]
  articles: ResourceArticleData[]
}

export const countryContent: Record<CountryCode, CountryDataset> = {
  AU: {
    services: servicesByCountry.AU,
    industries: industriesByCountry.AU,
    articles: resourceArticles,
  },
  US: { services: servicesByCountry.US, industries: industriesByCountry.US, articles: [] },
  UK: { services: servicesByCountry.UK, industries: industriesByCountry.UK, articles: [] },
}
