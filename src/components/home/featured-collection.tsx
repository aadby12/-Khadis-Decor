import Link from "next/link";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/lib/products";

export function FeaturedCollection() {
  const featured = [
    "wabi-sabi-wallpaper",
    "fluted-panel",
    "uv-marble-sheet",
    "silver-grid-mirror",
    "polyurethane-moulding",
    "botanical-canopy-wallpaper",
  ]
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));

  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Collection"
            title="Explore the Collection"
            description="Discover finishes and decorative details for your next interior refresh. This is a sample catalogue of product types Khadis Decor presents publicly. Prices are confirmed on enquiry."
          />
          <Link href="/shop" className="btn btn-secondary shrink-0">
            View all
          </Link>
        </div>
        <div className="mt-12">
          <ProductGrid products={featured} />
        </div>
      </div>
    </section>
  );
}
