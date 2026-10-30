import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/lib/categories";

export function CategoryShowcase() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Categories"
          title="Finishing Touches That Transform a Space"
          description="Move from a screenshot on Instagram to a clearer way of browsing wallpapers and decorative finishes."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {categories.map((category, index) => {
            const wide = index === 0 || index === 5;
            return (
              <Link
                key={category.id}
                href={category.href}
                className={`group relative min-h-[280px] overflow-hidden ${
                  wide ? "md:col-span-3" : "md:col-span-2"
                }`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/15 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-6 text-paper">
                  <span className="block font-serif text-3xl">{category.name}</span>
                  <span className="mt-2 block max-w-xs text-sm leading-6 text-paper/80">
                    {category.tagline}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
