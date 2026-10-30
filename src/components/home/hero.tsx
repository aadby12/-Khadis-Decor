import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-ivory">
      <div className="container-wide grid items-center gap-8 py-8 lg:grid-cols-12 lg:gap-10 lg:py-12">
        <div className="reveal lg:col-span-5 lg:py-10">
          <p className="eyebrow">Khadis Decor · Wallpapers & Interior Finishes</p>
          <h1 className="mt-5 font-serif text-[3rem] leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
            Give Your Space a Beautiful New Perspective.
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] leading-8 text-taupe">
            Explore wallpapers and decorative finishes that help you bring character, texture, and
            style to your home or workspace.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/shop" className="btn btn-primary">
              Explore our collection
            </Link>
            <Link href="/find-your-look" className="btn btn-secondary">
              Find your style
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-[1.4fr_0.9fr] lg:col-span-7">
          <div className="relative min-h-[420px] sm:min-h-[560px] lg:min-h-[640px]">
            <Image
              src="/images/hero-living.jpg"
              alt="A calm, light-filled living room with a composed feature wall."
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[220px] sm:min-h-0">
              <Image
                src="/images/hero-detail.jpg"
                alt="Warm interior seating against a softly textured wall."
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative hidden min-h-[220px] sm:block">
              <Image
                src="/images/bedroom-soft.jpg"
                alt="A bedroom with a patterned feature wall and natural light."
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="bg-ink p-6 text-paper sm:p-7">
              <p className="eyebrow text-champagne">Dome · Accra</p>
              <p className="mt-3 font-serif text-2xl leading-snug">
                A digital showroom for wallpapers, marble-effect sheets, panels, and finishing
                details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
