import React from 'react';
import { Lightbulb, Truck, Globe, ShieldCheck } from 'lucide-react';
import '@/styles/globals.css';
const infoItems = [
  {
    icon: <Lightbulb size={64} />,
    title: "Know How",
    description: "With three decades of industry expertise, our seasoned professionals navigate complex logistics challenges with precision and insight, ensuring optimal solutions for every situation."
  },
  {
    icon: <Truck size={64} />,
    title: "Global Network",
    description: "Our extensive worldwide network enables us to provide seamless logistics solutions across continents, connecting businesses to opportunities around the globe."
  },
  {
    icon: <Globe size={64} />,
    title: "Customized Solutions",
    description: "We understand that every business is unique. That's why we offer tailored logistics solutions to meet your specific needs, ensuring efficiency and cost-effectiveness."
  },
  {
    icon: <ShieldCheck size={64} />,
    title: "Reliability",
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
                {item.icon}
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