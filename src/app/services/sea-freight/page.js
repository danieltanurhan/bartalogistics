"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { Lightbulb, Truck, Globe, ShieldCheck } from 'lucide-react';
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

const SeaFreight = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  return (
    <div>
      <div className="home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Sea Freight</h1>
            <p>Global Reach, Reliable Service</p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text">
              <h2>Sea Freight<span className="title-underline"></span></h2>
              <p>
                Sea freight serves as the foundation of global trade, providing cost-effective 
                solutions for international cargo movement. At Barta Logistics, we offer 
                comprehensive ocean freight services through strategic partnerships with 
                leading maritime carriers worldwide.
              </p>
              <p>
                Our services span both FCL and LCL shipments, accommodating diverse cargo 
                needs and volumes. With advanced tracking capabilities and experienced 
                logistics professionals, we ensure your shipments move efficiently across 
                major shipping routes.
              </p>
              <p>
                Decades of maritime logistics expertise enable us to handle everything from 
                standard containers to specialized cargo requirements. Our global network 
                and industry knowledge ensure reliable, cost-effective transportation 
                solutions for your international shipping needs.
              </p>
              <button className="about-button" onClick={onQuoteClick}>
              REQUEST A QUOTE
              </button>
            </div>
            <div className="about-image">
              <img
                src="/images/services/plane-loading(2).jpg"
                alt="Sea Freight"
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
    </div>
  )
};

export default SeaFreight;