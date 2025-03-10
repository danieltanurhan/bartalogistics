export const metadata = {
  title: 'Warehousing Services | Storage & Distribution Solutions | Barta Logistics',
  description: 'Professional warehousing and distribution services with state-of-the-art facilities. Secure storage, inventory management, and distribution solutions.',
  alternates: {
    canonical: 'https://bartalogistics.com/services/warehousing'
  },
  openGraph: {
    title: 'Warehousing Services | Storage & Distribution Solutions',
    description: 'Complete warehousing services with modern facilities and advanced inventory management systems.',
    url: 'https://bartalogistics.com/services/warehousing',
    type: 'website',
    images: [
      {
        url: '/images/services/warehousing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Warehousing Services'
      }
    ]
  }
};

export default function WarehousingLayout({ children }) {
  return <>{children}</>;
}
