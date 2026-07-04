"use client";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* CTA — 8fr */}
          <div className="md:col-span-8 space-y-6">
            <h2 style={{ fontFamily: 'var(--font-fraunces)' }}>
              Ready to furnish a space?
            </h2>
            <p className="max-w-[600px]">
              Submit a brief. Describe the room, the budget, the timeline. A costed plan comes back with every line item shown.
            </p>
            <a
              href="/procurement"
              className="inline-block px-8 py-4 bg-ink text-background font-medium"
              style={{ borderRadius: 'var(--radius-interactive)' }}
            >
              Submit a Brief
            </a>
          </div>

          {/* Meta — 4fr */}
          <div className="md:col-span-4 flex flex-col justify-end space-y-4">
            <div className="eyebrow">David Andrew Furniture</div>
            <div className="space-y-2">
              <a href="/how-it-works" className="block text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--stone)' }}>
                How It Works
              </a>
              <a href="/sample-plan" className="block text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--stone)' }}>
                Sample Plan
              </a>
              <a href="/designers" className="block text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--stone)' }}>
                For Designers
              </a>
              <a href="/developers" className="block text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--stone)' }}>
                For Developers
              </a>
              <a href="/decorators" className="block text-sm hover:opacity-70 transition-opacity" style={{ color: 'var(--stone)' }}>
                For Decorators
              </a>
            </div>
            <p className="text-sm pt-4" style={{ color: 'var(--stone)' }}>
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
