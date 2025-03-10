export const metadata = {
  title: 'Fair & Events Logistics | Exhibition Transport Solutions | Barta Logistics',
  description: 'Specialized logistics services for fairs, exhibitions, and events. Expert handling and transportation of exhibition materials worldwide.',
  alternates: {
    canonical: 'https://bartalogistics.com/industries/fair-and-events'
  },
  openGraph: {
    title: 'Fair & Events Logistics | Exhibition Solutions',
    description: 'Professional logistics services for fairs and events. Specialized handling of exhibition materials and event equipment.',
    url: 'https://bartalogistics.com/industries/fair-and-events',
    type: 'website',
    images: [
      {
        url: '/images/industries/fair-events-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Fair & Events Transport'
      }
    ]
  }
};

export default function FairEventsLayout({ children }) {
  return <>{children}</>;
}
