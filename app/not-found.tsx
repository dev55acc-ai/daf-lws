import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] px-6 md:px-12 py-32 flex items-center justify-center">
      <div className="max-w-[700px] text-center">
        <div className="eyebrow mb-6">404</div>
        <h1 style={{ fontFamily: 'var(--font-fraunces)' }}>
          Page not found
        </h1>
        <p className="mt-6 text-lg mb-8">
          This page does not exist. The URL may have changed or the page may have been removed.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-ink text-background font-medium hover:opacity-90 transition-opacity"
            style={{ borderRadius: 'var(--radius-interactive)' }}
          >
            Go Home
          </Link>
          <Link
            href="/procurement"
            className="px-8 py-3 border border-border font-medium hover:bg-surface transition-colors"
            style={{ borderRadius: 'var(--radius-interactive)' }}
          >
            Submit a Brief
          </Link>
        </div>
      </div>
    </main>
  );
}
