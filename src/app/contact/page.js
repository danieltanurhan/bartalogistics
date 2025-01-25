"use client";

import { useState } from 'react';

import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import '@/styles/contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    companyName: '',
    service: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        setFormData({
          name: '', email: '', phone: '', 
          location: '', companyName: '', 
          service: '', message: ''
        });
      } else {
        setSubmitStatus('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('Error sending message');
      console.error(error);
    }
  };
  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Contact Us</h1>
            <p>Connect with us for the best solutions</p>
          </div>
        </div>
      </div>
      <div className="sections-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text warehousing-text contact-text">
              <h2>Contact us directly below by providing the required information<span className="title-underline"></span></h2>
              <form className="quote-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                  <input 
                    type="text" 
                    name="location"
                    placeholder="Location" 
                    value={formData.location}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <input 
                    type="text" 
                    name="companyName"
                    placeholder="Company Name" 
                    value={formData.companyName}
                    onChange={handleChange}
                    required 
                  />
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Services</option>
                    <option value="international-moving">International Moving</option>
                    <option value="air-freight">Air Freight</option>
                    <option value="sea-freight">Sea Freight</option>
                    <option value="road-freight">Road Freight</option>
                    <option value="rail-freight">Rail Freight</option>
                    <option value="warehousing">Warehousing</option>
                    <option value="value-added">Value Added Services</option>
                  </select>
                </div>
                
                <textarea 
                  name="message"
                  placeholder="Requirement" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                
                {submitStatus && <div>{submitStatus}</div>}
                
                <button type="submit" className="submit-button">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;