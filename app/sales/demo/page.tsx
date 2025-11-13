export default function DemoHub() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-semibold text-moonWhite">Demo Hub</h1>
      <p className="mb-8 text-lunarBlue/80">
        Launch demos, watch short videos, download one-pagers.
      </p>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
          <h3 className="mb-2 text-lg font-medium text-peacockTeal">Live Demo</h3>
          <p className="text-sm text-lunarBlue/70">
            Interactive product walkthrough (placeholder)
          </p>
        </div>

        <div className="rounded border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
          <h3 className="mb-2 text-lg font-medium text-peacockTeal">Workflow Videos</h3>
          <p className="text-sm text-lunarBlue/70">
            Short clips showing real-world usage
          </p>
        </div>

        <div className="rounded border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
          <h3 className="mb-2 text-lg font-medium text-peacockTeal">PDF One-Pagers</h3>
          <p className="text-sm text-lunarBlue/70">
            <a href="/downloads/one-pagers/eclipselink.pdf" className="underline hover:text-peacockTeal">
              EclipseLink AI
            </a>
            {' · '}
            <a href="/downloads/one-pagers/honors.pdf" className="underline hover:text-peacockTeal">
              Honors
            </a>
          </p>
        </div>

        <div className="rounded border border-lunarBlue/30 bg-eclipseNavy/30 p-6">
          <h3 className="mb-2 text-lg font-medium text-peacockTeal">FAQ</h3>
          <p className="text-sm text-lunarBlue/70">
            Common questions from prospects
          </p>
        </div>
      </div>
    </main>
  );
}
