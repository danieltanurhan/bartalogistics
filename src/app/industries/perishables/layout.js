export const metadata = {
  title: 'Perishables Logistics | Temperature-Controlled Transport | Barta Logistics',
  description: 'Specialized cold chain logistics for perishable goods. Temperature-controlled transportation and storage solutions worldwide.',
  alternates: {
    canonical: 'https://bartalogistics.com/industries/perishables'
  },
  openGraph: {
    title: 'Perishables Logistics | Cold Chain Solutions',
    description: 'Expert cold chain logistics services. Temperature-controlled transport for perishable goods globally.',
    url: 'https://bartalogistics.com/industries/perishables',
    type: 'website',
    images: [
      {
        url: '/images/industries/perishables-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Perishables Transport'
      }
    ]
  }
};

export default function PerishablesLayout({ children }) {
  return <>{children}</>;
}
