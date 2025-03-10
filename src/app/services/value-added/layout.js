export const metadata = {
  title: 'Value Added Services | Enhanced Logistics Solutions | Barta Logistics',
  description: 'Comprehensive value-added logistics services including customs clearance, warehousing, and specialized solutions. Expert support for complex supply chain needs.',
  alternates: {
    canonical: 'https://bartalogistics.com/services/value-added'
  },
  openGraph: {
    title: 'Value Added Services | Enhanced Logistics Solutions',
    description: 'Complete value-added services for your logistics needs. Customs clearance, warehousing, and specialized solutions.',
    url: 'https://bartalogistics.com/services/value-added',
    type: 'website',
    images: [
      {
        url: '/images/services/value-added-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Value Added Services'
      }
    ]
  }
};

export default function ValueAddedLayout({ children }) {
  return <>{children}</>;
}
