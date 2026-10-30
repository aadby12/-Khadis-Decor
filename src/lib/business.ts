export const business = {
  name: "Khadis Decor",
  tradingName: "Khadis Decor Wallpaper Et Al",
  tagline: "Wallpapers & Interior Finishes",
  established: 2015,
  instagramHandle: "khadis_decor",
  instagramUrl: "https://www.instagram.com/khadis_decor/",
  instagramDisplayName: "Wallpaper et al",
  location: {
    area: "Dome Pillar 2, K Boat",
    city: "Dome, Accra",
    country: "Ghana",
    display: "Dome Pillar 2, K Boat, Dome, Accra",
    listedAddress: "31 Dome Road, Dome, Accra",
    mapsQuery: "Khadis Decor Wallpaper Et Al, K Boat, Dome, Accra",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Khadis+Decor+Wallpaper+Et+Al+K+Boat+Dome+Accra",
    embedUrl:
      "https://maps.google.com/maps?q=Khadis%20Decor%20Wallpaper%20Et%20Al%2C%20K%20Boat%2C%20Dome%2C%20Accra&z=16&output=embed",
    coordinates: { lat: 5.645802, lng: -0.226113 },
  },
  phones: [
    {
      id: "primary",
      display: "059 333 0898",
      tel: "+233593330898",
      whatsapp: "233593330898",
      source: "Posted as Call/WhatsApp on the Khadis Decor Instagram account.",
    },
    {
      id: "secondary",
      display: "059 824 4753",
      tel: "+233598244753",
      whatsapp: "233598244753",
      source: "Posted as Call/WhatsApp on the Khadis Decor Instagram account.",
    },
  ],
  claims: {
    spacesTransformed:
      "The Instagram profile describes the business as transforming interior spaces and states that more than 10,000 spaces have been transformed.",
  },
} as const;

export const primaryPhone = business.phones[0];

export const siteUrl = "https://khadisdecor.com";
