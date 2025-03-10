"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import Script from 'next/script';
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'

const warehousingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Warehousing Services",
  "provider": {
    "@type": "Organization",
    "name": "Barta Logistics",
    "url": "https://bartalogistics.com"
  },
  "description": "Professional warehousing services with modern facilities and advanced inventory management systems.",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Warehousing Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Storage Solutions",
          "description": "Secure warehousing facilities with climate control"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Inventory Management",
          "description": "Advanced inventory tracking and management systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Distribution Services",
          "description": "Efficient distribution and fulfillment solutions"
        }
      }
    ]
  }
};

const Warehousing = () => {
  return (
    <>
      <Script
        id="warehousing-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(warehousingJsonLd) }}
      />
      <div>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Strategic Storage, Smart Solutions</h1>
              {/* <p>Strategic Storage, Smart Solutions</p> */}
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text warehousing-text">
                <h2>Warehousing<span className="title-underline"></span></h2>
                <p>
                  At Barta Logistics, our state-of-the-art warehousing facilities combine strategic 
                  locations with advanced technology to optimize your supply chain operations. Our 
                  sophisticated inventory management systems and robust security measures ensure your 
                  goods are stored, tracked, and handled with precision.
                </p>
                <p>
                  We offer comprehensive warehousing services, including climate-controlled storage, 
                  automated inventory management, and efficient pick-and-pack operations. Our real-time 
                  tracking systems provide complete visibility while our dedicated team ensures proper 
                  handling for all types of goods, from short-term storage to complex distribution needs.
                </p>
                <p>
                  Understanding that each business has unique requirements, we provide flexible storage 
                  options and customizable solutions. Our experienced team works closely with you to 
                  design efficient storage strategies that optimize space utilization and improve 
                  operational efficiency, maintaining complete control and visibility of your stock 
                  at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sections-section">
          <div className="about-container">
            <div className="about-content home-content-container">
              <div className="about-text warehousing-text">
                  <h2>Third Party Logistics (3PL)<span className="title-underline"></span></h2>
                  <p>
                    As your trusted 3PL partner, we extend beyond traditional warehousing to provide 
                    complete logistics solutions. Our integrated services combine warehousing expertise 
                    with comprehensive transportation capabilities, creating seamless end-to-end supply 
                    chain management.
                  </p>
                  <p>
                    Our advanced technology infrastructure and expert team enable efficient inventory 
                    management, order fulfillment, and distribution services. We handle everything from 
                    customs clearance and documentation to final-mile delivery, ensuring your products 
                    reach their destination safely and on time.
                  </p>
                  <p>
                    With our extensive network and fleet capabilities, we can transport goods worldwide 
                    while maintaining full visibility and control throughout the journey. Our optimized 
                    systems and experienced professionals work together to enhance your supply chain 
                    efficiency and support your business growth.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Warehousing;