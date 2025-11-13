import Link from 'next/link'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-peacockTeal text-white hover:bg-opacity-90 focus:ring-peacockTeal',
    secondary:
      'bg-phoenixGold text-eclipseNavy hover:bg-opacity-90 focus:ring-phoenixGold',
    outline:
      'border-2 border-peacockTeal text-peacockTeal hover:bg-peacockTeal hover:text-white focus:ring-peacockTeal',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClassName = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  )
}
