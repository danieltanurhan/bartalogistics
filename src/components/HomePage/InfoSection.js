import React from 'react';
import { Lightbulb, Truck, Globe, ShieldCheck } from 'lucide-react';
import '@/styles/globals.css';
import { Scale, Network, Clock, Shield } from 'lucide-react';

const infoItems = [
  {
    icon: <Scale size={64} />,
    title: "Proven Track Record",
    description: "Decades of successful logistics operations worldwide, delivering excellence through experience and continuous innovation in global freight solutions."
  },
  {
    icon: <Network size={64} />,
    title: "Worldwide Coverage",
    description: "Strategic partnerships and established routes across six continents ensure your cargo reaches any destination efficiently and cost-effectively."
  },
  {
    icon: <Clock size={64} />,
    title: "24/7 Support",
    description: "Round-the-clock customer service and real-time tracking capabilities keep you informed and in control of your shipments at all times."
  },
  {
    icon: <Shield size={64} />,
    title: "Secure Solutions",
    description: "Advanced security protocols and certified handling procedures guarantee the safety and integrity of your cargo throughout its journey."
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