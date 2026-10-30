import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { EnquiryProvider } from "@/components/enquiry/enquiry-provider";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { business } from "@/lib/business";
import "./globals.css";

const sans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} · Wallpapers & Interior Finishes`,
    template: `%s · ${business.name}`,
  },
  description:
    "A digital showroom for Khadis Decor in Dome, Accra — wallpapers, PVC marble sheets, decorative boards, mirrors, mouldings, and cornices. Enquire on WhatsApp.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${business.name} · Wallpapers & Interior Finishes`,
    description:
      "Explore wallpapers and decorative finishes, then send a WhatsApp enquiry from your shortlist.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <EnquiryProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
        </EnquiryProvider>
      </body>
    </html>
  );
}
