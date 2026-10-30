import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/lib/types";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="border border-ink/10 bg-ivory px-6 py-16 text-center text-taupe">
        No products match these filters. Reset and browse the full sample collection.
      </p>
    );
  }

  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
