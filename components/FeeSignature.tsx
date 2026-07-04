"use client";

import { useEffect, useRef, useState } from "react";

export function FeeSignature() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[90vh] flex items-center justify-center px-6 py-32"
    >
      <div className="text-center max-w-[900px]">
        <div className="eyebrow mb-8">The Whole Price</div>

        <div className="relative inline-block">
          <h1
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(64px, 12vw, 180px)',
              transition: 'opacity 1400ms cubic-bezier(0.22, 1, 0.36, 1)',
              opacity: isVisible ? 1 : 0.3
            }}
          >
            20%
          </h1>

          {/* The signature line animation */}
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '2px',
              width: '120%',
              backgroundColor: 'var(--accent)',
              transformOrigin: 'left',
              scaleX: isVisible ? 1 : 0,
              transition: 'transform 1400ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
        </div>

        <div className="mt-12 max-w-[700px] mx-auto space-y-6">
          <p className="text-lg md:text-xl">
            20% of $10,000 is $2,000. 20% of $500,000 is $100,000. Same rate. Same disclosure. No money left on the table.
          </p>
          <p>
            Retail bakes 5–8% damage reserve plus hidden customs and freight into every price. We show it. The $4,000 showroom sofa costs about $600 to build. The rest is showroom, markup, and a brand you're renting.
          </p>
        </div>
      </div>
    </section>
  );
}
