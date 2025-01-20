import React from "react";

const partnersList = [
  {
    src: "/images/partners/bifa.jpg",
    alt: "BIFA Logo",
  },
  {
    src: "/images/partners/iam.jpg",
    alt: "IAM Logo",
  },
  {
    src: "/images/partners/iata.jpg",
    alt: "IATA Logo",
  },
  {
    src: "/images/partners/hm.jpg",
    alt: "HM Revenue & Customs Logo",
  },
  {
    src: "/images/partners/nhs.jpg",
    alt: "NHS Logo",
  },
  {
    src: "/images/partners/bhf.jpg",
    alt: "British Heart Foundation Logo",
  },
];

const Partners = () => {
  return (
    <div className="partners-section">
      <div className="partners-container">
        <div className="horizontal-line"></div>
        <div className="partners-grid">
          {partnersList.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className="partner-logo"
            />
          ))}
        </div>
        <div className="horizontal-line"></div>
      </div>
    </div>
  );
};

export default Partners;