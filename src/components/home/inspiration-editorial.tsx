import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { inspirationStories } from "@/lib/inspiration";

export function InspirationEditorial() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Inspiration"
            title="Imagine What's Possible"
            description="Editorial photography of finished interiors, used here as visual direction. These are not documented Khadis Decor installations."
          />
          <Link href="/inspiration" className="btn btn-ghost">
            View the journal
          </Link>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-12">
          {inspirationStories.map((story, index) => {
            const span =
              index === 0
                ? "md:col-span-7 md:row-span-2 min-h-[420px]"
                : index === 3
                  ? "md:col-span-8 min-h-[280px]"
                  : "md:col-span-5 min-h-[280px]";
            return (
              <article key={story.slug} className={`relative overflow-hidden ${span}`}>
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-paper sm:p-8">
                  <p className="eyebrow text-champagne">{story.kicker}</p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{story.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-paper/80">{story.caption}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
