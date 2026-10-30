export type CategoryId =
  | "wallpapers"
  | "pvc-marble"
  | "decorative-boards"
  | "mirrors"
  | "mouldings"
  | "cornices";

export type RoomId = "living-room" | "bedroom" | "kitchen" | "office";

export type FinishId =
  | "marble-effect"
  | "textured"
  | "patterned"
  | "minimal"
  | "decorative-panels";

export type ListingKind = "range" | "sample";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  rooms: RoomId[];
  finishes: FinishId[];
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  usage?: string;
  dimensions?: string;
  variants?: string[];
  listingKind: ListingKind;
  related: string[];
};

export type Category = {
  id: CategoryId;
  name: string;
  href: string;
  navLabel: string;
  tagline: string;
  description: string;
  image: string;
};

export type EnquiryItem = {
  slug: string;
  quantity: number;
  variant?: string;
  note?: string;
};
