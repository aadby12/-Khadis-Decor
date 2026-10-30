import type { Metadata } from "next";
import { EnquiryList } from "@/components/enquiry/enquiry-list";

export const metadata: Metadata = {
  title: "Enquiry List",
  description: "Review saved Khadis Decor finishes and send a WhatsApp enquiry for current prices and availability.",
};

export default function EnquiryPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-wide max-w-4xl">
        <p className="eyebrow">Saved finishes</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight">Your enquiry list</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-taupe">
          Collect the looks you like, add quantities or notes, then open WhatsApp with a drafted
          message. Nothing is sent until you send it yourself.
        </p>
        <EnquiryList />
      </div>
    </div>
  );
}
