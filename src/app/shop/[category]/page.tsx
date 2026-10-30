import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import type { CategoryId } from "@/lib/types";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: id } = await params;
  const category = categories.find((item) => item.id === id);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: id } = await params;
  const category = categories.find((item) => item.id === id);
  if (!category) notFound();

  const products = getProductsByCategory(id as CategoryId);

  return (
    <div className="py-14 sm:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Collection"
          title={category.name}
          description={category.description}
        />
        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
