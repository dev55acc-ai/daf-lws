import { PersonaHero } from "@/components/PersonaHero";
import { FeeSignature } from "@/components/FeeSignature";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "For Decorators — David Andrew Furniture",
  description: "Client wants the whole house furnished. You design the space, we handle procurement. 20% flat, everything disclosed.",
};

export default function DecoratorsPage() {
  return (
    <main>
      <PersonaHero
        eyebrow="For Decorators"
        headline="You design. We procure. Client sees every cost."
        subhead="Client wants the whole house furnished in eight weeks. You're specifying 120 pieces across six rooms. We source from verified workshops, show freight and customs line-by-line, and charge 20% flat. No hidden markup. No surprise fees."
        pullQuote="The $4,000 showroom sofa costs $600 to build. We show the $600 and charge 20% on top."
      />

      <section className="px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h3 className="eyebrow mb-4">The Client Conversation</h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-2xl leading-relaxed mb-6">
                Transparency is the whole pitch. Your client sees the workshop, the FOB, the freight, the customs, and our 20%.
              </p>
              <p className="text-lg">
                No explaining away a 300% showroom markup. The client knows what they're paying for. You control the design. We handle the rest.
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
