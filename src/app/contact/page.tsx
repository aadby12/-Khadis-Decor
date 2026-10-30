import type { Metadata } from "next";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { business, primaryPhone } from "@/lib/business";
import { generalWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Khadis Decor in Dome Pillar 2, K Boat, Accra, or send a WhatsApp enquiry about wallpapers and interior finishes.",
};

export default function ContactPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 font-serif text-5xl leading-tight">Speak with the showroom.</h1>
          <p className="mt-5 text-lg leading-8 text-taupe">
            The most reliable way to confirm current designs, sizes, and prices is WhatsApp or a
            visit. Numbers below were posted as Call/WhatsApp contacts on the official Instagram
            account.
          </p>
          <div className="mt-10 space-y-8">
            <div>
              <p className="eyebrow">Showroom</p>
              <p className="mt-2 text-lg">{business.name}</p>
              <p className="mt-1 leading-7 text-taupe">{business.location.display}</p>
              <p className="mt-2 text-sm text-taupe">
                Public listings also record {business.location.listedAddress}. The map uses the
                public listing for {business.tradingName}.
              </p>
            </div>
            <div>
              <p className="eyebrow">Call / WhatsApp</p>
              <div className="mt-2 space-y-1">
                {business.phones.map((phone) => (
                  <a key={phone.id} href={`tel:${phone.tel}`} className="block text-lg hover:text-bronze">
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Instagram</p>
              <a
                href={business.instagramUrl}
                className="mt-2 inline-flex items-center gap-2 text-lg hover:text-bronze"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="h-4 w-4" />
                @{business.instagramHandle}
              </a>
            </div>
          </div>
          <a href={generalWhatsAppHref} className="btn btn-primary mt-10">
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp {primaryPhone.display}
          </a>
        </div>
        <div className="min-h-[420px] bg-ivory lg:col-span-7">
          <iframe
            title="Google Map listing for Khadis Decor in Dome, Accra"
            src={business.location.embedUrl}
            className="h-full min-h-[420px] w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
