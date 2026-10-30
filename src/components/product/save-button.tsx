"use client";

import { BookmarkIcon } from "@/components/icons";
import { useEnquiry } from "@/components/enquiry/enquiry-provider";

export function SaveButton({ slug }: { slug: string }) {
  const { addItem, hasItem, ready } = useEnquiry();
  const saved = ready && hasItem(slug);

  return (
    <button
      type="button"
      onClick={() => addItem({ slug, quantity: 1 })}
      className={`grid h-10 w-10 shrink-0 place-items-center border transition-colors ${
        saved ? "border-ink bg-ink text-paper" : "border-ink/15 text-ink hover:border-ink"
      }`}
      aria-label={saved ? "Saved to enquiry list" : "Save to enquiry list"}
    >
      <BookmarkIcon className="h-4 w-4" />
    </button>
  );
}
