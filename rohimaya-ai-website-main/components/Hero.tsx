import { ReactNode } from 'react'
import Button from './Button'

interface HeroProps {
  title: string | ReactNode
  subtitle?: string
  ctaPrimary?: { text: string; href: string }
  ctaSecondary?: { text: string; href: string }
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="section bg-gradient-to-br from-moonWhite via-white to-gray-50">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="heading-xl mb-6 text-eclipseNavy">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-8 text-lg text-lunarBlue md:text-xl">
              {subtitle}
            </p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {ctaPrimary && (
                <Button href={ctaPrimary.href} variant="primary" size="lg">
                  {ctaPrimary.text}
                </Button>
              )}
              {ctaSecondary && (
                <Button href={ctaSecondary.href} variant="outline" size="lg">
                  {ctaSecondary.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
