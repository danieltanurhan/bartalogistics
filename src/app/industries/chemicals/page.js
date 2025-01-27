"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/industries-pages.css'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';

const Chemicals = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const industrySolutionsItems = [
    { text: "Hazardous materials handling and transportation" },
    { text: "Temperature-controlled storage and shipping" },
    { text: "Compliance with international chemical regulations" },
    { text: "Specialized packaging for reactive substances" },
    { text: "Emergency response planning" },
    { text: "Real-time tracking and monitoring" },
    { text: "Custom documentation for chemical shipments" },
    { text: "Bulk liquid and gas logistics" },
  ];

  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Chemical Industry Logistics</h1>
            <p>Safely Transporting the Building Blocks of Industry</p>
          </div>
        </div>
      </div>
      <div className="industry-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text">
              <h2>Chemicals<span className="title-underline"></span></h2>
              <p>In the complex world of chemical logistics, safety and precision are paramount. Our dedicated team understands the unique challenges of transporting and storing chemical products. We offer comprehensive solutions that ensure compliance with international regulations while maintaining the integrity of your products.</p>
              <p>From hazardous materials to temperature-sensitive compounds, our state-of-the-art facilities and expert handling procedures guarantee that your chemical shipments are managed with the utmost care and efficiency. We prioritize safety, environmental responsibility, and timely delivery to keep your supply chain running smoothly.</p>

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
  )
};

export default Chemicals;