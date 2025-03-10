"use client";

import '@/styles/globals.css'
import Link from 'next/link'
import styles from './sitemap.module.css'

const SitemapPage = () => {
  const siteStructure = {
    "Home": "/",
    "About Us": "/about",
    "Services": {
      "Air Freight": "/services/air-freight",
      "Sea Freight": "/services/sea-freight",
      "Road Freight": "/services/road-freight",
      "Rail Freight": "/services/rail-freight",
      "International Moving": "/services/international-moving",
      "Warehousing": "/services/warehousing",
      "Value Added Services": "/services/value-added",
    },
    "Industries": {
      "Automotive": "/industries/automotive",
      "Technology": "/industries/technology",
      "Consumer Goods & Retail": "/industries/consumer-goods-and-retail",
      "Relief Cargo Movement & Defense": "/industries/relief-cargo-movement-and-defense",
      "Chemicals": "/industries/chemicals",
      "Perishables": "/industries/perishables",
      "Antique & Arts": "/industries/antique-and-arts",
      "Fair & Events": "/industries/fair-and-events",
    },
    "Tools": {
      "CBM Calculator": "/cbm-calculator",
    },
    "Resources": {
      "Blog": "/blog",
      "Contact": "/contact",
    }
  };

  return (
    <div className={styles.sitemapContainer}>
      <h1>Sitemap</h1>
      <div className={styles.sitemapContent}>
        {Object.entries(siteStructure).map(([category, items]) => (
          <div key={category} className={styles.category}>
            <h2>{category}</h2>
            <ul>
              {typeof items === 'string' ? (
                <li>
                  <Link href={items}>{category}</Link>
                </li>
              ) : (
                Object.entries(items).map(([name, path]) => (
                  <li key={path}>
                    <Link href={path}>{name}</Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitemapPage;
