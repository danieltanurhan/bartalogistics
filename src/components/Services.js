import React from "react";
import Link from "next/link";

const Service = () => {
  const serviceList = [
    {
      id: 1,
      href: "",
      title: "Global Freight Services",
      description:
        "Efficient and reliable global freight solutions tailored to your business needs.",
      image: "https://loremflickr.com/400/300/?random=1",
    },
    {
      id: 2,
      href: "",
      title: "Warehouse Solutions",
      description:
        "State-of-the-art warehouse facilities to streamline your storage requirements.",
      image: "https://loremflickr.com/400/300/?random=2",
    },
    {
      id: 3,
      href: "",
      title: "Customs Brokerage",
      description:
        "Simplify customs clearance with our experienced team of brokers.",
      image: "https://loremflickr.com/400/300/?random=3",
    },
    {
      id: 4,
      href: "",
      title: "Supply Chain Optimization",
      description:
        "Optimize your supply chain for maximum efficiency and cost savings.",
      image: "https://loremflickr.com/400/300/?random=4",
    },
    {
      id: 5,
      href: "",
      title: "E-commerce Fulfillment",
      description:
        "Comprehensive solutions for fast and accurate order fulfillment.",
      image: "https://loremflickr.com/400/300/?random=5",
    },
    {
      id: 6,
      href: "",
      title: "Project Logistics",
      description:
        "Expert logistics management for complex and large-scale projects.",
      image: "https://loremflickr.com/400/300/?random=6",
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
                href="/services/international-moving"
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
