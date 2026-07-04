import { PersonaHero } from "@/components/PersonaHero";
import { FeeSignature } from "@/components/FeeSignature";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "For Developers — David Andrew Furniture",
  description: "Furnish 40 units or 400. One costed plan, one 20% fee, every cost disclosed. No managing 40 vendors across three countries.",
};

export default function DevelopersPage() {
  return (
    <main>
      <PersonaHero
        eyebrow="For Developers"
        headline="Furnish 40 units or 400. One plan. One fee."
        subhead="You're delivering keys in six months. The units need furniture that fits the brand, the budget, and the timeline. We source, cost, land, and install at 20% flat. Every freight line, every customs charge, every workshop — disclosed."
        pullQuote="No managing 40 vendors across three countries. One costed plan covers everything."
      />

      <section className="px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h3 className="eyebrow mb-4">The Scale Question</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                20% of $10,000 is $2,000. 20% of $500,000 is $100,000. Same rate. Same disclosure.
              </p>
              <p className="text-lg">
                You're not leaving money on the table at scale. Retail bakes 5–8% damage reserve into every price. We show it. The entire supply chain, costed and disclosed before you commit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeeSignature />
      <Footer />
    </main>
  );
}
