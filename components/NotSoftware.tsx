"use client";

export function NotSoftware() {
  return (
    <section className="px-6 md:px-12 py-32 md:py-40 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Left: What we're not */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="eyebrow mb-4">Not Software</h2>
              <p className="text-lg" style={{ color: 'var(--stone)' }}>
                The #1 Google result for "procurement agents for interior designers" is a software subscription.
              </p>
            </div>
            <div>
              <h3 className="eyebrow mb-4">Not Retail</h3>
              <p className="text-lg" style={{ color: 'var(--stone)' }}>
                The $4,000 showroom sofa costs $600 to build. The rest is showroom, markup, and a brand you're renting.
              </p>
            </div>
          </div>

          {/* Right: What we are */}
          <div className="md:col-span-3 flex items-center">
            <div className="space-y-6">
              <h2
                className="text-4xl md:text-5xl leading-tight"
                style={{ fontFamily: 'var(--font-fraunces)' }}
              >
                Software does not call the factory in Foshan. We do.
              </h2>
              <p className="text-xl">
                One person who already has the workshop's number. 20% flat. Every cost disclosed. That's DAF.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
