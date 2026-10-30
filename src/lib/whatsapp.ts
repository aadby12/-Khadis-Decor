import { business, primaryPhone } from "@/lib/business";
import type { EnquiryItem, Product } from "@/lib/types";

function encodeMessage(message: string) {
  return encodeURIComponent(message);
}

export function whatsappUrl(message: string, phone = primaryPhone.whatsapp) {
  return `https://wa.me/${phone}?text=${encodeMessage(message)}`;
}

export function generalEnquiryMessage() {
  return `Hello ${business.name}! I would like to enquire about wallpapers and interior finishes. Please let me know how best to share the look I have in mind. Thank you.`;
}

export function productEnquiryMessage(
  product: Product,
  options?: { quantity?: number; variant?: string },
) {
  const quantity = options?.quantity ?? 1;
  const variant = options?.variant ?? "To be confirmed";

  return `Hello ${business.name}! I'm interested in this product:

Product: ${product.name}
Reference: ${product.slug}
Size/Variant: ${variant}
Quantity: ${quantity}

Please confirm the current price, availability, and any relevant product details. Thank you.`;
}

export function enquiryListMessage(
  lines: Array<{ product: Product; item: EnquiryItem }>,
) {
  const productBlock = lines
    .map(({ product, item }, index) => {
      const variant = item.variant ? `\nVariant: ${item.variant}` : "";
      const note = item.note ? `\nNote: ${item.note}` : "";
      return `${index + 1}. ${product.name}
Quantity: ${item.quantity}${variant}${note}`;
    })
    .join("\n\n");

  return `Hello ${business.name}! I would like to enquire about the following products from my enquiry list:

${productBlock}

Please confirm the current prices, availability, and any relevant product details. Thank you.`;
}

export const generalWhatsAppHref = whatsappUrl(generalEnquiryMessage());
