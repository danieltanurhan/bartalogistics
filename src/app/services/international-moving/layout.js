
export const metadata = {
  title: 'International Moving Services | Global Relocation Solutions | Barta Logistics',
  description: 'Professional international moving and relocation services worldwide. Comprehensive support for overseas moves with expert handling and dedicated assistance.',
  alternates: {
    canonical: 'https://bartalogistics.com/services/international-moving'
  },
  openGraph: {
    title: 'International Moving Services | Global Relocation Solutions',
    description: 'Complete international moving services for seamless overseas relocations. Expert packing, shipping, and relocation assistance.',
    url: 'https://bartalogistics.com/services/international-moving',
    type: 'website',
    images: [
      {
        url: '/images/services/international-moving-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics International Moving Services'
      }
    ]
  }
};

export default function InternationalMovingLayout({ children }) {
  return <>{children}</>;
}
