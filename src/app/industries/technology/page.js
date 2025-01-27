"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/industries-pages.css'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';

const Technology = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const industrySolutionsItems = [
    { text: "Specialized handling of sensitive electronic equipment" }, 
    { text: "White glove delivery services for high-value tech assets" }, 
    { text: "Data center logistics and equipment transportation" }, 
    { text: "Supply chain solutions for semiconductor industry" }, 
    { text: "Clean room logistics and specialized packaging" }, 
    { text: "Time-critical delivery for tech manufacturing" }, 
    { text: "Secure transportation of valuable tech components" }, 
    { text: "IT infrastructure relocation services" }, 
    { text: "End-to-end visibility with advanced tracking systems" }, 
    { text: "Custom logistics solutions for tech startups and enterprises" }
   ];

  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Technology Industry Logistics</h1>
            <p>Advanced Logistics for the Digital Age</p>
          </div>
        </div>
      </div>
      <div className="industry-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text">
              <h2>Technology<span className="title-underline"></span></h2>
              <p>
                In today's rapidly evolving technology sector, precision logistics is 
                crucial for maintaining competitive advantage. At Barta Logistics, we 
                understand the unique challenges of technology supply chains and provide 
                specialized solutions for handling sensitive electronic equipment and 
                high-value components.
              </p>
              <p>
                Our technology logistics services cater to diverse needs, from semiconductor 
                manufacturing to data center equipment transportation. We employ advanced 
                handling procedures and specialized packaging solutions to ensure the safe 
                delivery of sensitive tech assets. Our white glove services provide extra 
                care for high-value equipment, while our real-time tracking systems offer 
                complete visibility throughout the supply chain.
              </p>
              <p>
                With extensive experience in technology logistics, we've built a reputation 
                for reliability and precision. Our dedicated team understands the critical 
                nature of tech supply chains and provides customized solutions to meet the 
                unique requirements of each client. Whether you're a startup scaling operations 
                or an established enterprise managing global supply chains, we deliver the 
                expertise and care your technology assets demand.
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

export default Technology;