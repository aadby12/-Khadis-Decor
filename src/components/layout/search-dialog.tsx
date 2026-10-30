"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { getCategory, searchProducts } from "@/lib/products";

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 40);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, open]);

  const results = useMemo(() => searchProducts(query).slice(0, 6), [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Close search"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-16 w-[min(680px,calc(100%-1.5rem))] border border-ink/10 bg-paper p-5 shadow-2xl sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">Search the collection</p>
          <button type="button" onClick={onClose} className="p-1 text-ink" aria-label="Close search">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <form
          className="mt-4 flex items-center gap-3 border-b border-ink/15 pb-3"
          onSubmit={(event) => {
            event.preventDefault();
            const next = query.trim();
            onClose();
            router.push(next ? `/shop?q=${encodeURIComponent(next)}` : "/shop");
          }}
        >
          <SearchIcon className="h-5 w-5 text-taupe" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Wallpaper, marble sheet, fluted panel..."
            className="w-full bg-transparent text-lg outline-none placeholder:text-taupe/70"
          />
        </form>
        <ul className="mt-4 space-y-1">
          {results.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="flex items-center justify-between gap-4 px-2 py-3 text-sm hover:bg-ivory"
              >
                <span>{product.name}</span>
                <span className="text-xs tracking-[0.14em] text-taupe uppercase">
                  {getCategory(product.category)?.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
