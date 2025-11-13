import { PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Products - Rohimaya Health AI',
  description: 'AI-powered solutions for healthcare teams',
};

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader
        eyebrow="Our Solutions"
        title="Products"
      />
      <p className="mb-12 text-lg text-lunarBlue/80">
        AI-powered solutions designed to give time back to healthcare teams.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  );
}
