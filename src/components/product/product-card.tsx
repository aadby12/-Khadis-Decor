import Image from "next/image";
import Link from "next/link";
import { getCategory } from "@/lib/categories";
import type { Product } from "@/lib/types";
import { SaveButton } from "@/components/product/save-button";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);

  return (
    <article className="group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="image-zoom relative aspect-[4/5] bg-ivory-deep">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          {product.listingKind === "sample" ? (
            <span className="absolute top-3 left-3 bg-paper/90 px-2.5 py-1 text-[0.62rem] tracking-[0.16em] text-ink uppercase">
              Sample look
            </span>
          ) : null}
        </div>
      </Link>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <p className="text-[0.68rem] tracking-[0.16em] text-taupe uppercase">{category?.name}</p>
          <h3 className="mt-1 font-serif text-[1.35rem] leading-tight">
            <Link href={`/products/${product.slug}`} className="hover:text-bronze">
              {product.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-taupe">Price on enquiry</p>
        </div>
        <SaveButton slug={product.slug} />
      </div>
      <Link
        href={`/products/${product.slug}`}
        className="mt-4 inline-flex text-[0.72rem] tracking-[0.16em] uppercase hover:text-bronze"
      >
        Enquire about this product
      </Link>
    </article>
  );
}
