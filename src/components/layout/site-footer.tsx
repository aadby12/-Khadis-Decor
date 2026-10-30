import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { InstagramIcon } from "@/components/icons";
import { business, primaryPhone } from "@/lib/business";
import { categories } from "@/lib/categories";
import { generalWhatsAppHref } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-charcoal text-paper">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo inverted />
          <p className="mt-6 max-w-sm text-sm leading-7 text-paper/70">
            Wallpapers and interior decorative finishes from a showroom in Dome, Accra. Explore the
            collection, save the looks you like, and enquire on WhatsApp.
          </p>
          <a
            href={business.instagramUrl}
            className="mt-6 inline-flex items-center gap-2 text-sm text-paper/80 hover:text-champagne"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="h-4 w-4" />
            @{business.instagramHandle}
          </a>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-paper/55">Collection</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={category.href} className="hover:text-champagne">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-paper/55">Visit & enquire</p>
          <p className="mt-4 text-sm leading-7 text-paper/80">{business.location.display}</p>
          <p className="mt-2 text-xs leading-6 text-paper/50">
            Public listings also record {business.location.listedAddress}.
          </p>
          <div className="mt-5 space-y-1 text-sm">
            {business.phones.map((phone) => (
              <a key={phone.id} href={`tel:${phone.tel}`} className="block hover:text-champagne">
                {phone.display}
              </a>
            ))}
          </div>
          <a href={generalWhatsAppHref} className="btn btn-secondary mt-6 border-paper/25 text-paper">
            WhatsApp {primaryPhone.display}
          </a>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-wide flex flex-col gap-3 py-5 text-xs tracking-[0.08em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {business.name} · Sample catalogue for this website demo · Prices confirmed on enquiry
          </p>
          <p className="sm:text-right">Powered by Avenor Tech</p>
        </div>
      </div>
    </footer>
  );
}
