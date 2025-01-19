"use client";

import "@/styles/globals.css";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, aHandHoldingMedical } from "react-icons/fa";
import { Lightbulb, Globe, Cog, Star, Handshake, Clock } from "lucide-react";
import Service from "@/components/Services";
import Industries from "@/components/Industries";
import Partners from "@/components/Partners";

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
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
              <p>
                We are dedicated to providing exceptional logistics solutions
                that connect businesses worldwide. With years of experience and
                a commitment to excellence, we ensure your cargo reaches its
                destination safely and efficiently.
              </p>
              <Link href="/about" className="about-button">
                Learn More
              </Link>
            </div>
            <div className="about-image">
              <img
                src="/images/homepage-aboutus.jpg"
                alt="About Our Logistics Services"
              />
            </div>
          </div>
        </div>
      </div>
      <Service />
      <div className="info-board-section">
        <div className="home-content-container">
          <div className="info-board-grid">
            <div className="info-board-item">
              <div className="info-board-icon">
                <Lightbulb />
              </div>
              <div className="info-board-title">Know How</div>
              <div className="info-board-description">
                With three decades of industry expertise, our seasoned
                professionals navigate complex logistics challenges with
                precision and insight, ensuring optimal solutions for every
                situation.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Globe />
              </div>
              <div className="info-board-title">Global Reach</div>
              <div className="info-board-description">
                Our extensive international network and strategic partnerships
                enable seamless logistics operations across continents,
                connecting your business to opportunities worldwide.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Cog />
              </div>
              <div className="info-board-title">Cutting Edge Tech</div>
              <div className="info-board-description">
                Leveraging advanced tracking systems and innovative digital
                solutions, we optimize your supply chain for maximum efficiency
                and complete transparency.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Star />
              </div>
              <div className="info-board-title">Customer Satisfaction</div>
              <div className="info-board-description">
                Your success drives our commitment to excellence, with dedicated
                support teams providing personalized attention and responsive
                service at every step.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Handshake />
              </div>
              <div className="info-board-title">Reliable Pricing</div>
              <div className="info-board-description">
                Transparent, competitive pricing structures designed to deliver
                maximum value, with no hidden costs and flexible options
                tailored to your specific needs.
              </div>
            </div>

            <div className="info-board-item">
              <div className="info-board-icon">
                <Clock />
              </div>
              <div className="info-board-title">Saving Time</div>
              <div className="info-board-description">
                Our streamlined processes and efficient operations accelerate
                your logistics journey, reducing transit times and simplifying
                complex international movements.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Industries />
      <Partners />
    </div>
  );
}
