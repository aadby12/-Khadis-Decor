import { WhatsAppIcon } from "@/components/icons";
import { primaryPhone } from "@/lib/business";
import { generalWhatsAppHref } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={generalWhatsAppHref}
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 bg-ink px-4 py-3 text-[0.68rem] tracking-[0.14em] text-paper uppercase shadow-lg transition hover:bg-charcoal sm:right-6 sm:bottom-6"
      aria-label={`WhatsApp ${primaryPhone.display}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      <span className="hidden sm:inline">Enquire</span>
    </a>
  );
}
