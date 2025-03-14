"use client";

import { useRouter } from 'next/navigation';
import { QuoteFormContext } from '@/components/QuoteFormContext';
import Script from 'next/script';
import '@/styles/services-pages.css';
import '@/styles/aboutus.css';
import '@/styles/globals.css';
import { useContext } from 'react';

// JSON-LD structured data
const airFreightJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Air Freight Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Global air freight and cargo transportation services with real-time tracking and specialized handling capabilities.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Air Freight Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Express Air Freight",
          "description": "Time-critical air cargo transportation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Specialized Cargo Handling",
          "description": "Custom solutions for special handling requirements"
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

const AirFreight = () => {
  const router = useRouter();
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const onCBMClick = () => {
    router.push('/cbm-calculator');
  };

  return (
    <>
      <Script
        id="air-freight-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(airFreightJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Air Freight</h1>
              <p>Delivering Excellence, Tailored to You</p>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text">
                <h2>Air Freight<span className="title-underline"></span></h2>
                <p>
                  Air freight represents the pinnacle of speed and reliability 
                   in global logistics, offering swift transportation solutions 
                    for time-critical shipments. At Barta Logistics, we leverage 
                     our extensive network of trusted airline partnerships to 
                     provide comprehensive air cargo services worldwide.
                </p>
                <p>
                  From express deliveries and chartered solutions to specialized 
                  handling of perishables and valuable cargo, our expert team 
                  ensures maximum efficiency in every shipment. Our comprehensive 
                  services are backed by real-time tracking capabilities and dedicated 
                  customer support, providing complete visibility and peace of mind.
                </p>
                <p>
                  With decades of industry experience, we have built a reputation for 
                  excellence in connecting businesses across continents. Our commitment 
                  to precision, safety, and reliability has made us a trusted partner for 
                  companies seeking seamless global logistics solutions. Whether you require 
                  regular scheduled services or customized shipping solutions, our team stands 
                  ready to exceed your expectations.
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
        <div className="footer-cbm-section">
          <div className="home-content-container-cbm">
            <div className="footer-cbm-content">
                <div className="footer-cbm-text">
                  <h2>CBM Calculator<span className="title-underline"></span></h2>
                  <p>
                    Calculate the CBM of your cargo and get an accurate estimate of
                    its volume and weight.
                  </p>
                </div>
                <div className="footer-cbm-button">
                  <button className="about-button" onClick={onCBMClick}>
                    Calculate CBM
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default AirFreight;