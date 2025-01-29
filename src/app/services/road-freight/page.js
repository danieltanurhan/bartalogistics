"use client";

import { useRouter } from 'next/navigation';
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

const RoadFreight = () => {
  const router = useRouter();
  const { setIsQuoteFormOpen } = useContext(QuoteFormContext);
  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const onCBMClick = () => {
    router.push('/cbm-calculator');
  };

  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Road Freight</h1>
            <p>Reliable Transportation, Every Mile</p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text">
              <h2>Road Freight<span className="title-underline"></span></h2>
              <p>
                Road freight serves as a cornerstone of domestic and regional logistics, 
                offering unmatched flexibility and direct point-to-point delivery solutions. 
                At Barta Logistics, we maintain a robust fleet and extensive partner network 
                to serve diverse transportation needs across continental routes.
              </p>
              <p>
                From full truckload services to specialized cargo handling, our comprehensive 
                road freight solutions accommodate various shipment types and sizes. We prioritize 
                timely delivery and cargo safety, supported by advanced tracking systems and 
                professional drivers.
              </p>
              <p>
                Our expertise in ground transportation logistics ensures optimal route planning 
                and cost-effective solutions for every shipment. Whether you need regular freight 
                services or specialized transportation solutions, our dedicated team delivers 
                reliability and excellence at every step of the journey.
              </p>
              <button className="about-button" onClick={onQuoteClick}>
              REQUEST A QUOTE
              </button>
            </div>
            <div className="about-image">
              <img
                src="/images/services/plane-loading(2).jpg"
                alt="Road Freight"
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
      <div className="footer-cbm-section">
        <div className="home-content-container-cbm">
          <div className="footer-cbm-content">
              <div className="footer-cbm-text">
                <h2>CBM Calculator<span className="title-underline"></span></h2>
                <p>
                  Calculate the CBM of your cargo and get an accurate estimate of
                  its volume and weight.
                </p>
              </div>
              <div className="footer-cbm-button">
                <button className="about-button" onClick={onCBMClick}>
                  Calculate CBM
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default RoadFreight;