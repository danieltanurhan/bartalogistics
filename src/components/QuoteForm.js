"use client";

import '@/styles/quoteform.css';

const QuoteForm = ({ isOpen, onClose }) => {
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
          
          <form className="quote-form">
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="tel" placeholder="Phone" required />
            </div>
            
            <div className="form-row">
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Location" required />
            </div>
            
            <div className="form-row">
              <input type="text" placeholder="Company Name" required />
              <select required>
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
            
            <textarea placeholder="Requirement" required></textarea>
            
            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QuoteForm;