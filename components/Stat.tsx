interface StatProps {
  value: string
  label: string
  description?: string
}

export default function Stat({ value, label, description }: StatProps) {
  return (
    <div className="text-center">
      <div className="mb-2 text-4xl font-bold text-gradient md:text-5xl">
        {value}
      </div>
      <div className="mb-1 text-lg font-semibold text-eclipseNavy">
        {label}
      </div>
      {description && (
        <p className="text-sm text-lunarBlue">{description}</p>
      )}
    </div>
  )
}
