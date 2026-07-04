"use client";

export function ProofPoints() {
  const points = [
    {
      caption: "The Workshop",
      fact: "We name the workshop, show you the FOB, and charge 20% on top. That's the whole price.",
    },
    {
      caption: "The Room",
      fact: "A room's energy isn't one hero piece. It's the fifth thing your eye lands on agreeing with the first four. We spec the whole room in series so the energy is designed, not accidental.",
    },
    {
      caption: "The Software",
      fact: "The #1 Google result for 'procurement agents for interior designers' is a software subscription. The software does not call the factory in Foshan. You do. DAF is not software.",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-32 md:py-40" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="max-w-[1400px] mx-auto space-y-24">
        {points.map((point, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
          >
            {/* Caption — 5fr */}
            <div className="md:col-span-5">
              <h3
                className="eyebrow"
                style={{ fontFamily: 'var(--font-jetbrains)' }}
              >
                {point.caption}
              </h3>
            </div>

            {/* Fact — 7fr */}
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl leading-[1.5]">
                {point.fact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
