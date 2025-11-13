import { ReactNode } from 'react'

interface Feature {
  icon?: ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export default function FeatureGrid({
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid gap-8 ${gridCols[columns]}`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          {feature.icon && (
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-peacockTeal/10 text-peacockTeal">
              {feature.icon}
            </div>
          )}
          <h3 className="mb-2 text-lg font-semibold text-eclipseNavy">
            {feature.title}
          </h3>
          <p className="text-sm text-lunarBlue">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
