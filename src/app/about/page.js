  "use client";

import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Lightbulb, Truck, Globe, ShieldCheck } from 'lucide-react';
import '@/styles/globals.css';
import { RiShieldStarLine, RiGlobalLine, RiCustomerService2Line, RiFlightTakeoffLine } from 'react-icons/ri';

const differenceItems = [
  {
    icon: <RiGlobalLine size={64} className="difference-icon" />,
    title: "Global Network",
    description: "Strategic partnerships across key markets enable us to provide comprehensive logistics solutions worldwide, ensuring seamless cargo movement across continents."
  },
  {
    icon: <RiCustomerService2Line size={64} className="difference-icon" />,
    title: "Customer-Centric Culture",
    description: "Our dedicated team focuses on understanding and meeting client needs, providing personalized solutions and superior service at every touchpoint."
  },
  {
    icon: <RiFlightTakeoffLine size={64} className="difference-icon" />,
    title: "Specialist Solutions",
    description: "Expertise in handling complex logistics challenges with tailored approaches, leveraging our industry knowledge and innovative methodologies."
  },
  {
    icon: <RiShieldStarLine size={64} className="difference-icon" />,
    title: "Digital Excellence", 
    description: "Advanced tracking systems and digital solutions ensure real-time visibility and efficient management of your cargo throughout its journey."
  }
];

export default function AboutUs() {
  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>About Us</h1>
            <p>We provide top-notch logistics solutions tailored to your needs.</p>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text">
              <h2>Fast & reliable logistic solutions<span className="title-underline"></span></h2>
              <p>
                We are dedicated to providing exceptional logistics solutions
                that connect businesses worldwide. With years of experience and
                a commitment to excellence, we ensure your cargo reaches its
                destination safely and efficiently.
              </p>
              <p>
                We are dedicated to providing exceptional logistics solutions
                that connect businesses worldwide. With years of experience and
                a commitment to excellence, we ensure your cargo reaches its
                destination safely and efficiently.
              </p>
              <p>
                We are dedicated to providing exceptional logistics solutions
                that connect businesses worldwide. With years of experience and
                a commitment to excellence, we ensure your cargo reaches its
                destination safely and efficiently.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/images/services/plane-trail-sky.jpg"
                alt="About Our Logistics Services"
              />
            </div>
          </div>
        </div>
      </div>
      <div className ="mission-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="mission-image">
              <img
                src="/images/aboutus/mission.jpg"
                alt="About Our Logistics Services"
              />
            </div>
            <div className="mission-text">
              <h2>Our Mission<span className="title-underline"></span></h2>
              <p>Our mission is to become the leading global logistics provider, delivering exceptional services to our clients.</p>
              <p>Through innovative solutions, sustainable practices, and unwavering commitment to excellence, we strive to connect businesses worldwide while ensuring reliability, efficiency, and complete customer satisfaction in every shipment we handle.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mission-section">
        <div className="home-content-container">
          <div className="section-header">
            <div className="section-header-content">
              <h2>What Makes Us Different<span className="title-underline"></span></h2>
              <p>Our mission is to become the leading global logistics provider, delivering exceptional services to our clients.</p>
            </div>
            <div className="section-header-extra-content">
            </div>
          </div>
          <div className="what-different-content">
            <div className="difference-grid">
              {differenceItems.map((item, index) => (
                <div key={index} className="difference-item">
                  <div className="difference-content">
                    <div className="difference-icon-wrapper">
                      {item.icon}
                    </div>
                    <h3 className="difference-title">{item.title}</h3>
                    <p className="difference-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}