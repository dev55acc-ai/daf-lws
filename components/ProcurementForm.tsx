"use client";

import { useState } from "react";

export function ProcurementForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    space: "",
    budget: "",
    timeline: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire to actual submission endpoint
    console.log("Form submitted:", formState);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <h2
          className="mb-6"
          style={{ fontFamily: 'var(--font-fraunces)' }}
        >
          Brief Received
        </h2>
        <p className="text-lg mb-4">
          A costed plan is on its way. Expect a response within 48 hours.
        </p>
        <p style={{ color: 'var(--stone)' }}>
          We review every brief manually. No automated quotes.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="eyebrow block mb-3">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-surface border border-border focus:outline-none focus:border-accent"
            style={{ borderRadius: 'var(--radius-interactive)' }}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow block mb-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-surface border border-border focus:outline-none focus:border-accent"
            style={{ borderRadius: 'var(--radius-interactive)' }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="eyebrow block mb-3">
          Company (optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formState.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-surface border border-border focus:outline-none focus:border-accent"
          style={{ borderRadius: 'var(--radius-interactive)' }}
        />
      </div>

      {/* The Space */}
      <div>
        <label htmlFor="space" className="eyebrow block mb-3">
          Describe the Space
        </label>
        <textarea
          id="space"
          name="space"
          required
          rows={4}
          value={formState.space}
          onChange={handleChange}
          placeholder="What room or property are you furnishing? What's the function? What's the existing style or constraint?"
          className="w-full px-4 py-3 bg-surface border border-border focus:outline-none focus:border-accent resize-none"
          style={{ borderRadius: 'var(--radius-interactive)' }}
        />
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="eyebrow block mb-3">
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          required
          value={formState.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-surface border border-border focus:outline-none focus:border-accent"
          style={{ borderRadius: 'var(--radius-interactive)' }}
        >
          <option value="">Select range</option>
          <option value="5k-15k">$5,000 – $15,000</option>
          <option value="15k-50k">$15,000 – $50,000</option>
          <option value="50k-150k">$50,000 – $150,000</option>
          <option value="150k-500k">$150,000 – $500,000</option>
          <option value="500k+">$500,000+</option>
        </select>
      </div>

      {/* Timeline */}
      <div>
        <label htmlFor="timeline" className="eyebrow block mb-3">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          required
          value={formState.timeline}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-surface border border-border focus:outline-none focus:border-accent"
          style={{ borderRadius: 'var(--radius-interactive)' }}
        >
          <option value="">Select timeline</option>
          <option value="exploring">Exploring (no deadline)</option>
          <option value="1-3mo">1–3 months</option>
          <option value="3-6mo">3–6 months</option>
          <option value="6-12mo">6–12 months</option>
          <option value="12mo+">12+ months</option>
        </select>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="eyebrow block mb-3">
          Additional Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formState.notes}
          onChange={handleChange}
          placeholder="Anything else we should know? Specific pieces, constraints, must-haves?"
          className="w-full px-4 py-3 bg-surface border border-border focus:outline-none focus:border-accent resize-none"
          style={{ borderRadius: 'var(--radius-interactive)' }}
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="px-10 py-4 bg-ink text-background font-medium hover:opacity-90 transition-opacity"
          style={{ borderRadius: 'var(--radius-interactive)' }}
        >
          Submit Brief
        </button>
        <p className="mt-4 text-sm" style={{ color: 'var(--stone)' }}>
          A costed plan comes back within 48 hours. No obligation.
        </p>
      </div>
    </form>
  );
}
