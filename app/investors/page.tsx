export default function Investors() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-semibold text-moonWhite">
        Investor Materials
      </h1>
      <p className="mb-8 text-lunarBlue/80">
        Valid token required in URL. Ask founders for access.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="mb-3 text-xl font-medium text-peacockTeal">Decks & Overview</h2>
          <ul className="space-y-2 pl-6 text-lunarBlue/80">
            <li>
              <a
                className="underline hover:text-peacockTeal"
                href="/downloads/decks/rohimaya-overview.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Overview Deck (PDF)
              </a>
            </li>
            <li>
              <a
                className="underline hover:text-peacockTeal"
                href="/downloads/decks/financial-projections.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Financial Projections
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-medium text-peacockTeal">Governance</h2>
          <p className="text-sm text-lunarBlue/70">
            See <a href="/governance" className="underline hover:text-peacockTeal">governance page</a> for
            cap table, board structure, and compliance docs.
          </p>
        </section>
      </div>
    </main>
  );
}
