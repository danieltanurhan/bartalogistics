// src/app/services/rail-freight/layout.js

export const metadata = {
  title: 'Rail Freight Services | Sustainable Transport Solutions | Barta Logistics',
  description: 'Efficient and sustainable rail freight services for long-distance cargo transportation. Expert solutions for intermodal shipping.',
  alternates: {
    canonical: 'https://bartalogistics.com/services/rail-freight'
  },
  openGraph: {
    title: 'Rail Freight Services | Sustainable Transport Solutions',
    description: 'Sustainable and efficient rail freight services for long-distance cargo. Expert intermodal shipping solutions.',
    url: 'https://bartalogistics.com/services/rail-freight',
    type: 'website',
    images: [
      {
        url: '/images/services/rail-freight-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Rail Freight Services'
      }
    ]
  }
};

export default function RailFreightLayout({ children }) {
  return <>{children}</>;
}