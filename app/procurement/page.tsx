import { ProcurementForm } from "@/components/ProcurementForm";

export const metadata = {
  title: "Submit a Brief — David Andrew Furniture",
  description: "Describe the space, the budget, the timeline. A costed plan comes back with every line item shown.",
};

export default function ProcurementPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-[900px] mx-auto">
        <div className="mb-16">
          <div className="eyebrow mb-6">Brief Intake</div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)' }}>
            Submit a Brief
          </h1>
          <p className="mt-6 text-lg max-w-[700px]">
            Describe the space. The budget. The timeline. A costed plan comes back — every supplier, freight line, and customs charge shown, our 20% flat fee on the last line.
          </p>
        </div>

        <ProcurementForm />
      </div>
    </main>
  );
}
