"use client";

import Image from "next/image";
import Link from "next/link";
import { useEnquiry } from "@/components/enquiry/enquiry-provider";
import { WhatsAppIcon } from "@/components/icons";
import { getProduct } from "@/lib/products";
import { enquiryListMessage, whatsappUrl } from "@/lib/whatsapp";

export function EnquiryList() {
  const { items, ready, removeItem, updateItem, clear } = useEnquiry();

  if (!ready) {
    return <div className="mt-10 h-40 bg-ivory" />;
  }

  const lines = items
    .map((item) => {
      const product = getProduct(item.slug);
      return product ? { product, item } : null;
    })
    .filter((line): line is NonNullable<typeof line> => Boolean(line));

  if (lines.length === 0) {
    return (
      <div className="mt-10 border border-ink/10 bg-ivory px-6 py-16 text-center">
        <p className="font-serif text-3xl">Your list is empty</p>
        <p className="mt-3 text-taupe">Save products from the collection to build a shortlist.</p>
        <Link href="/shop" className="btn btn-primary mt-6">
          Browse the collection
        </Link>
      </div>
    );
  }

  const href = whatsappUrl(enquiryListMessage(lines));

  return (
    <div className="mt-10">
      <ul className="space-y-6">
        {lines.map(({ product, item }) => (
          <li key={product.slug} className="grid gap-4 border-b border-ink/10 pb-6 sm:grid-cols-[7rem_1fr] sm:gap-6">
            <Link href={`/products/${product.slug}`} className="relative aspect-[4/5] sm:aspect-auto sm:h-28">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="112px" />
            </Link>
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </h2>
                  <p className="mt-1 text-sm text-taupe">Price on enquiry</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(product.slug)}
                  className="text-xs tracking-[0.14em] text-taupe uppercase hover:text-ink"
                >
                  Remove
                </button>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <label className="text-sm">
                  Quantity
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(event) =>
                      updateItem(product.slug, {
                        quantity: Math.max(1, Number(event.target.value) || 1),
                      })
                    }
                    className="mt-1 w-full border border-ink/15 bg-paper px-3 py-2"
                  />
                </label>
                <label className="text-sm">
                  Note
                  <input
                    type="text"
                    value={item.note ?? ""}
                    onChange={(event) => updateItem(product.slug, { note: event.target.value })}
                    placeholder="Room, colour, or size"
                    className="mt-1 w-full border border-ink/15 bg-paper px-3 py-2"
                  />
                </label>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary">
          <WhatsAppIcon className="h-4 w-4" />
          Enquire about saved products
        </a>
        <button type="button" onClick={clear} className="btn btn-secondary">
          Clear list
        </button>
      </div>
    </div>
  );
}
