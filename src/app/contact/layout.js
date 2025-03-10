export const metadata = {
  title: 'Contact Us | Get in Touch | Barta Logistics',
  description: 'Contact Barta Logistics for all your freight and logistics needs. Get expert support and quotes for international shipping and supply chain solutions.',
  alternates: {
    canonical: 'https://bartalogistics.com/contact'
  },
  openGraph: {
    title: 'Contact Barta Logistics | Global Shipping Support',
    description: 'Get in touch with our logistics experts. Professional support for all your shipping needs.',
    url: 'https://bartalogistics.com/contact',
    type: 'website',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Barta Logistics'
      }
    ]
  }
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
