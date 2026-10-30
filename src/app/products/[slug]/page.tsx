import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EnquireActions } from "@/components/product/enquire-actions";
import { ProductGrid } from "@/components/product/product-grid";
import { getCategory } from "@/lib/categories";
import { getProduct, getRelatedProducts, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="py-10 sm:py-16">
      <div className="container-wide">
        <p className="text-sm text-taupe">
          <Link href="/shop" className="hover:text-ink">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link href={category?.href ?? "/shop"} className="hover:text-ink">
            {category?.name}
          </Link>
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="grid gap-4">
            {product.gallery.map((image, index) => (
              <div key={image} className={`relative ${index === 0 ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">{category?.name}</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">{product.name}</h1>
            <p className="mt-4 text-lg text-taupe">Price on enquiry</p>
            {product.listingKind === "sample" ? (
              <p className="mt-4 border-l border-bronze pl-4 text-sm leading-6 text-taupe">
                Sample catalogue look. Use it as a visual reference when asking the showroom to
                match current stock.
              </p>
            ) : (
              <p className="mt-4 border-l border-bronze pl-4 text-sm leading-6 text-taupe">
                Product type presented by Khadis Decor on Instagram. Confirm the current design,
                size, and availability before ordering.
              </p>
            )}
            <p className="mt-6 leading-8 text-charcoal">{product.description}</p>
            <dl className="mt-8 space-y-4 border-y border-ink/10 py-6 text-sm">
              <div className="flex justify-between gap-6">
                <dt className="text-taupe">Category</dt>
                <dd>{category?.name}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-taupe">Dimensions</dt>
                <dd className="text-right">
                  {product.dimensions ?? "Confirm current sizes with the showroom"}
                </dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-taupe">Availability</dt>
                <dd>Confirmed on enquiry</dd>
              </div>
            </dl>
            {product.usage ? (
              <p className="mt-6 text-sm leading-7 text-taupe">{product.usage}</p>
            ) : (
              <p className="mt-6 text-sm leading-7 text-taupe">
                Need help estimating quantity? Send the room type and wall measurements with your
                enquiry rather than relying on an incomplete calculator.
              </p>
            )}
            <div className="mt-8">
              <EnquireActions product={product} />
            </div>
          </div>
        </div>
        {related.length ? (
          <div className="mt-20">
            <h2 className="font-serif text-3xl">Related finishes</h2>
            <div className="mt-8">
              <ProductGrid products={related} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
