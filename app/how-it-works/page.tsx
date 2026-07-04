export const metadata = {
  title: "How It Works — David Andrew Furniture",
  description: "The DAF process: brief intake, sourcing, costed plan, procurement, landing, install. Every step disclosed.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Submit a Brief",
      description: "Describe the space, the budget, the timeline. What rooms need furnishing. What constraints exist. What the function is.",
    },
    {
      number: "02",
      title: "We Source",
      description: "We identify verified workshops in Foshan, Guangdong. We request quotes, spec samples, verify lead times. You see the workshop name on every line item.",
    },
    {
      number: "03",
      title: "Costed Plan",
      description: "A line-by-line breakdown comes back. Every piece, every FOB price, freight estimate, customs estimate, our 20% fee. No hidden costs.",
    },
    {
      number: "04",
      title: "You Approve",
      description: "Review the plan. Ask questions. Request changes. No commitment until you approve the final costed plan.",
    },
    {
      number: "05",
      title: "Procurement",
      description: "We place orders with workshops, coordinate production timelines, arrange freight, handle customs brokerage. You receive updates at each milestone.",
    },
    {
      number: "06",
      title: "Landed & Installed",
      description: "Furniture arrives at your location. We coordinate install if requested (included in the 20%). The room is furnished.",
    },
  ];

  return (
    <main className="px-6 md:px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="eyebrow mb-6">Process</div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)' }}>
            How It Works
          </h1>
          <p className="mt-6 text-lg max-w-[700px]">
            From brief to installed furniture. Six steps. Every cost disclosed. 20% flat.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-16 border-b last:border-b-0"
              style={{ borderColor: 'var(--border)' }}
            >
              {/* Number — 3fr */}
              <div className="md:col-span-3">
                <div
                  className="text-6xl md:text-7xl font-medium opacity-20"
                  style={{ fontFamily: 'var(--font-jetbrains)' }}
                >
                  {step.number}
                </div>
              </div>

              {/* Content — 9fr */}
              <div className="md:col-span-9 space-y-4">
                <h2
                  className="text-3xl md:text-4xl"
                  style={{ fontFamily: 'var(--font-fraunces)' }}
                >
                  {step.title}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed max-w-[600px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t text-center" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-2xl mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Ready to start?
          </h2>
          <a
            href="/procurement"
            className="inline-block px-10 py-4 bg-ink text-background font-medium hover:opacity-90 transition-opacity"
            style={{ borderRadius: 'var(--radius-interactive)' }}
          >
            Submit a Brief
          </a>
        </div>
      </div>
    </main>
  );
}
