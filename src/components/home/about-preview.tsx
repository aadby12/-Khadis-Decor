import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/business";

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative min-h-[420px]">
          <Image
            src="/images/architecture.jpg"
            alt="A composed contemporary interior with architectural wall detail."
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-serif text-4xl leading-[1.1] sm:text-5xl">
            A showroom for walls, details, and the finished look.
          </h2>
          <p className="mt-6 text-[1.05rem] leading-8 text-taupe">
            {business.name}, also presented as {business.instagramDisplayName}, has supplied
            wallpapers and interior decorative finishes since {business.established}. The business
            is based in {business.location.area}, {business.location.city}.
          </p>
          <p className="mt-4 text-[1.05rem] leading-8 text-taupe">
            {business.claims.spacesTransformed} Browse the sample collection, save the finishes you
            like, and send an enquiry so current designs and prices can be confirmed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/about" className="btn btn-primary">
              Read about the studio
            </Link>
            <Link href="/shop" className="btn btn-secondary">
              Browse the collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
