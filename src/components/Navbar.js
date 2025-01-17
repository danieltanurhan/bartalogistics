"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, ChevronLeft } from 'lucide-react';
import QuoteForm from './QuoteForm';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    setShowServices(false);
  };

  const servicesLinks = [
    { href: '/services/international-moving', text: 'International Moving' },
    { href: '/services/air-freight', text: 'Air Freight' },
    { href: '/services/sea-freight', text: 'Sea Freight' },
    { href: '/services/road-freight', text: 'Road Freight' },
    { href: '/services/rail-freight', text: 'Rail Freight' },
    { href: '/services/land-freight', text: 'Warehousing' },
    { href: '/services/value-added', text: 'Value Added Services' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <button 
              className="navbar-menu-btn"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
            <Link href="/" className="navbar-logo">
              <img src="/images/logo1.png" alt="Barta Logistics Logo" />
            </Link>
          </div>

          <div className="navbar-center">
            <ul className="navbar-nav-desktop">
              <li><Link href="/about">ABOUT US</Link></li>
              <li className="services-dropdown">
                <Link href="#" className="navbar-link">SERVICES</Link>
                <ul className="dropdown-menu">
                  {servicesLinks.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href}>{service.text}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link href="/blog">BLOG</Link></li>
            </ul>
          </div>

          <div className="navbar-right">
            <button 
              className="navbar-quote-btn"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={handleSidebarClose} />
      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        {showServices ? (
          <div className="sidebar-content">
            <button 
              className="sidebar-back-btn"
              onClick={() => setShowServices(false)}
            >
              <ChevronLeft /> Back
            </button>
            <ul className="sidebar-nav">
              {servicesLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} onClick={handleSidebarClose}>
                    {service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="sidebar-content">
            <ul className="sidebar-nav">
              <li><Link href="/about" onClick={handleSidebarClose}>ABOUT US</Link></li>
              <li>
                <button 
                  className="sidebar-services-btn"
                  onClick={() => setShowServices(true)}
                >
                  SERVICES
                </button>
              </li>
              <li><Link href="/blog" onClick={handleSidebarClose}>BLOG</Link></li>
            </ul>
          </div>
        )}
      </aside>

      {/* Quote Form Modal */}
      <QuoteForm 
        isOpen={isQuoteFormOpen} 
        onClose={() => setIsQuoteFormOpen(false)} 
      />
    </>
  );
};

export default Navbar;