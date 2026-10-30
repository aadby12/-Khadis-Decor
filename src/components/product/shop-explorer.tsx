"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { categories, decorativeFinishIds } from "@/lib/categories";
import { filterProducts, searchProducts } from "@/lib/products";
import type { CategoryId } from "@/lib/types";

export function ShopExplorer() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const group = searchParams.get("group");
  const categoryParam = searchParams.get("category") as CategoryId | null;

  const products = useMemo(() => {
    if (query) return searchProducts(query);
    if (group === "finishes") {
      return filterProducts({}).filter((product) =>
        decorativeFinishIds.includes(product.category),
      );
    }
    if (categoryParam) return filterProducts({ category: categoryParam });
    return filterProducts({});
  }, [categoryParam, group, query]);

  return (
    <div className="mt-12">
      <div className="mb-8 flex flex-wrap gap-2">
        <FilterChip href="/shop" active={!query && !group && !categoryParam} label="All" />
        {categories.map((category) => (
          <FilterChip
            key={category.id}
            href={category.href}
            active={categoryParam === category.id}
            label={category.name}
          />
        ))}
        <FilterChip
          href="/shop?group=finishes"
          active={group === "finishes"}
          label="Decorative finishes"
        />
      </div>
      {query ? (
        <p className="mb-8 text-sm text-taupe">
          Showing sample results for “{query}”.
        </p>
      ) : null}
      <ProductGrid products={products} />
    </div>
  );
}

function FilterChip({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`border px-3 py-2 text-[0.76rem] tracking-[0.04em] ${
        active ? "border-ink bg-ink text-paper" : "border-ink/15 hover:border-ink"
      }`}
    >
      {label}
    </Link>
  );
}
