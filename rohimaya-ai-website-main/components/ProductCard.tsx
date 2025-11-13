import Link from 'next/link';
import type { Product } from '@/lib/products';
import ComingSoonBadge from './ComingSoonBadge';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group rounded-lg border border-lunarBlue/30 bg-eclipseNavy/30 p-6 transition hover:border-peacockTeal/50 hover:shadow-lg"
    >
      <div className="mb-2 flex items-start justify-between">
        <h3 className="text-xl font-medium text-moonWhite group-hover:text-peacockTeal">
          {product.name}
        </h3>
        {product.status === 'coming_soon' && <ComingSoonBadge />}
      </div>
      <p className="text-sm font-medium text-peacockTeal/90">{product.shortTagline}</p>
      <p className="mt-2 text-sm text-lunarBlue/70">{product.primaryUseCase}</p>
    </Link>
  );
}
