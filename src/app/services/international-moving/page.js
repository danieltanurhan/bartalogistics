"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import Script from 'next/script';
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { Lightbulb, Truck, Globe, ShieldCheck } from 'lucide-react';
import { useContext } from 'react';

const internationalMovingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "International Moving Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Comprehensive international moving and relocation services with global coverage and expert handling.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "International Moving Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "International Relocation",
          "description": "Complete overseas moving services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Packing Services",
          "description": "Professional packing and crating for international moves"
        }
      }
    ]
  }
};

const differenceItems = [
  {
    image: "/images/services/plane-front.jpg",
    title: "Know How",
    description: "With three decades of industry expertise, our seasoned professionals navigate complex logistics challenges with precision and insight, ensuring optimal solutions for every situation."
  },
  {
    image: "/images/services/plane-front.jpg",
    title: "Global Network",
    description: "Our extensive worldwide network enables us to provide seamless logistics solutions across continents, connecting businesses to opportunities around the globe."
  },
  {
    image: "/images/services/plane-front.jpg",
    title: "Customized Solutions",
    description: "We understand that every business is unique. That's why we offer tailored logistics solutions to meet your specific needs, ensuring efficiency and cost-effectiveness."
  },
  {
    image: "/images/services/plane-front.jpg",
    title: "Reliability",
    description: "Count on us for consistent, dependable service. Our commitment to reliability means your cargo is in safe hands from pickup to delivery, every time."
  }
];

const InternationalMoving = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  return (
    <>
      <Script
        id="international-moving-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(internationalMovingJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>International Moving</h1>
              <p>Seamless Transitions, Worldwide</p>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text">
                <h2>International Moving<span className="title-underline"></span></h2>
                <p>
                  International moving represents a complex journey beyond simple relocation, 
                  encompassing cultural transitions and detailed logistics management. At 
                  Barta Logistics, we provide comprehensive support throughout your 
                  international move, addressing every aspect with expertise and care.
                </p>
                <p>
                  Our services cover the entire relocation process, from initial planning 
                  and packing to customs clearance and final delivery. We handle documentation, 
                  logistics coordination, and cultural considerations to ensure a smooth 
                  transition to your new destination.
                </p>
                <p>
                  With years of experience in international relocations, we understand the 
                  unique challenges and requirements of moving abroad. Our dedicated team 
                  provides personalized support and professional guidance, ensuring your 
                  international move is executed with precision and care.
                </p>
                <button className="about-button" onClick={onQuoteClick}>
                REQUEST A QUOTE
                </button>
              </div>
              <div className="about-image">
                <img
                  src="/images/services/plane-loading(2).jpg"
                  alt="Internation Moving"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sections-section">
          <div className="home-content-container">
            <div className="section-header">
              <div className="section-header-content">
                <h2>Services We Offer<span className="title-underline"></span></h2>
                <p>Our air freight solutions span every shipping need, 
                tailored services backed by technology and experts, 
                ensuring your cargo arrives safely and on schedule.</p>
              </div>
              <div className="section-header-extra-content">
              </div>
            </div>
            <div className="what-different-content">
              <div className="services-board-grid">
                {differenceItems.map((item, index) => (
                  <div key={index} className="services-board-item">
                    {/* <div
                      className="services-board-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <p> yo </p>
                    </div> */}
                    <div className="services-board-image">
                      <img src={item.image} alt="Air Freight" />
                    </div>
                    <div className="services-board-content">
                      <div className="services-board-title">{item.title}</div>
                      <div className="services-board-description">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default InternationalMoving;