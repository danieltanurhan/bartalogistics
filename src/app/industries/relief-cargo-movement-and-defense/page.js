"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/industries-pages.css'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';

const ReliefCargo = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const industrySolutionsItems = [
    { text: "Emergency response logistics for humanitarian aid and disaster relief" }, 
    { text: "Secure transportation of military and defense equipment" }, 
    { text: "Strategic airlift capabilities for urgent cargo deployment" }, 
    { text: "Medical supply chain management for relief operations" }, 
    { text: "Specialized handling of sensitive defense materials" }, 
    { text: "Rapid deployment solutions for emergency situations" }, 
    { text: "Customs clearance for international relief efforts" }, 
    { text: "Warehousing and distribution for humanitarian supplies" }, 
    { text: "24/7 emergency logistics coordination" }, 
    { text: "Track and trace systems for critical shipments" }
  ];

  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Relief, Cargo Movement & Defense Industry Logistics</h1>
            <p>Critical Logistics for When It Matters Most</p>
          </div>
        </div>
      </div>
      <div className="industry-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text">
              <h2>Relief, Cargo Movement & Defense<span className="title-underline"></span></h2>
              <p>
                In times of crisis and urgent need, reliable logistics becomes more than just 
                transportation – it becomes a lifeline. At Barta Logistics, we specialize in 
                providing critical logistics solutions for humanitarian relief operations, 
                defense logistics, and emergency response situations.
              </p>
              <p>
                Our expertise spans across emergency relief logistics, military cargo 
                movement, and humanitarian aid distribution. We understand the unique challenges 
                of time-critical situations and sensitive cargo handling. Our dedicated team 
                works around the clock to ensure rapid deployment and secure transportation 
                of essential supplies and equipment.
              </p>
              <p>
                With decades of experience in handling complex logistics operations, we've 
                developed robust systems and protocols to manage sensitive cargo movement 
                efficiently and securely. Whether it's disaster relief supplies, military 
                equipment, or humanitarian aid, our team ensures every shipment reaches its 
                destination safely and on time, even in the most challenging circumstances.
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
  )
};

export default ReliefCargo;