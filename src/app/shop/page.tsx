import { Suspense } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ShopExplorer } from "@/components/product/shop-explorer";

export default function ShopPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Shop"
          title="Explore the Collection"
          description="Discover finishes and decorative details for your next interior refresh. This sample catalogue organises product types Khadis Decor presents publicly. Confirm current designs, sizes, and prices by enquiry."
        />
        <Suspense fallback={<div className="mt-12 h-96 bg-ivory" />}>
          <ShopExplorer />
        </Suspense>
      </div>
    </div>
  );
}
