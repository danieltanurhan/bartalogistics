import React from 'react';
import '@/styles/globals.css';
import Image from 'next/image';

const infoItems = [
  {
    icon: "/images/flaticons/delivery-man.png",
    title: "Proven Track Record",
    description: "Decades of successful logistics operations worldwide, delivering excellence through experience and continuous innovation in global freight solutions."
  },
  {
    icon: "/images/flaticons/logistics.png",
    title: "Worldwide Network",
    description: "Our extensive worldwide network enables us to provide seamless logistics solutions across continents, connecting businesses to opportunities around the globe."
  },
  {
    icon: "/images/flaticons/supply-chain-management.png",
    title: "Customized Solutions",
    description: "We understand that every business is unique. That's why we offer tailored logistics solutions to meet your specific needs, ensuring efficiency and cost-effectiveness."
  },
  {
    icon: "/images/flaticons/logistics1.png",
    title: "Reliable Service",
    description: "Count on us for consistent, dependable service. Our commitment to reliability means your cargo is in safe hands from pickup to delivery, every time."
  }
];

const InfoSection = () => {
  return (
    <div className="info-board-section">
      <div className="home-content-container">
        <div className="info-board-grid">
          {infoItems.map((item, index) => (
            <div key={index} className="info-board-item">
              <div className="info-board-icon">
                <img 
                  src={item.icon}
                  alt={item.title}
                  width="64"
                  height="64"
                />
              </div>
              <div className="info-board-content">
                <div className="info-board-title">{item.title}</div>
                <div className="info-board-description">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;