"use client";

export function SamplePlan() {
  const lineItems = [
    { item: "Modular Sofa (3-seat), fabric upholstery", workshop: "Foshan Workshop A", fob: "$620.00", qty: 1 },
    { item: "Coffee Table, oak veneer, 48\" × 28\"", workshop: "Foshan Workshop B", fob: "$185.00", qty: 1 },
    { item: "Accent Chair, walnut frame, linen", workshop: "Foshan Workshop A", fob: "$290.00", qty: 2 },
    { item: "Side Table, solid ash, 18\" dia", workshop: "Lecong Supplier C", fob: "$95.00", qty: 2 },
    { item: "Floor Lamp, brass + linen shade", workshop: "Guangzhou Supplier D", fob: "$110.00", qty: 1 },
  ];

  const subtotalFOB = lineItems.reduce((sum, item) => sum + parseFloat(item.fob.replace('$', '').replace(',', '')) * item.qty, 0);
  const freight = 485.00;
  const customs = 320.00;
  const subtotal = subtotalFOB + freight + customs;
  const dafFee = subtotal * 0.20;
  const total = subtotal + dafFee;

  return (
    <div className="border" style={{ borderColor: 'var(--border)' }}>
      {/* Header */}
      <div className="bg-surface px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="grid grid-cols-12 gap-4 eyebrow">
          <div className="col-span-5">Item</div>
          <div className="col-span-3">Workshop</div>
          <div className="col-span-1 text-center">Qty</div>
          <div className="col-span-3 text-right">FOB</div>
        </div>
      </div>

      {/* Line Items */}
      {lineItems.map((line, i) => (
        <div
          key={i}
          className="px-6 py-5 border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-5">{line.item}</div>
            <div className="col-span-3 text-sm" style={{ color: 'var(--stone)' }}>
              {line.workshop}
            </div>
            <div className="col-span-1 text-center">{line.qty}</div>
            <div className="col-span-3 text-right font-medium">
              {line.fob}
              {line.qty > 1 && <span className="text-sm ml-2" style={{ color: 'var(--stone)' }}>× {line.qty}</span>}
            </div>
          </div>
        </div>
      ))}

      {/* Subtotal */}
      <div className="px-6 py-4 bg-surface border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex justify-between items-center">
          <span className="eyebrow">Subtotal (FOB)</span>
          <span className="font-medium">${subtotalFOB.toFixed(2)}</span>
        </div>
      </div>

      {/* Freight */}
      <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex justify-between items-center">
          <div>
            <div>Freight (Foshan → Vancouver)</div>
            <div className="text-sm mt-1" style={{ color: 'var(--stone)' }}>
              Ocean freight + drayage
            </div>
          </div>
          <span className="font-medium">${freight.toFixed(2)}</span>
        </div>
      </div>

      {/* Customs */}
      <div className="px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex justify-between items-center">
          <div>
            <div>Customs Brokerage + Duty</div>
            <div className="text-sm mt-1" style={{ color: 'var(--stone)' }}>
              Canadian customs, furniture category
            </div>
          </div>
          <span className="font-medium">${customs.toFixed(2)}</span>
        </div>
      </div>

      {/* Subtotal before fee */}
      <div className="px-6 py-4 bg-surface border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex justify-between items-center">
          <span className="eyebrow">Subtotal (Landed)</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* DAF Fee */}
      <div className="px-6 py-5 border-b-2" style={{ borderColor: 'var(--accent)' }}>
        <div className="flex justify-between items-center">
          <div>
            <div className="font-medium">DAF Fee (20% flat)</div>
            <div className="text-sm mt-1" style={{ color: 'var(--stone)' }}>
              Sourcing, coordination, install, complimentary services
            </div>
          </div>
          <span className="font-medium text-xl" style={{ color: 'var(--accent)' }}>
            ${dafFee.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="px-6 py-6 bg-surface">
        <div className="flex justify-between items-center">
          <span className="text-xl font-medium" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Total
          </span>
          <span className="text-3xl font-medium" style={{ fontFamily: 'var(--font-fraunces)' }}>
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
