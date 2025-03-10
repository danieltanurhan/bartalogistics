export const metadata = {
  title: 'Antique & Arts Logistics | Specialized Art Transport Solutions | Barta Logistics',
  description: 'Expert logistics services for antiques, fine art, and cultural artifacts. Climate-controlled transport and specialized handling for valuable pieces.',
  alternates: {
    canonical: 'https://bartalogistics.com/industries/antique-and-arts'
  },
  openGraph: {
    title: 'Antique & Arts Logistics | Specialized Transport Solutions',
    description: 'Professional handling and transportation of fine art, antiques, and cultural artifacts. Climate-controlled and secure logistics solutions.',
    url: 'https://bartalogistics.com/industries/antique-and-arts',
    type: 'website',
    images: [
      {
        url: '/images/industries/antique-arts-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Antique & Arts Transport'
      }
    ]
  }
};

export default function AntiqueArtsLayout({ children }) {
  return <>{children}</>;
}
