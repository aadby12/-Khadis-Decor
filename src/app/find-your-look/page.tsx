import type { Metadata } from "next";
import { FindYourLook } from "@/components/home/find-your-look";

export const metadata: Metadata = {
  title: "Find Your Look",
  description:
    "Filter a sample Khadis Decor catalogue by room, finish, and category, then enquire about the looks you like.",
};

export default function FindYourLookPage() {
  return <FindYourLook />;
}
