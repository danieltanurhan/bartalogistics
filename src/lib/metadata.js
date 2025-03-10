export function constructMetadata({
  title = "Barta Logistics - Global Freight & Logistics Solutions",
  description = "Professional freight forwarding and logistics services worldwide. Specialized in air, sea, and road freight, warehousing, and supply chain solutions.",
  image = "/images/og-image.jpg",
  icons = "/favicon.ico",
  noIndex = false,
  canonicalUrl = "https://bartalogistics.com",
  type = "website"
} = {}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url: canonicalUrl,
      type
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL('https://bartalogistics.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
