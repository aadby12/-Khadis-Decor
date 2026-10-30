"use client";

import { useState } from "react";
import { useEnquiry } from "@/components/enquiry/enquiry-provider";
import { WhatsAppIcon } from "@/components/icons";
import type { Product } from "@/lib/types";
import { productEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";

export function EnquireActions({ product }: { product: Product }) {
  const { addItem, hasItem, ready } = useEnquiry();
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState(product.variants?.[0] ?? "");
  const saved = ready && hasItem(product.slug);
  const href = whatsappUrl(
    productEnquiryMessage(product, {
      quantity,
      variant: variant || undefined,
    }),
  );

  return (
    <div className="space-y-5">
      {product.variants?.length ? (
        <label className="block">
          <span className="eyebrow">Size / variant</span>
          <select
            value={variant}
            onChange={(event) => setVariant(event.target.value)}
            className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3"
          >
            <option value="">To be confirmed</option>
            {product.variants.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      <label className="block max-w-[8rem]">
        <span className="eyebrow">Quantity</span>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(event) => setQuantity(Math.max(1, Number(event.target.value) || 1))}
          className="mt-2 w-full border border-ink/15 bg-paper px-3 py-3"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a href={href} target="_blank" rel="noreferrer" className="btn btn-primary">
          <WhatsAppIcon className="h-4 w-4" />
          Enquire about this product
        </a>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() =>
            addItem({
              slug: product.slug,
              quantity,
              variant: variant || undefined,
            })
          }
        >
          {saved ? "Saved to enquiry list" : "Save to enquiry list"}
        </button>
      </div>
      <p className="text-sm leading-6 text-taupe">
        WhatsApp will open with a drafted message. Review it, then send it yourself. Current prices
        and availability are confirmed by the showroom.
      </p>
    </div>
  );
}
