"use client";

import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import QuoteForm from './QuoteForm';
import '@/styles/navbar.css';


const servicesItems = [
  { name: "International Moving", href: "/services/international-moving" },
  { name: "Air Freight", href: "/services/air-freight" },
  { name: "Sea Freight", href: "/services/sea-freight" },
  { name: "Road Freight", href: "/services/road-freight" },
  { name: "Rail Freight", href: "/services/rail-freight" },
  { name: "Warehousing", href: "/services/warehousing" },
  { name: "Value Added Services", href: "/services/value-added" },
];

const industriesItems = [
  { name: "Automotive", href: "/industries/automotive" },
  { name: "Technology", href: "/industries/technology" },
  { name: "Chemicals", href: "/industries/chemicals" },
  { name: "Consumer Goods & Retail", href: "/industries/consumer-goods-and-retail" },
  { name: "Fair and Events", href: "/industries/fair-and-events" },
  { name: "Perishables", href: "/industries/perishables" },
  { name: "Relief Cargo Movement & Defense", href: "/industries/relief-cargo-movement-and-defense" },
  { name: "Antique & Arts", href: "/industries/antique-and-arts" },
];

const Navbar = ({ isQuoteFormOpen, setIsQuoteFormOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

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
                <a className="navbar-link" style={{ cursor: 'default' }}>SERVICES</a>
                <ul className="dropdown-menu">
                  {servicesItems.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href}>{service.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="services-dropdown">
                <a className="navbar-link" style={{ cursor: 'default' }}>INDUSTRIES</a>
                <ul className="dropdown-menu">
                  {industriesItems.map((industry) => (
                    <li key={industry.href}>
                      <Link href={industry.href}>{industry.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link href="/blog">BLOG</Link></li>
              <li><Link href="/contact">CONTACT US</Link></li>
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
        showIndustries={showIndustries}
        onClose={handleSidebarClose}
        onShowServices={() => setShowServices(true)}
        onHideServices={() => setShowServices(false)}
        onShowIndustries={() => setShowIndustries(true)}
        onHideIndustries={() => setShowIndustries(false)}
      />
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </>
  );
};

const Sidebar = ({ 
  isOpen, 
  showServices, 
  showIndustries, 
  onClose, 
  onShowServices, 
  onHideServices,
  onShowIndustries,
  onHideIndustries 
}) => (
  <>
    <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      {showServices ? (
        <SidebarServices onBack={onHideServices} onClose={onClose} />
      ) : showIndustries ? (
        <SidebarIndustries onBack={onHideIndustries} onClose={onClose} />
      ) : (
        <SidebarMain 
          onShowServices={onShowServices} 
          onShowIndustries={onShowIndustries} 
          onClose={onClose} 
        />
      )}
    </aside>
  </>
);

const SidebarMain = ({ onShowServices, onShowIndustries, onClose }) => (
  <div className="sidebar-content">
    <Link href="/" className="navbar-logo">
      <img src="/images/logo1.png" alt="Barta Logistics Logo" />
    </Link>
    <button className="sidebar-close-btn" onClick={onClose}>×</button>
    <ul className="sidebar-nav">
      <li><Link href="/about" onClick={onClose}>ABOUT US</Link></li>
      <li>
        <button className="sidebar-services-btn" onClick={onShowServices}>
          SERVICES <ChevronRight />
        </button>
      </li>
      <li>
        <button className="sidebar-services-btn" onClick={onShowIndustries}>
          INDUSTRIES <ChevronRight />
        </button>
      </li>
      <li><Link href="/blog" onClick={onClose}>BLOG</Link></li>
      <li><Link href="/contact" onClick={onClose}>CONTACT US</Link></li>
    </ul>
  </div>
);

const SidebarServices = ({ onBack, onClose }) => (
  <div className="sidebar-content">
    <button className="sidebar-back-btn" onClick={onBack}>
      <ChevronLeft /> Back
    </button>
    <ul className="sidebar-nav">
      {servicesItems.map((service) => (
        <li key={service.href}>
          <Link href={service.href} onClick={onClose}>
            {service.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SidebarIndustries = ({ onBack, onClose }) => (
  <div className="sidebar-content">
    <button className="sidebar-back-btn" onClick={onBack}>
      <ChevronLeft /> Back
    </button>
    <ul className="sidebar-nav">
      {industriesItems.map((industry) => (
        <li key={industry.href}>
          <Link href={industry.href} onClick={onClose}>
            {industry.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;