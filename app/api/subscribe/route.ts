// app/api/subscribe/route.ts
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    const normalized = String(email ?? "").trim().toLowerCase()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 })
    }

    const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_ANON_KEY as string,
        Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email: normalized, source: "coming_soon" }),
    })

    // 201 = added. 409 = already on the list. Both are a "success" to the visitor.
    if (res.ok || res.status === 409) return NextResponse.json({ ok: true })

    console.error("Supabase insert failed:", res.status, await res.text())
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 500 })
  }
}
