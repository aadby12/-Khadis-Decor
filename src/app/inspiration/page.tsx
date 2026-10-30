import Image from "next/image";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { inspirationStories } from "@/lib/inspiration";

export const metadata: Metadata = {
  title: "Inspiration",
  description:
    "Editorial interior photography showing how wallpapers, marble-effect sheets, panels, and mouldings can change a room.",
};

export default function InspirationPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Inspiration"
          title="Imagine What's Possible"
          description="A journal of room atmospheres — feature walls, marble-effect planes, bedroom papers, and architectural details. The photography is editorial and is not presented as completed Khadis Decor installations."
        />
        <div className="mt-14 space-y-16">
          {inspirationStories.map((story, index) => (
            <article
              key={story.slug}
              className="grid items-center gap-8 lg:grid-cols-12"
            >
              <div className={`relative min-h-[360px] lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <p className="eyebrow">{story.kicker}</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight">{story.title}</h2>
                <p className="mt-4 text-lg leading-8 text-taupe">{story.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
