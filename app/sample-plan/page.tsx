import { SamplePlan } from "@/components/SamplePlan";

export const metadata = {
  title: "Sample Plan — David Andrew Furniture",
  description: "What a costed plan looks like. Every line item shown. Every cost disclosed.",
};

export default function SamplePlanPage() {
  return (
    <main className="px-6 md:px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <div className="eyebrow mb-6">Example</div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)' }}>
            What a Costed Plan Looks Like
          </h1>
          <p className="mt-6 text-lg max-w-[700px]">
            Every supplier, freight line, and customs charge shown. Our 20% flat fee on the last line. This is what transparency looks like.
          </p>
        </div>

        <SamplePlan />

        <div className="mt-20 pt-12 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-fraunces)' }}>
                This is the whole price
              </h2>
              <p className="text-lg">
                No hidden fees. No surprise customs charges. No buried freight costs. You see what we see.
              </p>
            </div>
            <div className="flex items-end justify-end">
              <a
                href="/procurement"
                className="inline-block px-10 py-4 bg-ink text-background font-medium hover:opacity-90 transition-opacity"
                style={{ borderRadius: 'var(--radius-interactive)' }}
              >
                Submit Your Brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
