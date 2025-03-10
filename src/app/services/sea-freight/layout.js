export const metadata = {
  title: 'Sea Freight Services | Global Ocean Shipping Solutions | Barta Logistics',
  description: 'Professional sea freight services for FCL and LCL shipments worldwide. Cost-effective ocean shipping with reliable tracking and expert handling.',
  alternates: {
    canonical: 'https://bartalogistics.com/services/sea-freight'
  },
  openGraph: {
    title: 'Sea Freight Services | Global Ocean Shipping Solutions',
    description: 'Complete sea freight services for all your ocean shipping needs. FCL, LCL, and specialized cargo solutions.',
    url: 'https://bartalogistics.com/services/sea-freight',
    type: 'website',
    images: [
      {
        url: '/images/services/sea-freight-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Sea Freight Services'
      }
    ]
  }
};

export default function SeaFreightLayout({ children }) {
  return <>{children}</>;
}