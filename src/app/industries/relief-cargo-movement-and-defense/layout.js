export const metadata = {
  title: 'Relief Cargo & Defense Logistics | Emergency Response Solutions | Barta Logistics',
  description: 'Specialized logistics for humanitarian aid, relief cargo, and defense equipment. Rapid deployment and secure transportation solutions.',
  alternates: {
    canonical: 'https://bartalogistics.com/industries/relief-cargo-movement-and-defense'
  },
  openGraph: {
    title: 'Relief Cargo & Defense Logistics Solutions',
    description: 'Expert logistics services for humanitarian aid and defense cargo. Emergency response and secure transportation worldwide.',
    url: 'https://bartalogistics.com/industries/relief-cargo-movement-and-defense',
    type: 'website',
    images: [
      {
        url: '/images/industries/relief-cargo-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Relief Cargo Transport'
      }
    ]
  }
};

export default function ReliefCargoLayout({ children }) {
  return <>{children}</>;
}
