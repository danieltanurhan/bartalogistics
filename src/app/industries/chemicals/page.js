"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext';
import Script from 'next/script';
import '@/styles/industries-pages.css';
import '@/styles/services-pages.css';
import '@/styles/aboutus.css';
import '@/styles/globals.css';
import { useContext } from 'react';

const chemicalsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Chemical Logistics Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Specialized logistics solutions for the chemical industry, including hazardous materials handling and regulatory compliance.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Chemical Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hazmat Transport",
          "description": "Specialized transportation for hazardous materials"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chemical Storage",
          "description": "Compliant storage solutions for chemical products"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Safety Compliance",
          "description": "Full regulatory compliance for chemical logistics"
        }
      }
    ]
  }
};

const industrySolutionsItems = [
  { text: "Hazardous materials transportation" },
  { text: "Temperature-controlled chemical storage" },
  { text: "Regulatory compliance management" },
  { text: "Safety documentation and handling" },
  { text: "Emergency response planning" },
  { text: "Chemical supply chain optimization" },
  { text: "Specialized container solutions" },
  { text: "Environmental protection measures" },
  { text: "Quality control and testing" },
  { text: "Global chemical distribution networks" }
];

const Chemicals = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  return (
    <>
      <Script
        id="chemicals-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chemicalsJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Chemical Industry Logistics</h1>
              <p>Safe, Compliant, and Reliable Solutions</p>
            </div>
          </div>
        </div>
        <div className="industry-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text">
                <h2>Chemicals<span className="title-underline"></span></h2>
                <p>
                  The chemical industry requires specialized expertise in handling, 
                  storing, and transporting sensitive materials. At Barta Logistics, 
                  we provide comprehensive chemical logistics solutions that prioritize 
                  safety, compliance, and efficiency at every step.
                </p>
                <p>
                  Our chemical logistics services are built on rigorous safety protocols 
                  and extensive experience in handling hazardous materials. We maintain 
                  full compliance with international regulations while ensuring your 
                  chemical products reach their destination safely and on schedule.
                </p>
                <p>
                  With state-of-the-art facilities and specialized equipment, we handle 
                  everything from raw materials to finished products. Our expert team 
                  understands the unique challenges of chemical logistics and provides 
                  tailored solutions that meet your specific requirements.
                </p>
                <button className="about-button" onClick={onQuoteClick}>
                REQUEST A QUOTE
                </button>
              </div>
              <div className="about-image">
                <img
                  src="/images/services/plane-loading(2).jpg"
                  alt="Chemical Logistics"
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
  );
};

export default Chemicals;