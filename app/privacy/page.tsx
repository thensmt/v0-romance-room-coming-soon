import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy — The Romance Room",
  description: "How The Romance Room collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm text-rose transition-colors hover:text-foreground">
          &larr; Back
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl text-balance">
          Privacy <span className="italic text-gold">Policy</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 4, 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Who we are</h2>
            <p>
              The Romance Room (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates the website
              theromanceroomlive.com (the &quot;Site&quot;) and sells tickets to The Romance Room live events. For any
              privacy question, email privacy@theromanceroomlive.com (or hello@theromanceroomlive.com).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">What we collect</h2>
            <p className="font-medium text-foreground">Information you give us</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>Waitlist / newsletter: your email address.</li>
              <li>
                Ticket purchases: your name, email, and billing details. Your card details are entered directly with our
                payment processor and are never stored on our systems.
              </li>
              <li>Communications: anything you send us by email or social media.</li>
            </ul>
            <p className="font-medium text-foreground">Information collected automatically</p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                Device and browser type, pages viewed, referring links, and similar analytics data, collected through
                cookies and similar technologies.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">The tools and processors we use</h2>
            <p>
              We rely on trusted third parties to run the Site and sell tickets. Each receives only the data needed to do
              its job, and each is bound by its own privacy terms:
            </p>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>Ticket Tailor — ticketing, checkout, and door check-in</li>
              <li>Stripe — payment processing (handles your card data under its own privacy policy)</li>
              <li>Supabase — the secure database for our waitlist and customer records</li>
              <li>Zoho (Campaigns &amp; Mail) — email newsletters and correspondence</li>
              <li>Resend — sending transactional and marketing email</li>
              <li>Vercel — website hosting and basic site analytics</li>
              <li>Google (Analytics &amp; Ads) — site analytics and advertising measurement</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">How we use your information</h2>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>Deliver your tickets and important event information</li>
              <li>Process payments and help prevent fraud</li>
              <li>
                Send you event news and marketing email that you can opt out of at any time (every marketing email
                includes an unsubscribe link)
              </li>
              <li>Understand and improve how the Site performs</li>
              <li>Meet our legal obligations</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Cookies &amp; tracking</h2>
            <p>
              We use cookies and similar technologies — including Google Analytics and Google Ads — to measure traffic and
              advertising performance. You can control cookies through your browser settings; blocking them may affect
              some Site features.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Email marketing</h2>
            <p>
              If you join our waitlist or buy a ticket, we may email you about The Romance Room. You can unsubscribe at any
              time using the link in any marketing email, or by emailing us. Transactional messages — like your ticket and
              order confirmation — are not marketing and will still be sent.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Data retention</h2>
            <p>
              We keep your information for as long as we need it to run our events and our business, and as required by
              law. You can ask us to delete it (see Your rights).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Your rights</h2>
            <p>
              Depending on where you live (for example, under the California CCPA/CPRA or the EU/UK GDPR), you may have the
              right to access, correct, delete, or port your personal information, and to opt out of marketing. To exercise
              any of these, email privacy@theromanceroomlive.com. We will not discriminate against you for exercising your
              rights.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect your information, including
              access-controlled databases and reputable processors. No method of transmission over the internet is 100%
              secure, but we work hard to protect your data.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Children</h2>
            <p>
              The Site and our events are intended for adults. We do not knowingly collect personal information from anyone
              under 21.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. We&apos;ll change the &quot;Last updated&quot; date above and,
              for material changes, take reasonable steps to notify you.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">Contact</h2>
            <p>privacy@theromanceroomlive.com · theromanceroomlive.com</p>
          </section>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-8 text-center">
          <Link href="/terms" className="text-sm text-rose transition-colors hover:text-foreground">
            Terms of Service
          </Link>
          <p className="text-xs text-muted-foreground">&copy; 2026 The Romance Room</p>
        </div>
      </div>
    </main>
  )
}
