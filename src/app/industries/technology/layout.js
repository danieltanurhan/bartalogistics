export const metadata = {
  title: 'Technology Logistics | IT Equipment Transport | Barta Logistics',
  description: 'Specialized logistics solutions for technology and IT equipment. Secure handling and transportation of sensitive electronic components worldwide.',
  alternates: {
    canonical: 'https://bartalogistics.com/industries/technology'
  },
  openGraph: {
    title: 'Technology Logistics | IT Equipment Transport Solutions',
    description: 'Expert technology logistics services. Safe handling of sensitive electronic equipment and IT infrastructure.',
    url: 'https://bartalogistics.com/industries/technology',
    type: 'website',
    images: [
      {
        url: '/images/industries/technology-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Technology Transport'
      }
    ]
  }
};

export default function TechnologyLayout({ children }) {
  return <>{children}</>;
}
