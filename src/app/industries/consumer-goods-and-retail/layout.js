export const metadata = {
  title: 'Consumer Goods & Retail Logistics | Supply Chain Solutions | Barta Logistics',
  description: 'Comprehensive logistics solutions for retail and consumer goods. Expert supply chain management, distribution, and e-commerce fulfillment services.',
  alternates: {
    canonical: 'https://bartalogistics.com/industries/consumer-goods-and-retail'
  },
  openGraph: {
    title: 'Consumer Goods & Retail Logistics | Supply Chain Solutions',
    description: 'Complete retail logistics and distribution services. Efficient supply chain solutions for consumer goods worldwide.',
    url: 'https://bartalogistics.com/industries/consumer-goods-and-retail',
    type: 'website',
    images: [
      {
        url: '/images/industries/consumer-goods-retail-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics Consumer Goods & Retail Solutions'
      }
    ]
  }
};

export default function ConsumerGoodsLayout({ children }) {
  return <>{children}</>;
}
