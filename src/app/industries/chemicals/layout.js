export const metadata = {
  title: 'Chemical Logistics | Hazmat Transport Solutions | Barta Logistics',
  description: 'Specialized chemical and hazardous materials logistics services. Expert handling and transportation of chemical products with full regulatory compliance.',
  alternates: {
    canonical: 'https://bartalogistics.com/industries/chemicals'
  },
  openGraph: {
    title: 'Chemical Logistics | Specialized Transport Solutions',
    description: 'Professional chemical logistics services. Safe handling and transportation of hazardous materials with global reach.',
    url: 'https://bartalogistics.com/industries/chemicals',
    type: 'website',
    images: [
      {
        url: '/images/industries/chemicals-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Chemical Transport'
      }
    ]
  }
};

export default function ChemicalsLayout({ children }) {
  return <>{children}</>;
}
