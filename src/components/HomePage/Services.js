import React from "react";
import Link from "next/link";

const Service = () => {
  const serviceList = [
    {
      id: 1,
      href: "/services/international-moving",
      title: "International Moving",
      description:
        "Efficient and reliable global freight solutions tailored to your business.",
      image: "/images/containers-loading.jpg",
    },
    {
      id: 2,
      href: "/services/air-freight",
      title: "Air Freight",
      description:
        "State-of-the-art warehouse facilities to streamline your storage requirements.",
      image: "/images/plane-loading.jpg",
    },
    {
      id: 3,
      href: "/services/sea-freight",
      title: "Sea Freight",
      description:
        "Simplify customs clearance with our experienced team of brokers.",
      image: "/images/ship-dock-loading.jpg",
    },
    {
      id: 4,
      href: "/services/road-freight",
      title: "Road Freight",
      description:
        "Optimize your supply chain for maximum efficiency and cost savings.",
      image: "/images/trucks-birdseye.jpg",
    },
    {
      id: 5,
      href: "/services/rail-freight",
      title: "Rail Freight",
      description:
        "Comprehensive solutions for fast and accurate order fulfillment.",
      image:"/images/services/shipping.jpg",
    },
    {
      id: 6,
      href: "/services/warehousing",
      title: "Warehousing",
      description:
        "Expert logistics management for complex and large-scale projects.",
      image: "/images/warehouse.jpg",
    },
  ];

  return (
    <div>
      <div className="sections-section">
        <div className="home-content-container">
          <div className="section-header">
            <div className="section-header-content">
              <h2>
                Services<span className="title-underline"></span>
              </h2>
              <p>
                For over two and a half decades, Barta Logistics has been
                operating across a diverse range of industries, demonstrating
                proficiency and expertise in the following sectors:
              </p>
            </div>
          </div>
          <div className="services-grid">
            {serviceList.map((ele, index) => (
              <Link
                key={index}
                href={ele.href}
                className="service-card"
              >
                <div  className="wrapper">
                  <div className="image">
                    <img src={ele.image} alt="" />

                    <div className="content">
                      <h3>{ele.title}<span className="title-underline"></span></h3>
                      <p>{ele.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
