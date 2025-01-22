"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { Lightbulb, Truck, Globe, ShieldCheck, Warehouse } from 'lucide-react';
import { useContext } from 'react';

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

const ValueAdded = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  return (
    <div>
      <div className="home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Value Added Services</h1>
            <p>Beyond Logistics, Creating Value</p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text warehousing-text">
              <h2>Value Added Services<span className="title-underline"></span></h2>
              <p>
                At Barta Logistics, we go beyond traditional logistics to provide comprehensive 
                value-added services that enhance your supply chain. From customs clearance and 
                warehousing to personal storage and specialized insurance solutions, our services 
                are designed to provide the additional support your business needs to thrive in 
                today's complex logistics environment.
              </p>
              <p>
                Our licensed customs brokers bring decades of expertise in handling complex border 
                movements, while our state-of-the-art warehousing facilities offer flexible 
                storage options with advanced inventory management systems. For individual clients, 
                we provide secure personal storage solutions with climate-controlled units and 
                24/7 security monitoring.
              </p>
              <p>
                Understanding that protection is crucial, we offer comprehensive cargo insurance 
                solutions that safeguard your shipments against various risks. Our team excels 
                at developing customized strategies for unique logistics challenges, drawing on 
                three decades of industry expertise to create innovative solutions that deliver 
                measurable results.
              </p>
              <button className="about-button" onClick={onQuoteClick}>
              REQUEST A QUOTE
              </button>
            </div>
            {/* <div className="about-image">
              <img
                src="/images/services/plane-loading(2).jpg"
                alt="Sea Freight"
              />
            </div> */}
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
  )
};

export default ValueAdded;