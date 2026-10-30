"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/lib/categories";
import { filterProducts, finishes, rooms } from "@/lib/products";
import type { CategoryId, FinishId, RoomId } from "@/lib/types";

type FindYourLookProps = {
  compact?: boolean;
};

export function FindYourLook({ compact = false }: FindYourLookProps) {
  const [room, setRoom] = useState<RoomId | "all">("all");
  const [finish, setFinish] = useState<FinishId | "all">("all");
  const [category, setCategory] = useState<CategoryId | "all">("all");

  const results = useMemo(
    () => filterProducts({ room, finish, category }),
    [category, finish, room],
  );

  const visible = compact ? results.slice(0, 6) : results;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Find your look"
          title="Find the Look You're Imagining"
          description="This is a demo filter over a sample catalogue. Use it to gather looks, then enquire so the showroom can match current stock."
        />
        <div className="mt-10 grid gap-4 border border-ink/10 bg-ivory p-5 md:grid-cols-3">
          <FilterGroup
            label="By room"
            value={room}
            onChange={setRoom}
            options={[{ id: "all", label: "All rooms" }, ...rooms]}
          />
          <FilterGroup
            label="By finish"
            value={finish}
            onChange={setFinish}
            options={[{ id: "all", label: "All finishes" }, ...finishes]}
          />
          <FilterGroup
            label="By category"
            value={category}
            onChange={setCategory}
            options={[
              { id: "all", label: "All categories" },
              ...categories.map((item) => ({ id: item.id, label: item.name })),
            ]}
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-taupe">
          <p>
            {results.length} look{results.length === 1 ? "" : "s"} in this sample set
          </p>
          <button
            type="button"
            className="tracking-[0.12em] uppercase hover:text-ink"
            onClick={() => {
              setRoom("all");
              setFinish("all");
              setCategory("all");
            }}
          >
            Reset filters
          </button>
        </div>
        <div className="mt-10">
          <ProductGrid products={visible} />
        </div>
        {compact ? (
          <div className="mt-10 text-center">
            <Link href="/find-your-look" className="btn btn-secondary">
              Open the full look finder
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function FilterGroup<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: { id: T; label: string }[];
}) {
  return (
    <fieldset>
      <legend className="eyebrow">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`border px-3 py-2 text-[0.78rem] transition-colors ${
                selected
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-paper text-ink hover:border-ink"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
