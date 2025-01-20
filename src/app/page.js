"use client";

import "@/styles/globals.css";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, aHandHoldingMedical } from "react-icons/fa";
import { Lightbulb, Globe, Cog, Star, Handshake, Clock } from "lucide-react";
import Service from "@/components/HomePage/Services";
import Industries from "@/components/HomePage/Industries";
import Partners from "@/components/HomePage/Partners";
import InfoSection from "@/components/HomePage/InfoSection";

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
              <h2>Fast & reliable logistic solutions<span className="title-underline"></span></h2>
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
      <InfoSection />
      <Industries />
      <Partners />
    </div>
  );
}
