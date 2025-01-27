import React from "react";
import Link from "next/link";
import { FaHandHoldingMedical, FaCar, FaMicrochip, FaShoppingCart, FaShieldAlt, FaFlask, FaHotel, FaOilCan } from "react-icons/fa";

const Industries = () => {

  // Industries List, Automative, Technology, Consumer Goods and Retail, Relief Cargo Movement and Defense, Chemicals, Perishables, Antique and Arts, Fair and Events
  const industryList = [
    {
      icon: <FaCar />,
      href: "/industries/automotive",
      title: "Automotive",
      image: "https://loremflickr.com/400/300/?random=2",
    },
    {
      icon: <FaMicrochip />,
      href: "/industries/technology",
      title: "Technology",
      image: "https://loremflickr.com/400/300/?random=3",
    },
    {
      icon: <FaShoppingCart />,
      href: "/industries/consumer-goods-and-retail",
      title: "Consumer Goods & Retail",
      image: "https://loremflickr.com/400/300/?random=4",
    },
    {
      icon: <FaShieldAlt />,
      href: "/industries/relief-cargo-movement-and-defense",
      title: "Relief Cargo Movement & Defense",
      image: "https://loremflickr.com/400/300/?random=5",
    },
    {
      icon: <FaFlask />,
      href: "/industries/chemicals",
      title: "Chemicals",
      image: "https://loremflickr.com/400/300/?random=6",
    },
    {
      icon: <FaHotel />,
      href: "/industries/perishables",
      title: "Perishables",
      image: "https://loremflickr.com/400/300/?random=7",
    },
    {
      icon: <FaOilCan />,
      href: "/industries/antique-and-arts",
      title: "Antique and Arts",
      image: "https://loremflickr.com/400/300/?random=8",
    },
    {
      icon: <FaHandHoldingMedical />,
      href: "/industries/fair-and-events",
      title: "Fair and Events",
      image: "https://loremflickr.com/400/300/?random=1",
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
              <Link
                key={index} 
                href={industry.href} 
                className="industry-card"
                style={{textDecoration: 'none'}}
              >
                <div
                  className="industry-image"
                  style={{ backgroundImage: `url(${industry.image})` }}
                >
                  <div className="industry-icon">
                    {industry.icon}
                  </div>
                </div>
                <h3>{industry.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;