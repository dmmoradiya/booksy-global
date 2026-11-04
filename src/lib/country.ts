import { useSyncExternalStore } from "react"

export const countryOptions = [
  { code: "AU", name: "Australia", adjective: "Australian", phrase: "Australia", flag: "🇦🇺" },
  { code: "US", name: "US", adjective: "US", phrase: "the United States", flag: "🇺🇸" },
  { code: "UK", name: "UK", adjective: "UK", phrase: "the United Kingdom", flag: "🇬🇧" },
] as const

export type CountryCode = (typeof countryOptions)[number]["code"]
export type CountryState = CountryCode | "pending"
export const countryDetails = {
  AU: countryOptions[0],
  US: countryOptions[1],
  UK: countryOptions[2],
}

const storageKey = "booksy-country"
const changeEvent = "booksy-country-change"

function getCountrySnapshot(): CountryCode {
  try {
    const saved = window.localStorage.getItem(storageKey)
    if (countryOptions.some((country) => country.code === saved)) return saved as CountryCode
  } catch {
    // Use Australia when storage is unavailable.
  }
  return "AU"
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange)
  window.addEventListener(changeEvent, onChange)
  return () => {
    window.removeEventListener("storage", onChange)
    window.removeEventListener(changeEvent, onChange)
  }
}

export function useCountryState(): CountryState {
  return useSyncExternalStore(subscribe, getCountrySnapshot, (): CountryState => "pending")
}

export function useCountry(): CountryCode {
  const country = useCountryState()
  return country === "pending" ? "AU" : country
}

export function setCountry(country: CountryCode) {
  try {
    window.localStorage.setItem(storageKey, country)
  } catch {
    // The selection remains active for this page session.
  }
  window.dispatchEvent(new Event(changeEvent))
}
