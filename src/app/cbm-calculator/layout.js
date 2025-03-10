export const metadata = {
  title: 'CBM Calculator | Volume Calculator Tool | Barta Logistics',
  description: 'Free online CBM calculator for accurate shipping volume calculations. Calculate freight dimensions and costs easily with our logistics calculator tool.',
  alternates: {
    canonical: 'https://bartalogistics.com/cbm-calculator'
  },
  openGraph: {
    title: 'CBM Calculator | Shipping Volume Calculator',
    description: 'Calculate shipping volumes easily with our free CBM calculator. Get accurate freight measurements instantly.',
    url: 'https://bartalogistics.com/cbm-calculator',
    type: 'website',
    images: [
      {
        url: '/images/cbm-calculator-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Barta Logistics CBM Calculator'
      }
    ]
  }
};

export default function CbmCalculatorLayout({ children }) {
  return <>{children}</>;
}
