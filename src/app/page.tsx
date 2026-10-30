import { AboutPreview } from "@/components/home/about-preview";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { FindYourLook } from "@/components/home/find-your-look";
import { Hero } from "@/components/home/hero";
import { InspirationEditorial } from "@/components/home/inspiration-editorial";
import { VisitShowroom } from "@/components/home/visit-showroom";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <FeaturedCollection />
      <FindYourLook compact />
      <InspirationEditorial />
      <AboutPreview />
      <VisitShowroom />
    </>
  );
}
