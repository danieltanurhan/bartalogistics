"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/industries-pages.css'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { useContext } from 'react';

const industrySolutionsItems = [
  {
    text: "Pre-Clearance with the customs to avoid delays for 'just in time' delivery requirements."
  },
  {
    text: "Storage and distribution facility in JAFZA."
  },
  {
    text: "Efficient inventory management system with online visibility to our customers."
  },
  {
    text: "Pick and pack, kitting, repacking, labelling for distribution of spare parts."
  },
  {
    text: "Consultation for documentation solutions to meet consignor and consignee demands."
  },
  {
    text: "Transport solutions via air/sea freight for vehicles and spare parts to meet the lead time requirements."
  },
  {
    text: "Open yard for automobile storage."
  },
  {
    text: "Clearing of vehicles and forwarding."
  },
  {
    text: "Accessory fittings of automobiles."
  },
  {
    text: "Part storage and distribution."
  },
  {
    text: "Reworking – Load and Export."
  },
  {
    text: "Vehicle lashing – Load and secure."
  },
  {
    text: "Customs Inspection."
  }
];


const Automotive = () => {
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Automotive</h1>
            <p>Delivering Excellence, Tailored to You</p>
          </div>
        </div>
      </div>
      <div className="industry-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text">
              <h2>Automotive<span className="title-underline"></span></h2>
              <p>
                Automotive represents the pinnacle of speed and reliability 
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

export default Automotive;