// app/api/subscribe/route.ts
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { email, hp_field } = await req.json()

    // Honeypot: real users never fill this. If present, fake success and write nothing.
    // isNew: false ensures the client's GA4 sign_up gate does not fire for bots.
    if (typeof hp_field === "string" && hp_field.trim() !== "") {
      return NextResponse.json({ ok: true, isNew: false })
    }

    const normalized = String(email ?? "").trim().toLowerCase()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })
    }

    const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email: normalized, source: "coming_soon" }),
    })

    // 201 = new lead. 409 = already on the list. Both succeed for the visitor,
    // but only a new insert is a real signup for analytics.
    if (res.ok) return NextResponse.json({ ok: true, isNew: true })
    if (res.status === 409) return NextResponse.json({ ok: true, isNew: false })

    console.error("Supabase insert failed:", res.status, await res.text())
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 })
  }
}
