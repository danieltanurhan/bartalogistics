"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import QuoteForm from './QuoteForm';
import '@/styles/navbar.css';

const servicesLinks = [
  { href: '/services/international-moving', text: 'International Moving' },
  { href: '/services/air-freight', text: 'Air Freight' },
  { href: '/services/sea-freight', text: 'Sea Freight' },
  { href: '/services/road-freight', text: 'Road Freight' },
  { href: '/services/rail-freight', text: 'Rail Freight' },
  { href: '/services/land-freight', text: 'Warehousing' },
  { href: '/services/value-added', text: 'Value Added Services' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const onQuoteClick = () => {
    setIsQuoteFormOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    setShowServices(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <button className="navbar-menu-btn" onClick={onMenuClick} aria-label="Open menu">
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
            <button className="navbar-quote-btn" onClick={onQuoteClick}>
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </nav>

      <Sidebar
        isOpen={isSidebarOpen}
        showServices={showServices}
        onClose={handleSidebarClose}
        onShowServices={() => setShowServices(true)}
        onHideServices={() => setShowServices(false)}
      />
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  );
};

const Sidebar = ({ isOpen, showServices, onClose, onShowServices, onHideServices }) => (
  <>
    <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      {showServices ? (
        <SidebarServices onBack={onHideServices} onClose={onClose} />
      ) : (
        <SidebarMain onShowServices={onShowServices} onClose={onClose} />
      )}
    </aside>
  </>
);

const SidebarMain = ({ onShowServices, onClose }) => (
  <div className="sidebar-content">
    <button className="sidebar-close-btn" onClick={onClose}>×</button>
    <ul className="sidebar-nav">
      <li><Link href="/about" onClick={onClose}>ABOUT US</Link></li>
      <li>
        <button className="sidebar-services-btn" onClick={onShowServices}>
          SERVICES <ChevronRight />
        </button>
      </li>
      <li><Link href="/blog" onClick={onClose}>BLOG</Link></li>
    </ul>
  </div>
);

const SidebarServices = ({ onBack, onClose }) => (
  <div className="sidebar-content">
    <button className="sidebar-back-btn" onClick={onBack}>
      <ChevronLeft /> Back
    </button>
    <ul className="sidebar-nav">
      {servicesLinks.map((service) => (
        <li key={service.href}>
          <Link href={service.href} onClick={onClose}>
            {service.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;