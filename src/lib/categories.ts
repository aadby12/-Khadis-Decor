import type { Category, CategoryId } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "wallpapers",
    name: "Wallpapers",
    href: "/shop/wallpapers",
    navLabel: "Wallpapers",
    tagline: "Pattern, texture, and colour for feature walls.",
    description:
      "A sample of wallpaper looks drawn from the styles Khadis Decor presents through Instagram — botanicals, textures, and quieter contemporary prints.",
    image: "/images/bedroom-soft.jpg",
  },
  {
    id: "pvc-marble",
    name: "PVC Marble Sheets",
    href: "/shop/pvc-marble",
    navLabel: "PVC Marble",
    tagline: "Marble-effect wall finishes with a high-gloss presence.",
    description:
      "PVC and UV marble sheets, including marble-sticker finishes, as presented in Khadis Decor’s public product posts.",
    image: "/images/marble-bath.jpg",
  },
  {
    id: "decorative-boards",
    name: "Decorative Boards",
    href: "/shop/decorative-boards",
    navLabel: "Decorative Boards",
    tagline: "Fluted panels, charcoal boards, and textured wall boards.",
    description:
      "Decorative boards and panels from the range shown on Instagram, including fluted panels, charcoal boards, and PU stone.",
    image: "/images/wood-panel.jpg",
  },
  {
    id: "mirrors",
    name: "Mirrors",
    href: "/shop/mirrors",
    navLabel: "Mirrors",
    tagline: "Silver and champagne mirror finishes for light and depth.",
    description:
      "Decorative mirror looks for walls and dressing spaces. Confirm current sizes and finishes with the showroom.",
    image: "/images/mirror-bath.jpg",
  },
  {
    id: "mouldings",
    name: "Wall Mouldings",
    href: "/shop/mouldings",
    navLabel: "Mouldings",
    tagline: "Polyurethane mouldings and decorative wall trim.",
    description:
      "Polyurethane mouldings and complementary gold trim, as shown in Khadis Decor’s Instagram product films.",
    image: "/images/architecture.jpg",
  },
  {
    id: "cornices",
    name: "Cornices",
    href: "/shop/cornices",
    navLabel: "Cornices",
    tagline: "Ceiling lines that complete a finished room.",
    description:
      "Cornice and ceiling-line finishing details. Ask the showroom which profiles are currently available.",
    image: "/images/ceiling-detail.jpg",
  },
];

export function getCategory(id: CategoryId) {
  return categories.find((category) => category.id === id);
}

export const decorativeFinishIds: CategoryId[] = [
  "pvc-marble",
  "decorative-boards",
  "mirrors",
  "mouldings",
  "cornices",
];
