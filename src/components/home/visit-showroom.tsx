import { business, primaryPhone } from "@/lib/business";
import { generalWhatsAppHref } from "@/lib/whatsapp";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons";

export function VisitShowroom() {
  return (
    <section className="bg-ink text-paper">
      <div className="container-wide grid lg:grid-cols-2">
        <div className="py-16 pr-0 lg:py-20 lg:pr-12">
          <p className="eyebrow text-champagne">Visit</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Come in, or send the look on WhatsApp.
          </h2>
          <p className="mt-5 max-w-md text-paper/70 leading-8">
            Instagram remains the live catalogue. This website organises those product types so you
            can gather a shortlist and ask a clearer question.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow text-paper/50">Showroom</dt>
              <dd className="mt-2 text-lg">{business.location.display}</dd>
              <dd className="mt-1 text-sm text-paper/50">
                Public listings also record {business.location.listedAddress}.
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-paper/50">Call / WhatsApp</dt>
              <dd className="mt-2 space-y-1">
                {business.phones.map((phone) => (
                  <a key={phone.id} href={`tel:${phone.tel}`} className="block text-lg hover:text-champagne">
                    {phone.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-paper/50">Instagram</dt>
              <dd className="mt-2">
                <a
                  href={business.instagramUrl}
                  className="inline-flex items-center gap-2 hover:text-champagne"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @{business.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>
          <a href={generalWhatsAppHref} className="btn btn-secondary mt-8 border-paper/30 text-paper">
            <WhatsAppIcon className="h-4 w-4" />
            Message {primaryPhone.display}
          </a>
        </div>
        <div className="min-h-[360px] bg-charcoal">
          <iframe
            title="Map showing the public listing for Khadis Decor in Dome, Accra"
            src={business.location.embedUrl}
            className="h-full min-h-[360px] w-full grayscale contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
