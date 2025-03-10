"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext';
import Script from 'next/script';
import '@/styles/industries-pages.css';
import '@/styles/services-pages.css';
import '@/styles/aboutus.css';
import '@/styles/globals.css';
import { useContext } from 'react';

const automotiveJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automotive Logistics Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Comprehensive logistics solutions for the automotive industry, including vehicle transport and parts distribution.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automotive Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vehicle Transport",
          "description": "Specialized transportation for finished vehicles"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Parts Logistics",
          "description": "Supply chain solutions for automotive parts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "JIT Delivery",
          "description": "Just-in-time delivery services for manufacturing"
        }
      }
    ]
  }
};

const Automotive = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const industrySolutionsItems = [
    { text: "Just-in-time delivery for automotive manufacturing" }, 
    { text: "Specialized handling of automotive parts and components" }, 
    { text: "Supply chain solutions for OEM manufacturers" }, 
    { text: "Vehicle transportation and distribution services" }, 
    { text: "Warehouse management for automotive spare parts" }, 
    { text: "Cross-border automotive logistics solutions" }, 
    { text: "Quality control and inspection services" }, 
    { text: "Aftermarket parts distribution networks" }, 
    { text: "Time-critical delivery for production line supplies" }, 
    { text: "Customs clearance for automotive imports and exports" }
   ];

  return (
    <>
      <Script
        id="automotive-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automotiveJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Automotive Industry Logistics</h1>
              <p>Delivering Excellence, Tailored to You</p>
            </div>
          </div>
        </div>
        <div className="industry-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text">
                <h2>Automotive<span className="title-underline"></span></h2>
                <p>
                  The automotive industry demands precision, reliability, and seamless 
                  coordination across complex supply chains. At Barta Logistics, we 
                  deliver specialized logistics solutions that keep production lines 
                  running and vehicles moving from assembly to dealership efficiently.
                </p>
                <p>
                  Our comprehensive automotive logistics services encompass everything 
                  from just-in-time delivery for manufacturing to global distribution 
                  of finished vehicles and spare parts. We understand the critical nature 
                  of automotive supply chains and provide tailored solutions that minimize 
                  delays and optimize costs while maintaining the highest quality standards.
                </p>
                <p>
                  With years of experience serving major automotive manufacturers and suppliers, 
                  we've developed sophisticated systems to handle the unique challenges of 
                  automotive logistics. Our expertise extends from managing inbound components 
                  for production to coordinating aftermarket parts distribution, ensuring your 
                  automotive supply chain operates at peak efficiency regardless of scale or 
                  complexity.
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

export default Automotive;