"use client";

export function Hero() {
  return (
    <section className="min-h-[88vh] px-6 md:px-12 py-32 md:py-40 flex items-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          {/* Main content — 7fr */}
          <div className="md:col-span-7 space-y-10">
            <div className="eyebrow">Furniture Services</div>
            <h1 style={{ fontFamily: 'var(--font-fraunces)' }}>
              Send us a space. A costed plan comes back.
            </h1>
            <div className="space-y-5 max-w-[580px] text-lg">
              <p>
                Every supplier, freight line, and customs charge shown. Our 20% flat fee on the last line. Complimentary services included.
              </p>
              <p>
                We furnish whole rooms and whole houses, sourced from the workshop, landed, and installed. A circle, not a contract.
              </p>
            </div>
            <div className="pt-2">
              <a
                href="/procurement"
                className="inline-block px-10 py-4 bg-ink text-background font-medium hover:opacity-90 transition-opacity"
                style={{ borderRadius: 'var(--radius-interactive)' }}
              >
                Submit a Brief
              </a>
            </div>
          </div>

          {/* Pull quote rail — 5fr */}
          <div className="md:col-span-5 flex items-center md:pl-8">
            <blockquote
              className="text-2xl md:text-3xl leading-[1.3] border-l-2 pl-6 md:pl-8"
              style={{
                fontFamily: 'var(--font-fraunces)',
                color: 'var(--stone)',
                borderColor: 'var(--border)'
              }}
            >
              We are the opposite of retail. We are not a store, not software, not a subscription. We are one person who already has the factory's number.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
