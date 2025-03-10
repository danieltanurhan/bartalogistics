export const metadata = {
  title: 'Air Freight Services | Fast Global Air Cargo Solutions | Barta Logistics',
  description: 'Expert air freight services with global reach. Fast, reliable air cargo solutions for time-critical shipments. Get real-time tracking and dedicated support.',
  alternates: {
    canonical: 'https://bartalogistics.com/services/air-freight'
  },
  openGraph: {
    title: 'Air Freight Services | Global Air Cargo Solutions',
    description: 'Fast and reliable air freight services with worldwide coverage. Specialized handling for time-sensitive cargo with real-time tracking.',
    url: 'https://bartalogistics.com/services/air-freight',
    type: 'website',
    images: [
      {
        url: '/images/services/air-freight-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Air Freight Services'
      }
    ]
  }
}

export default function AirFreightLayout({ children }) {
  return <>{children}</>;
}