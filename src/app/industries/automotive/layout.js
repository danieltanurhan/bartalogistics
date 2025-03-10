export const metadata = {
  title: 'Automotive Logistics | Vehicle Transport Solutions | Barta Logistics',
  description: 'Specialized logistics services for the automotive industry. Complete supply chain solutions for vehicle parts, components, and finished automobiles.',
  alternates: {
    canonical: 'https://bartalogistics.com/industries/automotive'
  },
  openGraph: {
    title: 'Automotive Logistics | Global Vehicle Transport Solutions',
    description: 'Expert automotive logistics services. Specialized handling of vehicles, parts, and components with worldwide coverage.',
    url: 'https://bartalogistics.com/industries/automotive',
    type: 'website',
    images: [
      {
        url: '/images/industries/automotive-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Automotive Transport'
      }
    ]
  }
};

export default function AutomotiveLayout({ children }) {
  return <>{children}</>;
}
