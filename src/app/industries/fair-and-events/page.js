"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/industries-pages.css'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';
import Script from 'next/script';

const fairEventsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fair and Events Logistics Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Specialized logistics solutions for fairs, exhibitions, and events, including transportation and handling of exhibition materials.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fair and Events Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exhibition Logistics",
          "description": "Specialized handling of exhibition materials"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Equipment Transport",
          "description": "Transportation services for event equipment"
        }
      }
    ]
  }
};

const FairEvents = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const industrySolutionsItems = [
    { text: "Time-critical logistics for event setup and teardown" },
    { text: "Specialized handling of exhibition materials and equipment" },
    { text: "On-site logistics coordination" },
    { text: "Temporary warehousing and storage solutions" },
    { text: "Customs clearance for international exhibitions" },
    { text: "Last-minute delivery services" },
    { text: "Fragile and high-value item transportation" },
    { text: "Post-event return logistics" },
  ];

  return (
    <>
      <Script
        id="fair-events-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fairEventsJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Fair and Events Industry Logistics</h1>
              <p>Seamless Support for Spectacular Experiences</p>
            </div>
          </div>
        </div>
        <div className="industry-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text">
                <h2>Fair and Events<span className="title-underline"></span></h2>
                <p>In the dynamic world of fairs and events, timing is everything. Our specialized logistics solutions are designed to ensure your event runs smoothly from setup to teardown. We understand that each exhibition, trade show, or special event has unique requirements and tight deadlines.</p>
                <p>Our expert team handles everything from transporting delicate exhibition materials to coordinating on-site logistics, allowing you to focus on creating memorable experiences for your attendees. With our global network and experience in handling time-sensitive shipments, we ensure your event materials arrive on time, every time.</p>
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

export default FairEvents;