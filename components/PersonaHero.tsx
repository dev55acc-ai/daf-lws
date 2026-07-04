"use client";

interface PersonaHeroProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  pullQuote: string;
}

export function PersonaHero({ eyebrow, headline, subhead, pullQuote }: PersonaHeroProps) {
  return (
    <section className="min-h-[85vh] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Main content — 7fr */}
          <div className="md:col-span-7 space-y-8">
            <div className="eyebrow">{eyebrow}</div>
            <h1 style={{ fontFamily: 'var(--font-fraunces)' }}>
              {headline}
            </h1>
            <div className="max-w-[600px]">
              <p className="text-lg">{subhead}</p>
            </div>
            <a
              href="/procurement"
              className="inline-block px-8 py-4 bg-ink text-background font-medium"
              style={{ borderRadius: 'var(--radius-interactive)' }}
            >
              Submit a Brief
            </a>
          </div>

          {/* Pull quote rail — 5fr */}
          <div className="md:col-span-5 flex items-center">
            <blockquote
              className="text-2xl md:text-3xl leading-tight"
              style={{
                fontFamily: 'var(--font-fraunces)',
                color: 'var(--stone)'
              }}
            >
              {pullQuote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
