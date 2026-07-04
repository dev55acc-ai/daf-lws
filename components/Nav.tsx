"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/designers", label: "Designers" },
    { href: "/developers", label: "Developers" },
    { href: "/decorators", label: "Decorators" },
  ];

  return (
    <nav className="px-4 sm:px-6 md:px-12 py-4 md:py-6 border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="eyebrow hover:opacity-70 transition-opacity duration-200 text-xs sm:text-sm flex-shrink-0">
          David Andrew Furniture
        </Link>

        <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-all duration-200 hover:opacity-100"
                style={{
                  color: pathname === link.href ? 'var(--ink)' : 'var(--stone)',
                  opacity: pathname === link.href ? 1 : 0.7,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/procurement"
            className="px-4 sm:px-6 py-2 bg-ink text-background text-xs sm:text-sm font-medium hover:opacity-90 transition-all duration-200"
            style={{ borderRadius: 'var(--radius-interactive)' }}
          >
            Submit Brief
          </Link>
        </div>
      </div>
    </nav>
  );
}
