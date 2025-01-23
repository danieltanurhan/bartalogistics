"use client";

import Link from 'next/link';
import '@/styles/footer.css';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    {/* Logo Section */}
                    <div className="footer-logo">
                        <img src="/images/logo1.png" alt="Barta Logistics Logo" />
                    </div>

                    <div className='footer-mid-links'>
                        {/* Quick Links Section */}
                        <div className="footer-section">
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/cbm-calculator">CBM Calculator</Link></li>
                            </ul>
                        </div>

                        {/* Services Section */}
                        <div className="footer-section">
                            <ul>
                                <li><Link href="/services/international-moving">International Moving</Link></li>
                                <li><Link href="/services/air-freight">Air Freight</Link></li>
                                <li><Link href="/services/sea-freight">Sea Freight</Link></li>
                                <li><Link href="/services/road-freight">Road Freight</Link></li>
                                <li><Link href="/services/rail-freight">Rail Freight</Link></li>
                                <li><Link href="/services/warehousing">Warehousing</Link></li>
                                <li><Link href="/services/value-added">Value Added Services</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* Social Media Section */}
                    <div className="footer-section">
                        
                        <div className="social-icons">
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
                </div>

                {/* Copyright Section */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Barta Logistics. All rights reserved.</p>
                    <p>DCT</p>
                </div>
            </div>
        </footer>
    );
}