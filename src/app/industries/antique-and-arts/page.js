"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/industries-pages.css'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';
import Script from 'next/script';

const antiqueArtsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Antique and Arts Logistics Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Specialized logistics services for antiques, fine art, and cultural artifacts with climate-controlled transportation and expert handling.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Art and Antiques Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fine Art Transportation",
          "description": "Climate-controlled and secure art transport"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Antique Handling",
          "description": "Specialized packing and crating for antiques"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exhibition Logistics",
          "description": "Museum and gallery logistics services"
        }
      }
    ]
  }
};

const AntiqueArts = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const industrySolutionsItems = [
    { text: "Specialized packaging for fragile antiques and artwork" },
    { text: "Climate-controlled transportation for sensitive pieces" },
    { text: "Custom crating for large or irregularly shaped items" },
    { text: "Fine art handling expertise" },
    { text: "Insurance coverage for high-value items" },
    { text: "Secure storage solutions" },
    { text: "Exhibition and gallery logistics" },
    { text: "Customs clearance for international shipments" },
  ];

  return (
    <>
      <Script
        id="antique-arts-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(antiqueArtsJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
            <h1>Antique & Arts Industry Logistics</h1>
            <p>Preserving Beauty Across Borders</p>
            </div>
          </div>
        </div>
        <div className="industry-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text">
                <h2>Antique & Arts<span className="title-underline"></span></h2>
                <p>In the world of antiques and fine arts, each piece tells a unique story. At Barta Logistics, we understand the irreplaceable value of these treasures. Our specialized logistics services are designed to ensure that every artifact, painting, or sculpture reaches its destination in pristine condition.</p>
                <p>With decades of experience in handling delicate and high-value items, we offer tailored solutions that combine cutting-edge technology with time-honored care techniques. From climate-controlled transportation to custom crating, we treat each piece as if it were our own.</p>
                <p>With decades of experience in handling delicate and high-value items, we offer tailored solutions that combine cutting-edge technology with time-honored care techniques. From climate-controlled transportation to custom crating, we treat each piece as if it were our own.</p>
                <button className="about-button" onClick={onQuoteClick}>
                  REQUEST A QUOTE
                </button>
              </div>
              <div className="about-image">
                <img
                  src="/images/services/plane-loading(2).jpg"
                  alt="Air Freight"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-container">
            <div className="industries-content home-content-container">
              <div className="about-text">
                <h2>Solutions We Provide<span className="title-underline"></span></h2>
              </div>
              <div className="industries-solutions">
                <ul>
                  {industrySolutionsItems.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default AntiqueArts;