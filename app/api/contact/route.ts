import { NextResponse } from "next/server"

export const runtime = "nodejs"

const fields = [
  ["name", "Name"],
  ["country", "Country / Region"],
  ["company", "Company"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["message", "What do you need help with?"],
] as const

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
    .replace(/\r?\n/g, "<br>")
}

export async function POST(request: Request) {
  const apiKey = process.env.MAILGUN_API_KEY
  const domain = process.env.MAILGUN_DOMAIN
  const from = process.env.MAILGUN_FROM
  const to = process.env.MAILGUN_TO_EMAIL

  if (!apiKey || !domain || !from || !to) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 })
  }

  let body: Record<string, unknown>
  try {
    const parsed: unknown = await request.json()
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("Invalid body")
    body = parsed as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Please submit the form again." }, { status: 400 })
  }

  const values = Object.fromEntries(
    fields.map(([key]) => {
      const raw = body[key]
      const value = typeof raw === "string" ? raw.trim().slice(0, 5000) : ""
      return [key, value]
    }),
  ) as Record<(typeof fields)[number][0], string>

  if (!["Australia", "US", "UK"].includes(values.country)) {
    return NextResponse.json({ error: "Select a valid country or region." }, { status: 400 })
  }

  if (!values.name || !values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return NextResponse.json(
      { error: "Enter your name and a valid email address." },
      { status: 400 },
    )
  }

  const rows = fields
    .filter(([key]) => values[key])
    .map(
      ([key, label]) =>
        '<tr><th align="left" valign="top" style="padding:12px 14px;border-bottom:1px solid #e5eaf2;color:#52617a;font-size:14px;font-weight:600;width:34%">' +
        escapeHtml(label) +
        '</th><td valign="top" style="padding:12px 14px;border-bottom:1px solid #e5eaf2;color:#17233d;font-size:14px;line-height:1.6">' +
        escapeHtml(values[key]) +
        "</td></tr>",
    )
    .join("")

  const text = fields
    .filter(([key]) => values[key])
    .map(([key, label]) => label + ":\n" + values[key])
    .join("\n\n")

  const html =
    '<!doctype html><html lang="en"><body style="margin:0;padding:24px;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;color:#17233d">' +
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e1e7f0;border-radius:12px;overflow:hidden">' +
    '<tr><td style="padding:24px 28px;background:#111a4b;color:#ffffff"><p style="margin:0 0 6px;font-size:12px;letter-spacing:1.4px;text-transform:uppercase;color:#c8d5ff">Booksy Global</p><h1 style="margin:0;font-size:22px;line-height:1.35;color:#ffffff">New website enquiry</h1></td></tr>' +
    '<tr><td style="padding:24px 28px 8px"><p style="margin:0 0 18px;color:#52617a;font-size:14px;line-height:1.6">A visitor submitted the Contact Us form. Their details are below.</p><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">' +
    rows +
    "</table></td></tr>" +
    '<tr><td style="padding:18px 28px 24px;color:#69758b;font-size:12px;line-height:1.6">This message was sent from the Booksy Global website contact form.</td></tr></table></body></html>'

  const form = new FormData()
  form.set("from", from)
  form.set("to", to)
  form.set("subject", "Website enquiry: " + values.name)
  form.set("text", text)
  form.set("html", html)
  form.set("h:Reply-To", values.email)

  try {
    const response = await fetch(
      "https://api.mailgun.net/v3/" + encodeURIComponent(domain) + "/messages",
      {
        method: "POST",
        headers: { Authorization: "Basic " + Buffer.from("api:" + apiKey).toString("base64") },
        body: form,
        cache: "no-store",
      },
    )

    if (!response.ok) {
      return NextResponse.json(
        { error: "We could not send your enquiry right now. Please try again shortly." },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "We could not send your enquiry right now. Please try again shortly." },
      { status: 502 },
    )
  }
}
