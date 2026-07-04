export const metadata = {
  title: "Lifeware Services — Furniture Lifecycle at $499",
  description: "3–7 year furniture exchange. Keep the room current without replacing from scratch. $499 once, not annual.",
};

export default function LifewarePage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[85vh] px-6 md:px-12 py-32 md:py-40 flex items-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
            <div className="md:col-span-7 space-y-10">
              <div className="eyebrow">Lifeware Services (LWS)</div>
              <h1 style={{ fontFamily: 'var(--font-fraunces)' }}>
                Furniture lifecycle. Not furniture replacement.
              </h1>
              <div className="space-y-5 max-w-[580px] text-lg">
                <p>
                  3–7 year exchange so furniture is kept current, not replaced from scratch. $499 once. Not annual.
                </p>
                <p>
                  Lifeware is the lifecycle side of DAF. A circle that refreshes the room without starting from zero.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="/procurement"
                  className="inline-block px-10 py-4 bg-ink text-background font-medium hover:opacity-90 transition-opacity"
                  style={{ borderRadius: 'var(--radius-interactive)' }}
                >
                  Inquire About Lifeware
                </a>
              </div>
            </div>

            <div className="md:col-span-5 flex items-center md:pl-8">
              <blockquote
                className="text-2xl md:text-3xl leading-[1.3] border-l-2 pl-6 md:pl-8"
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  color: 'var(--stone)',
                  borderColor: 'var(--border)'
                }}
              >
                $499 once. 3–7 years. The room stays current without replacing everything.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is */}
      <section className="px-6 md:px-12 py-32 md:py-40" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="eyebrow mb-6">What It Is</h2>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed">
                Lifeware Services (LWS) is a 3–7 year exchange program. You pay $499 once. The furniture gets refreshed when the room needs it, not when the lease is up.
              </p>
              <p className="text-lg">
                Furniture wears. Styles shift. Needs change. LWS handles the exchange — taking back the old pieces, sourcing the new ones, coordinating the swap. The room stays current.
              </p>
              <p className="text-lg">
                This is not a subscription. $499 once covers the lifecycle coordination. Furniture procurement still runs at DAF's 20% flat rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="eyebrow mb-12">The Cycle</h2>
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <div className="text-5xl opacity-20" style={{ fontFamily: 'var(--font-jetbrains)' }}>01</div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  Initial Furnishing
                </h3>
                <p className="text-lg">
                  Room is furnished via DAF at 20% flat. Lifeware $499 fee is paid once at this stage.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <div className="text-5xl opacity-20" style={{ fontFamily: 'var(--font-jetbrains)' }}>02</div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  3–7 Year Window
                </h3>
                <p className="text-lg">
                  When the room needs a refresh — new style, different function, wear and tear — you notify LWS. We coordinate the exchange.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <div className="text-5xl opacity-20" style={{ fontFamily: 'var(--font-jetbrains)' }}>03</div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  Exchange
                </h3>
                <p className="text-lg">
                  Old furniture is taken back. New pieces are sourced (DAF 20% rate applies). The swap is coordinated. Room is refreshed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-24 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Interested in Lifeware?
          </h2>
          <p className="text-lg mb-8 max-w-[600px] mx-auto">
            Submit a brief and mention Lifeware Services. We'll include the $499 lifecycle coordination in the costed plan.
          </p>
          <a
            href="/procurement"
            className="inline-block px-10 py-4 bg-ink text-background font-medium hover:opacity-90 transition-opacity"
            style={{ borderRadius: 'var(--radius-interactive)' }}
          >
            Submit a Brief
          </a>
        </div>
      </section>
    </main>
  );
}
