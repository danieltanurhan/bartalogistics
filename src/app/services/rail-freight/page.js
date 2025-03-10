"use client";

import { useRouter } from 'next/navigation';
import { QuoteFormContext } from '@/components/QuoteFormContext';
import Script from 'next/script';
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';

const railFreightJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Rail Freight Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Sustainable and efficient rail freight services for long-distance cargo transportation with intermodal solutions.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Rail Freight Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Intermodal Rail Transport",
          "description": "Combined rail and road transportation solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Container Rail Freight",
          "description": "Containerized cargo transport by rail"
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

const RailFreight = () => {
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
        id="rail-freight-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(railFreightJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Rail Freight</h1>
              <p>Sustainable Solutions, Reliable Service</p>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text">
                <h2>Rail Freight<span className="title-underline"></span></h2>
                <p>
                  Rail freight offers a sustainable and efficient solution for 
                  long-distance cargo transportation. Our comprehensive rail 
                  services provide cost-effective alternatives for bulk shipments 
                  and containerized cargo across continental routes.
                </p>
                <p>
                  We specialize in intermodal transportation solutions, combining 
                  the efficiency of rail with flexible first and last-mile delivery 
                  options. Our services include dedicated container management, 
                  track-and-trace capabilities, and expert handling of specialized cargo.
                </p>
                <button className="about-button" onClick={onQuoteClick}>
                  REQUEST A QUOTE
                </button>
              </div>
              <div className="about-image">
                <img src="/images/services/plane-loading(2).jpg" alt="Rail Freight" />
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

export default RailFreight;