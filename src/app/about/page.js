  "use client";

import '@/styles/aboutus.css'
import '@/styles/globals.css'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Lightbulb, Truck, Globe, ShieldCheck } from 'lucide-react';
import '@/styles/globals.css';

const differenceItems = [
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

export default function AboutUs() {
  return (
    <div>
      <div className="home-intro">
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
                src="/images/air-freight/plane-trail-sky.jpg"
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
                src="/images/aboutus/mission.png"
                alt="About Our Logistics Services"
              />
            </div>
            <div className="mission-text">
              <h2>Our Mission<span className="title-underline"></span></h2>
              <p>Our mission is to become the leading global logistics provider, delivering exceptional services to our clients.</p>
              <h2>Our Mission<span className="title-underline"></span></h2>
              <p>Our mission is to become the leading global logistics provider, delivering exceptional services to our clients.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sections-section">
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
            <div className="info-board-grid">
              {differenceItems.map((item, index) => (
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
      </div>
    </div>
  )
}