import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service — The Romance Room",
  description: "Terms of Service and ticket purchase terms for The Romance Room live events.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm text-rose transition-colors hover:text-foreground">
          &larr; Back
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl text-balance">
          Terms of Service &amp; <span className="italic text-gold">Ticket Purchase Terms</span>
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 4, 2026</p>

        <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed text-muted-foreground">
          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">1. Agreement</h2>
            <p>
              By using theromanceroomlive.com (the &quot;Site&quot;) or buying a ticket to a Romance Room event (an
              &quot;Event&quot;), you agree to these Terms and to our Privacy Policy. If you don&apos;t agree, please
              don&apos;t use the Site or buy a ticket.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">2. The Event</h2>
            <p>
              The Romance Room is a live, adult literary and performance experience. Specific details — including date,
              time, venue, hosts, and performers — are announced on the Site and may change. We&apos;ll make reasonable
              efforts to notify ticketholders of material changes by email.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">3. Age requirement</h2>
            <p>
              This is a 21+ Event featuring mature romantic content, held at a venue that may serve alcohol. You must be at
              least 21 years old to buy a ticket and to attend, and you may be asked to show valid government-issued photo
              ID at the door. Entry may be refused, without refund, to anyone who cannot verify their age.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">4. Tickets, prices &amp; payment</h2>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                Ticket prices are shown at checkout in U.S. dollars and may include or add booking fees and applicable
                taxes.
              </li>
              <li>
                Tickets are sold through Ticket Tailor, and payments are processed by Stripe. By purchasing, you also agree
                to their applicable terms.
              </li>
              <li>We offer General Admission and VIP ticket types; VIP benefits are described at checkout.</li>
              <li>Your order is confirmed only when you receive a confirmation email containing your ticket(s).</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">5. Your ticket (bearer tickets)</h2>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                Each ticket contains a unique QR code that admits one person, one time. The first valid scan is admitted;
                any later scan of the same code will be rejected.
              </li>
              <li>
                Do not share, post publicly, or duplicate your ticket. If a copy is scanned before you arrive, you may be
                denied entry. We are not responsible for tickets obtained from anyone other than us or Ticket Tailor.
              </li>
              <li>
                Tickets may be transferred to another eligible attendee by giving them the ticket — but only one entry per
                code applies.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">6. Refunds, exchanges &amp; transfers</h2>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>All sales are final and tickets are non-refundable, except as required by law or as stated here.</li>
              <li>If the Event is cancelled, you&apos;ll receive a refund of the ticket face value.</li>
              <li>If the Event is rescheduled or relocated, your ticket will be honored for the new date or venue.</li>
              <li>Booking and processing fees are non-refundable.</li>
              <li>
                Tickets may be transferred to another eligible (21+) attendee. We do not facilitate resale, and tickets
                resold above face value may be voided.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">7. Entry, conduct &amp; safety</h2>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>
                Doors open at the time stated on your ticket or on the Site; latecomers may be admitted at our discretion.
              </li>
              <li>
                We are committed to a safe, respectful space. We may refuse entry to, or remove without refund, anyone who
                is disruptive, harassing, intoxicated, threatening, or who violates venue rules or these Terms.
              </li>
              <li>You must follow all venue policies and the reasonable instructions of event staff.</li>
              <li>By attending, you acknowledge the mature nature of the content presented.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">8. Photography &amp; recording</h2>
            <ul className="flex list-disc flex-col gap-2 pl-5">
              <li>Personal photos are welcome; recording of full performances is not permitted.</li>
              <li>
                By attending, you grant us permission to photograph, film, and record the Event and to use your image and
                likeness, as captured incidentally as an attendee, for promotional purposes without compensation.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">9. Assumption of risk</h2>
            <p>You attend the Event voluntarily and assume the ordinary risks of attending a live event.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">10. Intellectual property</h2>
            <p>
              The Site, its content, and the Event performances are owned by The Romance Room or its performers and
              licensors and may not be reproduced or distributed without permission.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">11. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, The Romance Room and its organizers, hosts, performers, and venue
              partners are not liable for indirect, incidental, or consequential damages arising from your use of the Site
              or attendance at the Event. Our total liability for any ticket is limited to the amount you paid for that
              ticket.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">12. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time; the &quot;Last updated&quot; date will change. Continued use of
              the Site or attendance at the Event constitutes acceptance.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">13. Governing law</h2>
            <p>
              These Terms are governed by the laws of the State of New York, without regard to its conflict-of-laws rules.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-serif text-2xl text-foreground">14. Contact</h2>
            <p>hello@theromanceroomlive.com · theromanceroomlive.com</p>
          </section>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-8 text-center">
          <Link href="/privacy" className="text-sm text-rose transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <p className="text-xs text-muted-foreground">&copy; 2026 The Romance Room</p>
        </div>
      </div>
    </main>
  )
}
