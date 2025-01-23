'use client';

import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import '@/styles/contact.css'
import '@/styles/cbm.css'
import { useState } from 'react'

const CMBCalculator = () => {
  const [unit, setUnit] = useState('centimeter');
  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };
  const [dimensions, setDimensions] = useState({
    width: '',
    height: '',
    length: '',
    quantity: '',
    grossWeight: ''
  })
  const [results, setResults] = useState(null)

  const handleInputChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: e.target.value })
  }

  const calculateCBM = () => {
    const { width, height, length, quantity = 0.0, grossWeight = 0.0 } = dimensions;
    let volume;
  
    switch(unit) {
      case 'meter':
        volume = width * height * length;
        break;
      case 'centimeter':
        volume = (width * height * length) / 1000000;
        break;
      case 'millimeter':
        volume = (width * height * length) / 1000000000;
        break;
      default:
        volume = (width * height * length) / 1000000; // default to centimeter
    }
  
    const volumeCubicFeet = volume * 35.3147;
    const volumetricWeight = volume * 167;
    
    setResults({
      volume,
      volumeCubicFeet,
      volumetricWeight,
      totalVolume: volume * quantity,
      totalVolumetricWeight: volumetricWeight * quantity,
      chargeableCBM: Math.max(volumetricWeight * quantity, grossWeight * quantity)
    });
  };

  return (
    <div>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>CBM Calculator</h1>
            <p>Simplify Your Shipping with Accurate Volume Calculations</p>
          </div>
        </div>
      </div>
      <div className="sections-section cbm-section">
        <div className="about-container">
          <div className="about-content home-content-container">
            <div className="about-text warehousing-text contact-text cbm-text"> 
              <h2>Calculater your Cubic Meter</h2>   

              <div className="cbm-form">
                <div className="cbm-form-row">
                  <select className='cbm-input' value={unit} onChange={handleUnitChange} required>
                    <option value="meter">Meter</option>
                    <option value="centimeter">Centimeter</option>
                    <option value="millimeter">Millimeter</option>
                  </select>
                  <input
                    type="number"
                    name="width"
                    placeholder="Width (cm)"
                    value={dimensions.width}
                    onChange={handleInputChange}
                    className="cbm-input"
                  />
                  
                </div>
                <div className="cbm-form-row">
                  <input
                    type="number"
                    name="height"
                    placeholder="Height (cm)"
                    value={dimensions.height}
                    onChange={handleInputChange}
                    className="cbm-input"
                  />
                  <input
                    type="number"
                    name="length"
                    placeholder="Length (cm)"
                    value={dimensions.length}
                    onChange={handleInputChange}
                    className="cbm-input"
                  />
                  
                </div>
                <div className="cbm-form-row">
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={dimensions.quantity}
                    onChange={handleInputChange}
                    className="cbm-input"
                  />
                  <input
                    type="number"
                    name="grossWeight"
                    placeholder="Gross Weight (kg)"
                    value={dimensions.grossWeight}
                    onChange={handleInputChange}
                    className="cbm-input"
                  />
                </div>
                <button onClick={calculateCBM} className="cbm-button">Calculate</button>
              </div>

              {results && (
                <div className="cbm-results">
                  <h2>Results:</h2>
                  <p><strong>Volume:</strong> {results.volume.toFixed(3)} m³</p>
                  <p><strong>Volume:</strong> {results.volumeCubicFeet.toFixed(3)} ft³</p>
                  <p><strong>Volumetric Weight (Air):</strong>{results.volumetricWeight.toFixed(3)} kg</p>
                  <p><strong>Total Volume:</strong>{results.totalVolume.toFixed(3)} m³</p>
                  <p><strong>Total Volumetric Weight (Air):</strong>{results.totalVolumetricWeight.toFixed(3)} kg</p>
                  <p><strong>Chargeable CBM:</strong> {results.chargeableCBM.toFixed(3)} kg</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="sections-section">
        <div className='about-container'>
          <div className='about-content home-content-container'>
            <div className="about-text warehousing-text contact-text">
              <div className="cbm-info">         
                <h2>How to Use the CBM Calculator</h2>
                <h3>1. Input Dimensions:</h3>
                <p>Enter the length, width, and height of your cargo in centimeters.
                  Our calculator is designed to handle various cargo sizes, making
                  it versatile for different shipping needs.
                </p>

                <h3>2. Calculate:</h3>
                <p>Click the "Calculate" button to get the volume in cubic meters.
                    The CBM Calculator instantly processes your input, delivering 
                    quick results to help you move forward with your shipping plans.
                </p>

                <h3>3. Review Results:</h3>
                <p>Use the calculated CBM to streamline your shipping arrangements and 
                  packaging. Accurate volume measurements allow for better planning and 
                  efficient utilization of container space.
                </p>
                

                
                <h2>Benefits of Accurate CBM Calculations</h2>
                <h3>Optimized Shipping Costs</h3>
                <p>Accurate volume measurements help estimate shipping costs more precisely. By knowing the exact CBM of your cargo, you can better negotiate rates with freight forwarding companies in the UK and ensure you are paying a fair price.</p>
                
                <h3>Efficient Logistics</h3>
                <p>Proper measurements aid in utilizing container space more effectively. This efficiency not only saves money but also reduces the environmental impact by optimizing the use of shipping resources.</p>
                
                <h3>Better Planning</h3>
                <p>Accurate volume data supports improved inventory and shipment planning. It enables you to organize your logistics more effectively, ensuring timely deliveries and satisfied customers.</p>
                
                <h3>Enhanced Operational Efficiency</h3>
                <p>Using our CBM Calculator ensures that your shipping operations are streamlined. This tool is an integral part of our commitment to providing top-notch logistic and shipping services in the UK.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CMBCalculator;