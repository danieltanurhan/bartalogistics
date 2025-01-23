"use client";

import { QuoteFormContext } from '@/components/QuoteFormContext.js';
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import '@/styles/blog.css'
import { Lightbulb, Truck, Globe, ShieldCheck } from 'lucide-react';
import { useContext } from 'react';

const blogItems = [
  {
    image: "/images/services/international-moving.jpg",
    alt: "International Moving Image",
    title: "Know How",
    date: "May 1, 2023",
    description: "With three decades of industry expertise, our seasoned professionals navigate complex logistics challenges with precision and insight, ensuring optimal solutions for every situation."
  },
  {
    image: "/images/services/international-moving.jpg",
    alt: "International Moving Image",
    title: "Global Network",
    date: "May 1, 2023",
    description: "Our extensive worldwide network enables us to provide seamless logistics solutions across continents, connecting businesses to opportunities around the globe."
  },
  {
    image: "/images/services/international-moving.jpg",
    alt: "International Moving Image",
    title: "Customized Solutions",
    date: "May 1, 2023",
    description: "We understand that every business is unique. That's why we offer tailored logistics solutions to meet your specific needs, ensuring efficiency and cost-effectiveness."
  }
];

const Blog = () => {
  return (
    <div>
      <div className="home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Blog</h1>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="home-content-container">
          <div className="blog-content-container">
            <div className="blog-grid">
              {blogItems.map((item, index) => (
                  <div key={index} className="blog-item">
                    <div className="blog-image">
                      <img src={item.image} alt={item.alt} />
                    </div>
                    <div className="blog-content">
                      <div className="blog-title">{item.title}</div>
                      <div className="blog-date">{item.date}</div>
                      <div className="blog-description">
                        {item.description}
                      </div>
                      <button className="read-button" onClick={'/'}>
                        READ MORE
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="blog-nav">
              <div className="blog-search">
                  <input type="text" placeholder="Search blog posts..." />
                  <button type="button">Search</button>
              </div>
              <div className="blog-recent">
                  <h2>Recent Posts</h2>
                  <div className="blog-recent-grid">
                      {blogItems.slice(0, 3).map((item, index) => (
                          <div key={index} className="blog-recent-item">
                            <div className="blog-recent-date">{item.date}</div>
                            <div className="blog-recent-title">{item.title}</div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Blog;