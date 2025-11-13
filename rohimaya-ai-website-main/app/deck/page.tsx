export const metadata = {
  title: 'Pitch Deck - Rohimaya Health AI',
  description: 'Investor and partner presentation materials',
}

export default function DeckPage() {
  const deckItems = [
    {
      title: 'Company Overview',
      description: 'Mission, vision, and market opportunity',
      type: 'PDF',
      href: '/deck/overview.pdf',
    },
    {
      title: 'EclipseLink AI Technical Deep Dive',
      description: 'Architecture, AI models, and integration details',
      type: 'PDF',
      href: '/deck/eclipselink-technical.pdf',
    },
    {
      title: 'Phoenix & Peacock Honors™ Implementation',
      description: 'Gamification framework and ROI analysis',
      type: 'PDF',
      href: '/deck/honors-implementation.pdf',
    },
    {
      title: 'Market Analysis & Competition',
      description: 'Industry landscape and differentiation',
      type: 'PDF',
      href: '/deck/market-analysis.pdf',
    },
    {
      title: 'Financial Projections',
      description: 'Revenue model and growth forecasts',
      type: 'PDF',
      href: '/deck/financials.pdf',
    },
    {
      title: 'Interactive Demo',
      description: 'Live product walkthrough',
      type: 'HTML',
      href: '/deck/demo.html',
    },
  ]

  return (
    <div className="section">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h1 className="heading-lg mb-4 text-center text-eclipseNavy">
            Pitch Deck & Materials
          </h1>
          <p className="mb-12 text-center text-lg text-lunarBlue">
            Comprehensive resources for investors, partners, and healthcare
            decision-makers
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {deckItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-peacockTeal hover:shadow-md"
              >
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-eclipseNavy group-hover:text-peacockTeal">
                    {item.title}
                  </h3>
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-lunarBlue">
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-lunarBlue">{item.description}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-peacockTeal">
                  View Document
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-gradient-to-br from-peacockTeal/5 to-phoenixGold/5 p-8 text-center">
            <h2 className="heading-sm mb-4 text-eclipseNavy">
              Need Custom Materials?
            </h2>
            <p className="mb-6 text-lunarBlue">
              Request tailored presentations, case studies, or technical
              documentation
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-peacockTeal px-6 py-3 font-medium text-white transition-all hover:bg-opacity-90"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              📄 <strong>Note:</strong> Add your PDF and HTML deck files to the{' '}
              <code className="rounded bg-gray-100 px-2 py-1">/public/deck/</code>{' '}
              directory, then update the links above.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
