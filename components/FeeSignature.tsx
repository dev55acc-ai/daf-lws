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
      {
        threshold: 0.35,
        rootMargin: '-10% 0px'
      }
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
      style={{
        background: `linear-gradient(180deg, var(--background) 0%, var(--surface) 100%)`
      }}
    >
      <div className="text-center max-w-[900px]">
        <div
          className="eyebrow mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 600ms ease-out 200ms, transform 600ms ease-out 200ms'
          }}
        >
          The Whole Price
        </div>

        <div className="relative inline-block mb-16">
          <h1
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontSize: 'clamp(72px, 14vw, 200px)',
              transition: 'opacity 1600ms cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: isVisible ? 1 : 0.2,
              fontVariantNumeric: 'oldstyle-nums'
            }}
          >
            20%
          </h1>

          {/* The signature line animation — THE signature moment */}
          <div
            style={{
              position: 'absolute',
              bottom: '8%',
              left: '50%',
              transform: isVisible
                ? 'translateX(-50%) scaleX(1)'
                : 'translateX(-50%) scaleX(0)',
              height: '3px',
              width: '130%',
              backgroundColor: 'var(--accent)',
              transformOrigin: 'center',
              transition: 'transform 1600ms cubic-bezier(0.16, 1, 0.3, 1) 400ms',
              boxShadow: isVisible ? '0 0 20px var(--accent)' : 'none',
            }}
          />
        </div>

        <div
          className="max-w-[700px] mx-auto space-y-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 800ms ease-out 1200ms, transform 800ms ease-out 1200ms'
          }}
        >
          <p className="text-lg md:text-xl leading-relaxed">
            20% of $10,000 is $2,000. 20% of $500,000 is $100,000. Same rate. Same disclosure. No money left on the table.
          </p>
          <p className="leading-relaxed">
            Retail bakes 5–8% damage reserve plus hidden customs and freight into every price. We show it. The $4,000 showroom sofa costs about $600 to build. The rest is showroom, markup, and a brand you're renting.
          </p>
        </div>
      </div>
    </section>
  );
}
