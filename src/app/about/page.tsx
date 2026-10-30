import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "About",
  description:
    "Khadis Decor has supplied wallpapers and interior decorative finishes from Dome, Accra since 2015.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative min-h-[48vh]">
        <Image
          src="/images/living-modern.jpg"
          alt="A contemporary living interior used as editorial atmosphere for the about page."
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="container-wide relative flex min-h-[48vh] items-end py-16">
          <div className="max-w-2xl text-paper">
            <p className="eyebrow text-champagne">Established {business.established}</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
              Wallpapers and finishing details, presented with more care.
            </h1>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-8 text-charcoal">
              {business.name} — also known as {business.tradingName}, and presented on Instagram as{" "}
              {business.instagramDisplayName} — supplies wallpapers and interior decorative finishes
              from {business.location.display}.
            </p>
            <p className="mt-5 text-lg leading-8 text-taupe">
              The Instagram profile states that the business has been working since{" "}
              {business.established}, describing its work in terms of transforming interior spaces.{" "}
              {business.claims.spacesTransformed}
            </p>
            <p className="mt-5 text-lg leading-8 text-taupe">
              This website is a digital showroom: a clearer way to browse the kinds of products
              already presented through Instagram, then send a WhatsApp enquiry with a shortlist.
              It is not a live inventory or a checkout.
            </p>
          </div>
          <aside className="border border-ink/10 bg-ivory p-8 lg:col-span-5">
            <p className="eyebrow">How to use the collection</p>
            <ol className="mt-5 space-y-4 text-sm leading-7 text-charcoal">
              <li>1. Browse wallpapers and decorative finishes by category or by look.</li>
              <li>2. Save the products you want to ask about.</li>
              <li>3. Add quantities or notes if you already know the room.</li>
              <li>4. Send the list on WhatsApp so current prices and availability can be confirmed.</li>
            </ol>
            <Link href="/shop" className="btn btn-primary mt-8">
              Explore the collection
            </Link>
          </aside>
        </div>
      </section>
      <section className="bg-ivory py-20">
        <div className="container-wide">
          <h2 className="font-serif text-4xl">What you will find</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="border border-ink/10 bg-paper p-6 hover:border-ink"
              >
                <h3 className="font-serif text-2xl">{category.name}</h3>
                <p className="mt-3 text-sm leading-6 text-taupe">{category.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
