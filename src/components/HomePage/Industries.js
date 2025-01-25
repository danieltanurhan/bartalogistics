import React from "react";
import Link from "next/link";
import { FaHandHoldingMedical, FaCar, FaMicrochip, FaShoppingCart, FaShieldAlt, FaFlask, FaHotel, FaOilCan } from "react-icons/fa";

const Industries = () => {

  // Industries List, Automative, Technology, Consumer Goods and Retail, Relief Cargo Movement and Defense, Chemicals, Perishables, Antique and Arts, Fair and Events
  const industryList = [
    {
      icon: <FaHandHoldingMedical />,
      title: "Healthcare",
      image: "https://loremflickr.com/400/300/?random=2",
    },
    {
      icon: <FaCar />,
      title: "Automotive",
      image: "https://loremflickr.com/400/300/?random=2",
    },
    {
      icon: <FaMicrochip />,
      title: "Technology",
      image: "https://loremflickr.com/400/300/?random=3",
    },
    {
      icon: <FaShoppingCart />,
      title: "Consumer Goods & Retail",
      image: "https://loremflickr.com/400/300/?random=4",
    },
    {
      icon: <FaShieldAlt />,
      title: "Relief Cargo Movement & Defense",
      image: "https://loremflickr.com/400/300/?random=5",
    },
    {
      icon: <FaFlask />,
      title: "Chemicals",
      image: "https://loremflickr.com/400/300/?random=6",
    },
    {
      icon: <FaHotel />,
      title: "Hospitality",
      image: "https://loremflickr.com/400/300/?random=7",
    },
    {
      icon: <FaOilCan />,
      title: "Oil and Gas",
      image: "https://loremflickr.com/400/300/?random=8",
    },
  ];

  return (
    <div>
      <div className="sections-section">
        <div className="home-content-container">
          <div className="section-header">
            <div className="section-header-content">
              <h2>
                Industries<span className="title-underline"></span>
              </h2>
              <p>
                For over two and a half decades, Barta Logistics has been
                operating across a diverse range of industries, demonstrating
                proficiency and expertise in the following sectors:
              </p>
            </div>
          </div>
          <div className="industries-grid">
            {industryList.map((industry, index) => (
              <div key={index} className="industry-card">
                <div
                  className="industry-image"
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className="industry-icon">
                    {industry.icon}
                  </div>
                </div>
                <h3>{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;