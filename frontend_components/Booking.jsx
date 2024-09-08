import React, { useState } from 'react';
import './Booking.css';
import { Link as RouterLink } from 'react-router-dom';

const Booking = () => {
  const [foodProvision, setFoodProvision] = useState(false);
  const [extraLuggage, setExtraLuggage] = useState(false);
  const [businessClass, setBusinessClass] = useState(false);

  const calculateTotalBill = () => {
    let total = 100;
    if (foodProvision) total += 500;
    if (extraLuggage) total += 1000;
    if (businessClass) total += 5000;
    return total;
  };

  return (
    <div className="booking-container">
      <h2 style={{ marginTop: '5px'}}>ADD EXTRAS</h2>
      <div className="options-container">
  <label htmlFor="foodProvision">
    <input
      id="foodProvision"
      type="checkbox"
      checked={foodProvision}
      onChange={() => setFoodProvision(!foodProvision)}
    />
    <span>Refreshments (+ Rs500)</span>
  </label>
  <label htmlFor="extraLuggage">
    <input
      id="extraLuggage"
      type="checkbox"
      checked={extraLuggage}
      onChange={() => setExtraLuggage(!extraLuggage)}
    />
    <span>Extra Baggage (+ Rs1000/kg)</span>
  </label>
  <label htmlFor="businessClass">
    <input
      id="businessClass"
      type="checkbox"
      checked={businessClass}
      onChange={() => setBusinessClass(!businessClass)}
    />
    <span>Business-Class (+ Rs5000)</span>
  </label>
</div>

      <div className="bill-container">
        <h2>Bill</h2>
        <p>Base Fare: Rs 100</p>
        <p>Extras: Rs {foodProvision * 500 + extraLuggage * 1000 + businessClass * 5000}</p>
        <h3>Total: Rs {calculateTotalBill()}</h3>
      </div>
      <div className='proceed-btn'>
        <RouterLink to="/pay" className="btn btn-primary register-btn">Proceed</RouterLink>
      </div>
    </div>
  );
};

export default Booking;
