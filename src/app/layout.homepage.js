export const metadata = {
  title: 'Barta Logistics - End-to-End Global Logistics Solutions',
  description: 'Leading logistics provider offering comprehensive freight, warehousing, and supply chain solutions worldwide. Get reliable and efficient logistics services.',
  alternates: {
    canonical: 'https://bartalogistics.com'
  },
  openGraph: {
    title: 'Barta Logistics - Global Logistics Solutions',
    description: 'Comprehensive freight, warehousing, and supply chain solutions worldwide. Expert logistics services with global reach.',
    url: 'https://bartalogistics.com',
    type: 'website',
    images: [
      {
        url: '/images/homepage-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Global Services'
      }
    ]
  }
};

export default function HomePageLayout({ children }) {
  return <>{children}</>;
}
