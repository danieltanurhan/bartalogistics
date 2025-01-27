"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/industries-pages.css'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';

const ConsumerGoods = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const industrySolutionsItems = [
    { text: "Omnichannel fulfillment solutions" },
    { text: "Inventory management and forecasting" },
    { text: "Reverse logistics and returns processing" },
    { text: "Last-mile delivery optimization" },
    { text: "Cross-border e-commerce logistics" },
    { text: "Seasonal demand management" },
    { text: "Product customization and kitting" },
    { text: "Sustainable packaging solutions" },
  ];

  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Consumer Goods & Retail Industry Logistics</h1>
            <p>Delivering Delight from Warehouse to Doorstep</p>
          </div>
        </div>
      </div>
      <div className="industry-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text">
              <h2>Consumer Goods & Retail<span className="title-underline"></span></h2>
              <p>In the fast-paced world of consumer goods and retail, staying ahead means adapting quickly to changing consumer demands. Our logistics solutions are designed to keep your products moving efficiently from manufacturer to end consumer, whether through traditional retail channels or e-commerce platforms.</p>
              <p>We understand the challenges of managing diverse product lines, fluctuating demand, and the increasing pressure for faster deliveries. Our integrated approach combines cutting-edge technology, strategic warehouse locations, and flexible transportation options to ensure your products reach consumers when and where they want them.</p>
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

export default ConsumerGoods;