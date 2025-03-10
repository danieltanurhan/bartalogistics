export const metadata = {
  title: 'Road Freight Services | Flexible Transport Solutions | Barta Logistics',
  description: 'Professional road freight services with point-to-point delivery solutions. Reliable ground transportation with real-time tracking and dedicated fleet.',
  alternates: {
    canonical: 'https://bartalogistics.com/services/road-freight'
  },
  openGraph: {
    title: 'Road Freight Services | Ground Transport Solutions',
    description: 'Comprehensive road freight services for efficient ground transportation. Full truckload and specialized cargo solutions.',
    url: 'https://bartalogistics.com/services/road-freight',
    type: 'website',
    images: [
      {
        url: '/images/services/road-freight-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Road Freight Services'
      }
    ]
  }
};

export default function RoadFreightLayout({ children }) {
  return <>{children}</>;
}
