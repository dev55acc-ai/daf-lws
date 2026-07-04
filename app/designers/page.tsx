import { PersonaHero } from "@/components/PersonaHero";
import { FeeSignature } from "@/components/FeeSignature";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "For Designers — David Andrew Furniture",
  description: "You specify the piece. We name the workshop, show the FOB, and charge 20% on top. Every cost disclosed. No showroom markup.",
};

export default function DesignersPage() {
  return (
    <main>
      <PersonaHero
        eyebrow="For Designers"
        headline="You specify. We source. Everything disclosed."
        subhead="Client budgets 80 pieces across three floors. You need the sofa from that one factory in Foshan and the credenza your client saw last year. We name the workshop, show the FOB, freight, customs, and charge 20% on top. That's the whole price."
        pullQuote="Specify the piece. We call the factory. No showroom markup between you and the workshop."
      />

      <section className="px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h3 className="eyebrow mb-4">The Room Energy</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                A room's energy isn't one hero piece. It's the fifth thing your eye lands on agreeing with the first four.
              </p>
              <p className="text-lg">
                We spec the whole room in series so the energy is designed, not accidental. You control the aesthetic. We handle the procurement, freight, and install. 20% flat on every line item.
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
