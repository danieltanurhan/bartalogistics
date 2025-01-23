import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import '@/styles/contact.css'

const Contact = () => {
  return (
    <div>
      <div className="home-intro">
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
        </div>
      </div>
    </div>
  )
};

export default Contact;