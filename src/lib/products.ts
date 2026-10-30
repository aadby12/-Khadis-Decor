import { categories, getCategory } from "@/lib/categories";
import type { CategoryId, FinishId, Product, RoomId } from "@/lib/types";

export const products: Product[] = [
  {
    slug: "wabi-sabi-wallpaper",
    name: "Wabi Sabi Wallpaper",
    category: "wallpapers",
    rooms: ["living-room", "bedroom"],
    finishes: ["textured", "minimal"],
    image: "/images/texture-wall.jpg",
    gallery: ["/images/texture-wall.jpg", "/images/bedroom-linen.jpg", "/images/living-beige.jpg"],
    shortDescription: "A quiet, tactile wallpaper style from the range shown on Instagram.",
    description:
      "Khadis Decor has listed Wabi Sabi wallpaper among its Instagram offerings. This entry represents that product type — a soft, imperfect texture that suits calm bedrooms and living rooms. Current sizes and available colourways should be confirmed with the showroom.",
    usage: "Ask the team for hanging guidance and how many rolls your wall is likely to need.",
    listingKind: "range",
    related: ["linen-minimal-wallpaper", "warm-stripe-wallpaper", "fluted-panel"],
  },
  {
    slug: "botanical-canopy-wallpaper",
    name: "Botanical Canopy Wallpaper",
    category: "wallpapers",
    rooms: ["living-room", "bedroom"],
    finishes: ["patterned"],
    image: "/images/botanical.jpg",
    gallery: ["/images/botanical.jpg", "/images/living-neutral.jpg", "/images/bedroom-soft.jpg"],
    shortDescription: "Leafy pattern for a feature wall with a collected, garden-room feeling.",
    description:
      "A sample wallpaper look for visitors who want a botanical feature wall. This is a catalogue illustration of a patterned style, not a confirmed live SKU. Share a screenshot or visit the showroom to match a similar print from current stock.",
    listingKind: "sample",
    related: ["tropical-leaf-wallpaper", "champagne-damask-wallpaper", "wabi-sabi-wallpaper"],
  },
  {
    slug: "champagne-damask-wallpaper",
    name: "Champagne Damask Wallpaper",
    category: "wallpapers",
    rooms: ["living-room", "bedroom"],
    finishes: ["patterned"],
    image: "/images/gold-interior.jpg",
    gallery: ["/images/gold-interior.jpg", "/images/living-warm.jpg", "/images/bedroom-dark.jpg"],
    shortDescription: "A warmer patterned look for dining rooms and formal living spaces.",
    description:
      "Sample catalogue entry for a metallic damask-inspired wallpaper. Use it to start a conversation about patterned papers with a champagne or gold undertone. Availability depends on current showroom stock.",
    listingKind: "sample",
    related: ["charcoal-floral-wallpaper", "silver-grid-mirror", "classic-cornice"],
  },
  {
    slug: "linen-minimal-wallpaper",
    name: "Linen Minimal Wallpaper",
    category: "wallpapers",
    rooms: ["bedroom", "office", "living-room"],
    finishes: ["minimal", "textured"],
    image: "/images/bedroom-linen.jpg",
    gallery: ["/images/bedroom-linen.jpg", "/images/cream-room.jpg", "/images/office.jpg"],
    shortDescription: "A soft, almost-plain texture for rooms that need calm rather than pattern.",
    description:
      "Sample catalogue entry for a linen-like wallpaper. Suitable as a starting point if you want a quiet wall in a bedroom, guest room, or workspace. Confirm current textures in the showroom or by WhatsApp.",
    listingKind: "sample",
    related: ["wabi-sabi-wallpaper", "warm-stripe-wallpaper", "contemporary-cornice"],
  },
  {
    slug: "tropical-leaf-wallpaper",
    name: "Tropical Leaf Wallpaper",
    category: "wallpapers",
    rooms: ["living-room", "bedroom"],
    finishes: ["patterned"],
    image: "/images/living-neutral.jpg",
    gallery: ["/images/living-neutral.jpg", "/images/botanical.jpg", "/images/bedroom-soft.jpg"],
    shortDescription: "Broad leaves and layered greens for a confident feature wall.",
    description:
      "Sample catalogue entry illustrating a tropical wallpaper direction. Khadis Decor’s Instagram catalogue includes a wide range of patterned papers; send this look as a reference when you enquire.",
    listingKind: "sample",
    related: ["botanical-canopy-wallpaper", "soft-geometric-wallpaper", "fluted-panel"],
  },
  {
    slug: "charcoal-floral-wallpaper",
    name: "Charcoal Floral Wallpaper",
    category: "wallpapers",
    rooms: ["bedroom", "living-room"],
    finishes: ["patterned"],
    image: "/images/bedroom-dark.jpg",
    gallery: ["/images/bedroom-dark.jpg", "/images/living-dark.jpg", "/images/feature-wall.jpg"],
    shortDescription: "A darker floral paper for moody bedrooms and evening living rooms.",
    description:
      "Sample catalogue entry for a deep, floral wallpaper. If you prefer a more dramatic wall, use this as a visual reference when asking which dark papers are currently in the shop.",
    listingKind: "sample",
    related: ["champagne-damask-wallpaper", "charcoal-board", "picture-frame-moulding"],
  },
  {
    slug: "soft-geometric-wallpaper",
    name: "Soft Geometric Wallpaper",
    category: "wallpapers",
    rooms: ["office", "living-room", "bedroom"],
    finishes: ["patterned", "minimal"],
    image: "/images/living-beige.jpg",
    gallery: ["/images/living-beige.jpg", "/images/office.jpg", "/images/cream-room.jpg"],
    shortDescription: "Quiet geometry for contemporary living rooms and workspaces.",
    description:
      "Sample catalogue entry for a restrained geometric wallpaper. A useful reference if you want pattern without a busy print.",
    listingKind: "sample",
    related: ["linen-minimal-wallpaper", "warm-stripe-wallpaper", "wood-look-board"],
  },
  {
    slug: "warm-stripe-wallpaper",
    name: "Warm Stripe Wallpaper",
    category: "wallpapers",
    rooms: ["living-room", "office", "bedroom"],
    finishes: ["patterned", "minimal"],
    image: "/images/living-warm.jpg",
    gallery: ["/images/living-warm.jpg", "/images/hero-detail.jpg", "/images/office.jpg"],
    shortDescription: "Vertical rhythm in warm neutrals, suited to hallways and sitting rooms.",
    description:
      "Sample catalogue entry for a warm striped wallpaper. Share this look if you would like the showroom to suggest similar papers from current stock.",
    listingKind: "sample",
    related: ["linen-minimal-wallpaper", "soft-geometric-wallpaper", "polyurethane-moulding"],
  },
  {
    slug: "uv-marble-sheet",
    name: "UV Marble Sheet",
    category: "pvc-marble",
    rooms: ["living-room", "kitchen", "office"],
    finishes: ["marble-effect", "decorative-panels"],
    image: "/images/marble-bath.jpg",
    gallery: ["/images/marble-bath.jpg", "/images/marble-kitchen.jpg", "/images/architecture.jpg"],
    shortDescription: "A marble-effect UV sheet of the kind featured in Khadis Decor product posts.",
    description:
      "Khadis Decor presents UV marble sheets as part of its decorative wall-finish range. This entry represents that product type. Sheet sizes, thickness, and current colourways need to be confirmed with the showroom before ordering.",
    usage: "Often used on feature walls, reception desks, and kitchen or bathroom wall planes. Ask about installation before you buy.",
    listingKind: "range",
    related: ["marble-sticker", "calacatta-pvc-sheet", "gold-trim-tape"],
  },
  {
    slug: "marble-sticker",
    name: "Marble Sticker",
    category: "pvc-marble",
    rooms: ["kitchen", "living-room"],
    finishes: ["marble-effect"],
    image: "/images/stone-texture.jpg",
    gallery: ["/images/stone-texture.jpg", "/images/marble-kitchen.jpg", "/images/kitchen.jpg"],
    shortDescription: "A marble-sticker finish listed among Khadis Decor’s Instagram products.",
    description:
      "Marble sticker has been listed in Khadis Decor’s public product posts. This catalogue entry represents that finish type. Confirm whether the current stock is self-adhesive, the available widths, and how it should be applied.",
    listingKind: "range",
    related: ["uv-marble-sheet", "beige-travertine-sheet", "grey-veined-marble-sheet"],
  },
  {
    slug: "calacatta-pvc-sheet",
    name: "Calacatta-Look PVC Marble",
    category: "pvc-marble",
    rooms: ["living-room", "kitchen", "office"],
    finishes: ["marble-effect", "decorative-panels"],
    image: "/images/marble-kitchen.jpg",
    gallery: ["/images/marble-kitchen.jpg", "/images/hero-living.jpg", "/images/architecture.jpg"],
    shortDescription: "A bright, veined marble-effect sheet for contemporary interiors.",
    description:
      "Sample catalogue entry for a Calacatta-inspired PVC marble look. Use it as a visual reference when asking which white marble sheets are currently available.",
    listingKind: "sample",
    related: ["uv-marble-sheet", "grey-veined-marble-sheet", "fluted-panel"],
  },
  {
    slug: "grey-veined-marble-sheet",
    name: "Grey Veined Marble Sheet",
    category: "pvc-marble",
    rooms: ["living-room", "office", "kitchen"],
    finishes: ["marble-effect"],
    image: "/images/green-marble.jpg",
    gallery: ["/images/green-marble.jpg", "/images/living-modern.jpg", "/images/office.jpg"],
    shortDescription: "Cooler marble veining for media walls and reception spaces.",
    description:
      "Sample catalogue entry for a grey-veined marble-effect sheet. A useful reference if you want a quieter stone look than high-contrast gold veining.",
    listingKind: "sample",
    related: ["black-gold-marble-sheet", "uv-marble-sheet", "charcoal-board"],
  },
  {
    slug: "black-gold-marble-sheet",
    name: "Black and Gold Marble Sheet",
    category: "pvc-marble",
    rooms: ["living-room", "office"],
    finishes: ["marble-effect", "decorative-panels"],
    image: "/images/living-dark.jpg",
    gallery: ["/images/living-dark.jpg", "/images/feature-wall.jpg", "/images/gold-interior.jpg"],
    shortDescription: "A darker marble-effect finish with warmer metallic movement.",
    description:
      "Sample catalogue entry for a black-and-gold marble-effect panel. Share this look if you are considering a statement wall in a living room or commercial interior.",
    listingKind: "sample",
    related: ["grey-veined-marble-sheet", "champagne-grid-mirror", "gold-trim-tape"],
  },
  {
    slug: "beige-travertine-sheet",
    name: "Beige Travertine-Look Sheet",
    category: "pvc-marble",
    rooms: ["living-room", "kitchen", "bedroom"],
    finishes: ["marble-effect", "minimal"],
    image: "/images/soft-living.jpg",
    gallery: ["/images/soft-living.jpg", "/images/hero-detail.jpg", "/images/cream-room.jpg"],
    shortDescription: "A softer stone look for walls that need warmth rather than high gloss.",
    description:
      "Sample catalogue entry for a travertine-inspired decorative sheet. Ask the showroom which beige and sand marble-effect finishes are currently in stock.",
    listingKind: "sample",
    related: ["marble-sticker", "wabi-sabi-wallpaper", "linen-minimal-wallpaper"],
  },
  {
    slug: "fluted-panel",
    name: "Fluted Panel",
    category: "decorative-boards",
    rooms: ["living-room", "bedroom", "office"],
    finishes: ["decorative-panels", "textured"],
    image: "/images/wood-panel.jpg",
    gallery: ["/images/wood-panel.jpg", "/images/panel-wall.jpg", "/images/living-modern.jpg"],
    shortDescription: "A fluted wall panel of the type regularly shown by Khadis Decor.",
    description:
      "Fluted panels appear throughout Khadis Decor’s Instagram catalogue, often paired with gold trim. This entry represents that product type. Confirm current colours, widths, and whether the panel is intended for full walls or feature sections.",
    usage: "Commonly used on TV walls, bedheads, and reception feature walls. Gold trim tape is listed as a complementary accessory.",
    listingKind: "range",
    related: ["gold-trim-tape", "charcoal-board", "wood-look-board"],
  },
  {
    slug: "charcoal-board",
    name: "Charcoal Board",
    category: "decorative-boards",
    rooms: ["living-room", "office"],
    finishes: ["decorative-panels", "minimal"],
    image: "/images/panel-wall.jpg",
    gallery: ["/images/panel-wall.jpg", "/images/living-dark.jpg", "/images/architecture.jpg"],
    shortDescription: "A charcoal decorative board listed in Khadis Decor’s public product posts.",
    description:
      "Charcoal board has been listed among Khadis Decor’s Instagram products. This catalogue entry represents that board type. Ask the showroom about current sheet sizes, finish, and suitable rooms before ordering.",
    listingKind: "range",
    related: ["fluted-panel", "pu-stone", "grey-veined-marble-sheet"],
  },
  {
    slug: "pu-stone",
    name: "PU Stone",
    category: "decorative-boards",
    rooms: ["living-room", "office"],
    finishes: ["textured", "decorative-panels"],
    image: "/images/stone-texture.jpg",
    gallery: ["/images/stone-texture.jpg", "/images/architecture.jpg", "/images/house-modern.jpg"],
    shortDescription: "A polyurethane stone-effect finish from the range shown on Instagram.",
    description:
      "PU Stone has been listed in Khadis Decor’s Instagram promotions. This entry represents that textured finish. Confirm the current profiles, colours, and how it is installed.",
    listingKind: "range",
    related: ["charcoal-board", "polyurethane-moulding", "fluted-panel"],
  },
  {
    slug: "wood-look-board",
    name: "Wood-Look Decorative Board",
    category: "decorative-boards",
    rooms: ["bedroom", "living-room", "office"],
    finishes: ["decorative-panels", "minimal"],
    image: "/images/house-modern.jpg",
    gallery: ["/images/house-modern.jpg", "/images/wood-panel.jpg", "/images/bedroom-linen.jpg"],
    shortDescription: "A warmer board look for bedheads, media walls, and office feature planes.",
    description:
      "Sample catalogue entry for a wood-look decorative board. Use it as a reference if you would like a natural, linear wall rather than marble or a printed wallpaper.",
    listingKind: "sample",
    related: ["fluted-panel", "linen-minimal-wallpaper", "contemporary-cornice"],
  },
  {
    slug: "silver-grid-mirror",
    name: "Silver Grid Mirror",
    category: "mirrors",
    rooms: ["living-room", "bedroom"],
    finishes: ["decorative-panels", "minimal"],
    image: "/images/mirror-bath.jpg",
    gallery: ["/images/mirror-bath.jpg", "/images/hero-living.jpg", "/images/soft-living.jpg"],
    shortDescription: "A silver mirror grid that brings light and a sharper architectural line.",
    description:
      "Khadis Decor’s public imagery includes silver and grid-style decorative mirrors. This entry represents that look. Confirm available panel sizes and whether the current stock is supplied as individual tiles or larger sheets.",
    listingKind: "range",
    related: ["champagne-grid-mirror", "full-length-mirror", "classic-cornice"],
  },
  {
    slug: "champagne-grid-mirror",
    name: "Champagne Grid Mirror",
    category: "mirrors",
    rooms: ["living-room", "bedroom"],
    finishes: ["decorative-panels"],
    image: "/images/gold-interior.jpg",
    gallery: ["/images/gold-interior.jpg", "/images/living-warm.jpg", "/images/bedroom-dark.jpg"],
    shortDescription: "A warmer mirror grid for rooms that already use champagne or gold details.",
    description:
      "Sample catalogue entry for a champagne-toned decorative mirror grid. Share this look if you want the showroom to suggest a warmer mirror finish from current stock.",
    listingKind: "sample",
    related: ["silver-grid-mirror", "champagne-damask-wallpaper", "gold-trim-tape"],
  },
  {
    slug: "full-length-mirror",
    name: "Decorative Full-Length Mirror",
    category: "mirrors",
    rooms: ["bedroom", "living-room"],
    finishes: ["minimal"],
    image: "/images/cream-room.jpg",
    gallery: ["/images/cream-room.jpg", "/images/bedroom-linen.jpg", "/images/mirror-bath.jpg"],
    shortDescription: "A taller decorative mirror for dressing corners and narrow rooms.",
    description:
      "Sample catalogue entry for a full-length decorative mirror. Ask the showroom which standing and wall-mounted sizes are currently available.",
    listingKind: "sample",
    related: ["silver-grid-mirror", "picture-frame-moulding", "linen-minimal-wallpaper"],
  },
  {
    slug: "polyurethane-moulding",
    name: "Polyurethane Wall Moulding",
    category: "mouldings",
    rooms: ["living-room", "bedroom", "office"],
    finishes: ["decorative-panels", "minimal"],
    image: "/images/architecture.jpg",
    gallery: ["/images/architecture.jpg", "/images/ceiling-detail.jpg", "/images/living-warm.jpg"],
    shortDescription: "PU mouldings of the type Khadis Decor describes as cut, nailed, and installed.",
    description:
      "Khadis Decor has presented polyurethane mouldings on Instagram, noting that the material can be cut, nailed, and installed. This entry represents that product type. Confirm current profiles and lengths with the showroom.",
    usage: "Used to build picture-frame wall details, dado lines, and architectural wall composition.",
    listingKind: "range",
    related: ["picture-frame-moulding", "gold-trim-tape", "classic-cornice"],
  },
  {
    slug: "picture-frame-moulding",
    name: "Picture-Frame Wall Moulding",
    category: "mouldings",
    rooms: ["living-room", "bedroom"],
    finishes: ["decorative-panels"],
    image: "/images/living-warm.jpg",
    gallery: ["/images/living-warm.jpg", "/images/architecture.jpg", "/images/gold-interior.jpg"],
    shortDescription: "A composed wall-frame look built from decorative moulding profiles.",
    description:
      "Sample catalogue entry showing how polyurethane mouldings can be arranged as picture-frame panelling. Bring wall measurements when you enquire so the showroom can advise on quantities.",
    listingKind: "sample",
    related: ["polyurethane-moulding", "classic-cornice", "champagne-damask-wallpaper"],
  },
  {
    slug: "gold-trim-tape",
    name: "Stainless Steel Gold Trim Tape",
    category: "mouldings",
    rooms: ["living-room", "kitchen", "office"],
    finishes: ["decorative-panels"],
    image: "/images/feature-wall.jpg",
    gallery: ["/images/feature-wall.jpg", "/images/wood-panel.jpg", "/images/marble-bath.jpg"],
    shortDescription: "Self-adhesive gold trim presented as an accessory for panels, mouldings, and marble sheets.",
    description:
      "Khadis Decor has posted stainless steel self-adhesive gold trim tape as a decorative accessory for fluted panels, moulds, walls, UV marble sheets, and furniture. Confirm current widths and lengths when you enquire.",
    listingKind: "range",
    related: ["fluted-panel", "uv-marble-sheet", "polyurethane-moulding"],
  },
  {
    slug: "classic-cornice",
    name: "Classic Cornice",
    category: "cornices",
    rooms: ["living-room", "bedroom"],
    finishes: ["decorative-panels"],
    image: "/images/ceiling-detail.jpg",
    gallery: ["/images/ceiling-detail.jpg", "/images/architecture.jpg", "/images/living-warm.jpg"],
    shortDescription: "A traditional ceiling profile to complete wallpapered or panelled rooms.",
    description:
      "Sample catalogue entry for a classic cornice profile. Khadis Decor’s range includes cornices as interior finishing details; ask which profiles are currently in the showroom.",
    listingKind: "sample",
    related: ["contemporary-cornice", "polyurethane-moulding", "champagne-damask-wallpaper"],
  },
  {
    slug: "contemporary-cornice",
    name: "Contemporary Cornice",
    category: "cornices",
    rooms: ["living-room", "office", "bedroom"],
    finishes: ["minimal", "decorative-panels"],
    image: "/images/house-modern.jpg",
    gallery: ["/images/house-modern.jpg", "/images/living-modern.jpg", "/images/office.jpg"],
    shortDescription: "A cleaner ceiling line for modern living rooms and workspaces.",
    description:
      "Sample catalogue entry for a simpler cornice profile. Use this as a reference if you want a finished ceiling edge without a heavily ornamental moulding.",
    listingKind: "sample",
    related: ["classic-cornice", "fluted-panel", "linen-minimal-wallpaper"],
  },
];

export const rooms: { id: RoomId; label: string }[] = [
  { id: "living-room", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "office", label: "Office or Commercial Space" },
];

export const finishes: { id: FinishId; label: string }[] = [
  { id: "marble-effect", label: "Marble Effect" },
  { id: "textured", label: "Textured" },
  { id: "patterned", label: "Patterned" },
  { id: "minimal", label: "Minimal" },
  { id: "decorative-panels", label: "Decorative Panels" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: CategoryId) {
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product: Product) {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((item): item is Product => Boolean(item));
}

export function searchProducts(query: string) {
  const value = query.trim().toLowerCase();
  if (!value) return products;

  return products.filter((product) => {
    const category = getCategory(product.category);
    return [product.name, product.shortDescription, product.description, category?.name]
      .join(" ")
      .toLowerCase()
      .includes(value);
  });
}

export function filterProducts(options: {
  category?: CategoryId | "all";
  room?: RoomId | "all";
  finish?: FinishId | "all";
  query?: string;
}) {
  return products.filter((product) => {
    const categoryMatch =
      !options.category || options.category === "all" || product.category === options.category;
    const roomMatch =
      !options.room || options.room === "all" || product.rooms.includes(options.room);
    const finishMatch =
      !options.finish || options.finish === "all" || product.finishes.includes(options.finish);
    const queryMatch = !options.query || searchProducts(options.query).includes(product);
    return categoryMatch && roomMatch && finishMatch && queryMatch;
  });
}

export { categories, getCategory };
