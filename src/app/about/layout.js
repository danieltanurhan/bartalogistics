export const metadata = {
  title: 'About Us | Global Logistics Expertise | Barta Logistics',
  description: 'Learn about Barta Logistics - your trusted partner in global freight forwarding and logistics solutions. Discover our mission, values, and commitment to excellence.',
  alternates: {
    canonical: 'https://bartalogistics.com/about'
  },
  openGraph: {
    title: 'About Barta Logistics | Global Logistics Solutions',
    description: 'Your trusted partner in global logistics. Professional freight forwarding and supply chain solutions.',
    url: 'https://bartalogistics.com/about',
    type: 'website',
    images: [
      {
        url: '/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About Barta Logistics'
      }
    ]
  }
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
