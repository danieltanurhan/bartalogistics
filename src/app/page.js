"use client";

import '@/styles/globals.css'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Lightbulb, Globe, Cog, Star, Handshake, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <div className="home-intro">
        <div className="home-content-container">
          <div className="home-intro-content home-content">
            <h1>End-to-End Global Logistic Solutions</h1>
            <p>Providing the best logistics services in the world</p>
          </div>
        </div>
        <div className="home-social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="about-section">
        <div className="home-content-container">
          <div className="about-content">
            <div className="about-text">
              <h1>About Us</h1>
              <h2>Fast & reliable logistic solutions</h2>
              <p>We are dedicated to providing exceptional logistics solutions that connect businesses worldwide. With years of experience and a commitment to excellence, we ensure your cargo reaches its destination safely and efficiently.</p>
              <Link href="/about" className="about-button">
                Learn More
              </Link>
            </div>
            <div className="about-image">
              <img src="/images/homepage-aboutus.jpg" alt="About Our Logistics Services" />
            </div>
          </div>
        </div>
      </div>
      <div className="services-section">
        <div className="home-content-container">
          <div className="industries-header">
            <div className="industries-header-content">
              <h2>Services<span className="title-underline"></span></h2>
              <p>For over two and a half decades, Barta Logistics has been operating across a diverse range of industries, demonstrating proficiency and expertise in the following sectors:</p>
            </div>
          </div>
          <div className="services-grid">

            <Link href="/services/international-moving" className="service-card">
              <div className="service-image" style={{backgroundImage: "url('/images/services/international-moving.jpg')"}}>
                <div className="service-overlay">
                  <h3>International Moving</h3>
                  <p>Comprehensive door-to-door moving solutions for businesses and individuals relocating across borders.</p>
                </div>
              </div>
            </Link>

            <Link href="/services/international-moving" className="service-card">
              <div className="service-image" style={{backgroundImage: "url('/images/services/freight-forwarding.jpg')"}}>
                <div className="service-overlay">
                  <h3>Air Freight</h3>
                  <p>Comprehensive door-to-door moving solutions for businesses and individuals relocating across borders.</p>
                </div>
              </div>
            </Link>

            <Link href="/services/international-moving" className="service-card">
              <div className="service-image" style={{backgroundImage: "url('/images/services/freight-forwarding.jpg')"}}>
                <div className="service-overlay">
                  <h3>Sea Freight</h3>
                  <p>Comprehensive door-to-door moving solutions for businesses and individuals relocating across borders.</p>
                </div>
              </div>
            </Link>

            <Link href="/services/international-moving" className="service-card">
              <div className="service-image" style={{backgroundImage: "url('/images/services/freight-forwarding.jpg')"}}>
                <div className="service-overlay">
                  <h3>Land Freight</h3>
                  <p>Comprehensive door-to-door moving solutions for businesses and individuals relocating across borders.</p>
                </div>
              </div>
            </Link>


            <Link href="/services/international-moving" className="service-card">
              <div className="service-image" style={{backgroundImage: "url('/images/services/freight-forwarding.jpg')"}}>
                <div className="service-overlay">
                  <h3>Warehousing</h3>
                  <p>Comprehensive door-to-door moving solutions for businesses and individuals relocating across borders.</p>
                </div>
              </div>
            </Link>

            <Link href="/services/international-moving" className="service-card">
              <div className="service-image" style={{backgroundImage: "url('/images/services/value-added-services.jpg')"}}>
                <div className="service-overlay">
                  <h3>Value Added Services</h3>
                  <p>Comprehensive door-to-door moving solutions for businesses and individuals relocating across borders.</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
      <div className="info-board-section">
        <div className="home-content-container">
          <div className="info-board-grid">
            <div className="info-board-item">
              <div className="info-board-icon">
                <Lightbulb />
              </div>
              <div className="info-board-title">Know How</div>
              <div className="info-board-description">
                With three decades of industry expertise, our seasoned professionals navigate complex logistics challenges with precision and insight, ensuring optimal solutions for every situation.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Globe />
              </div>
              <div className="info-board-title">Global Reach</div>
              <div className="info-board-description">
                Our extensive international network and strategic partnerships enable seamless logistics operations across continents, connecting your business to opportunities worldwide.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Cog />
              </div>
              <div className="info-board-title">Cutting Edge Tech</div>
              <div className="info-board-description">
                Leveraging advanced tracking systems and innovative digital solutions, we optimize your supply chain for maximum efficiency and complete transparency.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Star />
              </div>
              <div className="info-board-title">Customer Satisfaction</div>
              <div className="info-board-description">
                Your success drives our commitment to excellence, with dedicated support teams providing personalized attention and responsive service at every step.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Handshake />
              </div>
              <div className="info-board-title">Reliable Pricing</div>
              <div className="info-board-description">
                Transparent, competitive pricing structures designed to deliver maximum value, with no hidden costs and flexible options tailored to your specific needs.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Clock />
              </div>
              <div className="info-board-title">Saving Time</div>
              <div className="info-board-description">
                Our streamlined processes and efficient operations accelerate your logistics journey, reducing transit times and simplifying complex international movements.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="industries-section">
        <div className="home-content-container">
          <div className="industries-header">
            <div className="industries-header-content">
              <h2>Industries<span className="title-underline"></span></h2>
              <p>For over two and a half decades, Barta Logistics has been operating across a diverse range of industries, demonstrating proficiency and expertise in the following sectors:</p>
            </div>
          </div>
          <div className="industries-grid">
            <div className="industry-card">
              <div className="industry-image" style={{backgroundImage: "url('/images/healthcare.jpg')"}}>
                <div className="industry-icon">
                  <img src="/images/icons/healthcare-icon.svg" alt="Healthcare Icon" />
                </div>
              </div>
              <h3>HEALTHCARE</h3>
            </div>

            <div className="industry-card">
              <div className="industry-image" style={{backgroundImage: "url('/images/automotive.jpg')"}}>
                <div className="industry-icon">
                  <img src="/images/icons/automotive-icon.svg" alt="Automotive Icon" />
                </div>
              </div>
              <h3>AUTOMOTIVE</h3>
            </div>

            <div className="industry-card">
              <div className="industry-image" style={{backgroundImage: "url('/images/technology.jpg')"}}>
                <div className="industry-icon">
                  <img src="/images/icons/technology-icon.svg" alt="Technology Icon" />
                </div>
              </div>
              <h3>TECHNOLOGY</h3>
            </div>

            <div className="industry-card">
              <div className="industry-image" style={{backgroundImage: "url('/images/consumer-goods.jpg')"}}>
                <div className="industry-icon">
                  <img src="/images/icons/retail-icon.svg" alt="Consumer Goods Icon" />
                </div>
              </div>
              <h3>CONSUMER GOODS & RETAIL</h3>
            </div>

            <div className="industry-card">
              <div className="industry-image" style={{backgroundImage: "url('/images/defense.jpg')"}}>
                <div className="industry-icon">
                  <img src="/images/icons/defense-icon.svg" alt="Defense Icon" />
                </div>
              </div>
              <h3>RELIEF CARGO MOVEMENT & DEFENSE</h3>
            </div>

            <div className="industry-card">
              <div className="industry-image" style={{backgroundImage: "url('/images/chemicals.jpg')"}}>
                <div className="industry-icon">
                  <img src="/images/icons/chemicals-icon.svg" alt="Chemicals Icon" />
                </div>
              </div>
              <h3>CHEMICALS</h3>
            </div>

            <div className="industry-card">
              <div className="industry-image" style={{backgroundImage: "url('/images/hospitality.jpg')"}}>
                <div className="industry-icon">
                  <img src="/images/icons/hospitality-icon.svg" alt="Hospitality Icon" />
                </div>
              </div>
              <h3>HOSPITALITY</h3>
            </div>

            <div className="industry-card">
              <div className="industry-image" style={{backgroundImage: "url('/images/oil-gas.jpg')"}}>
                <div className="industry-icon">
                  <img src="/images/icons/oil-gas-icon.svg" alt="Oil and Gas Icon" />
                </div>
              </div>
              <h3>OIL AND GAS</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-section">
        <div className="partners-container">
          <div className="partners-grid">
            <img 
              src="/images/partners/bifa-logo.png" 
              alt="BIFA Logo" 
              className="partner-logo"
            />
            <img 
              src="/images/partners/iam-logo.png" 
              alt="IAM Logo" 
              className="partner-logo"
            />
            <img 
              src="/images/partners/iata-logo.png" 
              alt="IATA Logo" 
              className="partner-logo"
            />
            <img 
              src="/images/partners/hmrc-logo.png" 
              alt="HM Revenue & Customs Logo" 
              className="partner-logo"
            />
            <img 
              src="/images/partners/nhs-logo.png" 
              alt="NHS Logo" 
              className="partner-logo"
            />
            <img 
              src="/images/partners/bhf-logo.png" 
              alt="British Heart Foundation Logo" 
              className="partner-logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}