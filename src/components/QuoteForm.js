"use client";

import { useState } from 'react';
import '@/styles/quoteform.css';


const QuoteForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    companyName: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitMessage('Quote request sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          companyName: '',
          service: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setSubmitMessage(`Error sending quote request: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Error sending quote request. Please try again.');
    }
  
    setIsSubmitting(false);
  };

  // ... rest of the component (render method, etc.)

  if (!isOpen) return null;

  return (
    <>
      <div className="quote-form-overlay" onClick={(e) => {
        // Only close if clicking the overlay itself, not its children
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}>  
        <div className="quote-form-container">
          <button className="close-button" onClick={onClose}>×</button>
          
          <h2>Request a quote</h2>
          <p>Please fill up the form below:</p>
          
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
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
            
            <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuoteForm;