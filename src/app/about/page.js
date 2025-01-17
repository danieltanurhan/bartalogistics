  "use client";

import '@/styles/aboutus.css'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

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
    </div>
  )
}