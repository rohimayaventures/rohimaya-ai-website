import Hero from '@/components/Hero'
import Stat from '@/components/Stat'
import Button from '@/components/Button'

export default function HomePage() {
  return (
    <>
      <Hero
        title="Clinical Handoffs, Reimagined"
        subtitle="EclipseLink AI + Phoenix & Peacock Honors™"
        ctaPrimary={{
          text: 'Explore EclipseLink AI',
          href: '/products/eclipselink',
        }}
        ctaSecondary={{
          text: 'Learn About Honors',
          href: '/products/honors',
        }}
      />

      {/* Stats Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="heading-lg mb-12 text-center text-eclipseNavy">
              Transforming Healthcare Communication
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Stat
                value="30s"
                label="SBAR Generation"
                description="Complete handoff reports in seconds"
              />
              <Stat
                value="6–12h"
                label="Early Alerts"
                description="Predictive patient deterioration warnings"
              />
              <Stat
                value="↑"
                label="Staff Satisfaction"
                description="Recognition-driven engagement"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section bg-gradient-to-br from-peacockTeal/5 to-phoenixGold/5">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="heading-lg mb-6 text-eclipseNavy">
              Two Powerful Solutions, One Mission
            </h2>
            <p className="mb-8 text-lg text-lunarBlue">
              EclipseLink AI streamlines clinical handoffs with voice-powered
              SBAR generation and predictive analytics. Phoenix & Peacock
              Honors™ recognizes excellence and drives engagement through
              gamified recognition.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/products/eclipselink" variant="primary">
                See EclipseLink in Action
              </Button>
              <Button href="/products/honors" variant="secondary">
                Explore Honors Program
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
