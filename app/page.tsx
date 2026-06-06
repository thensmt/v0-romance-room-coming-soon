"use client"

import { useState } from "react"
import Link from "next/link"


export default function Home() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!email.trim()) {
      setStatus("error")
      setErrorMessage("Please enter your email address.")
      return
    }

    if (!validateEmail(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, company }),
      })

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.")
      }

      const data = await response.json().catch(() => ({}))

      // Fire GA4 sign_up ONLY for a genuinely new lead — not repeat submissions
      if (
        data?.isNew === true &&
        typeof window !== "undefined" &&
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
      ) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "sign_up", { method: "waitlist" })
      }

      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-14">
      <div className="flex w-full max-w-lg flex-col items-center gap-8 text-center">
        {/* Eyebrow */}
        <p className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.25em] text-rose">
          <span className="text-rose">&#9679;</span>
          The Romance Room
        </p>

        {/* Headline */}
        <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
          The doors{" "}
          <span className="italic text-gold">open soon.</span>
        </h1>

        {/* Subline */}
        <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
          Something intimate is in the works — a place of our own, where The Romance Room finally lives online. Join the list and be the first through the door when it opens.
        </p>

        {/* Divider */}
        <span className="text-rose text-xl">&#10022;</span>

        {/* Email Signup */}
        {status === "success" ? (
          <p className="text-sm text-gold sm:text-base">
            You&apos;re on the list &#9829; — watch your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:gap-2.5">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (status === "error") setStatus("idle")
              }}
              placeholder="your@email.com"
              className="flex-1 rounded-md border border-border bg-input px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
              disabled={status === "loading"}
            />
            {/* Honeypot — hidden off-screen to trap bots; not for real users */}
            <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-md bg-gradient-to-r from-gold to-rose px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Keep me posted"}
            </button>
          </form>
        )}

        {/* Error Message */}
        {status === "error" && errorMessage && (
          <p className="text-sm text-destructive">{errorMessage}</p>
        )}

        {/* Fine Print */}
        <p className="text-xs text-muted-foreground">
          Only Romance Room news. No spam. &#9829;
        </p>

        {/* Footer */}
        <footer className="mt-10 flex flex-col items-center gap-4">
          <a
            href="https://www.instagram.com/theromanceroomlive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Follow us on Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5.5 w-5.5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>&copy; 2026 The Romance Room</span>
            <span aria-hidden="true">&middot;</span>
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <span aria-hidden="true">&middot;</span>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </p>
        </footer>
      </div>
    </main>
  )
}
