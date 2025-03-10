"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import Script from 'next/script';
import '@/styles/industries-pages.css'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';

const perishablesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Perishables Logistics Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Temperature-controlled logistics solutions for perishable goods, including fresh produce, pharmaceuticals, and temperature-sensitive items.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Perishables Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cold Chain Transport",
          "description": "Temperature-controlled transportation services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fresh Produce Logistics",
          "description": "Specialized handling of perishable goods"
        }
      }
    ]
  }
};

const Perishables = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const industrySolutionsItems = [
    { text: "Temperature-controlled transportation for fresh produce, seafood, and flowers" }, 
    { text: "Cold chain monitoring with real-time temperature tracking systems" }, 
    { text: "Specialized pharmaceutical logistics compliant with GDP standards" }, 
    { text: "Time-critical delivery for short shelf-life products" }, 
    { text: "Temperature-controlled warehousing and cross-docking facilities" }, 
    { text: "Customs clearance expertise for perishable goods" }, 
    { text: "Quality assurance and regulatory compliance management" }, 
    { text: "End-to-end cold chain solutions with dedicated refrigerated vehicles" }, 
    { text: "24/7 monitoring and emergency response protocols" }, 
    { text: "Specialized packaging solutions for temperature-sensitive items" }
  ];

  return (
    <>
      <Script
        id="perishables-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(perishablesJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Perishables Industry Logistics</h1>
              <p>Time-Sensitive Solutions for Temperature-Controlled Logistics</p>
            </div>
          </div>
        </div>
        <div className="industry-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text">
                <h2>Perishables<span className="title-underline"></span></h2>
                <p>
                  Perishable goods demand exceptional care and precise temperature control 
                  throughout their journey. At Barta Logistics, we specialize in the 
                  transportation of temperature-sensitive products, ensuring they maintain 
                  their quality and freshness from origin to destination.
                </p>
                <p>
                  Our comprehensive cold chain solutions cover pharmaceuticals, fresh produce, 
                  flowers, seafood, and other temperature-sensitive items. We utilize 
                  state-of-the-art temperature-controlled containers and monitoring systems 
                  to maintain optimal conditions throughout transit. Our end-to-end visibility 
                  allows you to track both location and temperature in real-time.
                </p>
                <p>
                  With our extensive experience in handling perishable cargo, we understand 
                  the critical nature of time and temperature management. Our dedicated team 
                  of experts ensures proper handling, storage, and transportation while 
                  adhering to all regulatory requirements and quality standards. Whether you're 
                  shipping locally or internationally, we provide tailored solutions to meet 
                  your specific temperature-controlled logistics needs.
                </p>
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

export default Perishables;