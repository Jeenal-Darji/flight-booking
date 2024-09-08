import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCreditCard, FaQrcode } from 'react-icons/fa';
import { BsQrCode } from 'react-icons/bs';
import './Payement.css';
import { Link as RouterLink } from 'react-router-dom';


const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [errors, setErrors] = useState({});
  const [upiId, setUpiId] = useState('');
  const [progress, setProgress] = useState(0);
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(true);
  const [showButton3, setShowButton3] = useState(false);
  const [icon, setIcon] = useState(true);
  const [icon1, setIcon1] = useState(true);
  const [p1, setP1] = useState(false);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleupiChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleButtonClick1 = () => {
    setShowForm1(true);
    setShowForm2(false);
    setShowButton1(false); 
    setShowButton2(false);
    setProgress(0);
    setShowButton3(true);
    setIcon(false);
    setIcon1(false);
    setP1(true);
  };

  const handleButtonClick2 = () => {
    setShowForm2(true);
    setShowForm1(false);
    setShowButton1(false);
    setShowButton2(false);
    setProgress(0);
    setShowButton3(true);
    setIcon(false);
    setIcon1(false);
    setP1(true);
  };

  const Back = () => {
    setShowButton1(true);
    setShowButton2(true);
    setShowForm1(false);
    setShowForm2(false);
    setShowButton3(false);
    setIcon(true);
    setIcon1(true);
    setP1(false);
  };

  const handlePaymentSubmit1 = (e) => {
    e.preventDefault();
    const errors = {};
    const cardNumberRegex = /^\d{16}$/;
    const cvvRegex = /^\d{3,4}$/;
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (!cardNumberRegex.test(cardNumber)) {
      errors.cardNumber = 'Invalid card number';
    }
    if (!cvvRegex.test(cvv)) {
      errors.cvv = 'Invalid CVV';
    }
    if (!expirationDateRegex.test(expirationDate)) {
      errors.expirationDate = 'Invalid expiration date';
    }

    if (Object.keys(errors).length === 0) {
      const timer = setInterval(() => {
        if (progress + 20 <= 100) {
          setProgress((prevProgress) => prevProgress + 20);
        } else {
          clearInterval(timer);
        }
        if (progress === 100) {
          setShowButton(true);
        }
      }, 1000);
    }

    setErrors(errors);
  };

  const handlePaymentSubmit2 = (e) => {
    e.preventDefault();
    const errors = {};
    const upiIdRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+$/;

    if (!upiIdRegex.test(upiId)) {
      errors.upiId = 'Invalid UPI ID';
    }

    if (Object.keys(errors).length === 0) {
      const timer = setInterval(() => {
        if (progress + 20 <= 100) {
          setProgress((prevProgress) => prevProgress + 20);
        } else {
          clearInterval(timer);
        }
        if (progress === 100) {
          setShowButton(true);
        }
      }, 1000);
    }

    setErrors(errors);
  };

  useEffect(() => {
    if (progress === 100) {
      setShowButton(true);
      setShowButton3(false);
    }
  }, [progress]);
  const successStyle = {
    marginTop: '5px',
    fontSize: '18px',
    color: 'green',
    textAlign: 'center',
  };

  const progressStyle = {
    marginTop: '5px',
    color: 'black',
    width: '550px',
    height: '30px',
  };

  return (
    <>
      <div className='home'>  
      <RouterLink to="/home" className="btn btn-primary me-4 login-btn">HOME</RouterLink>

      </div>
      <div className='wrapper1' style={{  display: 'flex',
          flexDirection: 'column',}}>
        <h1>Payment Method</h1>
        <div className="button1">
          <br/>
          <br/>
          {!showForm1 && showButton1 && (
            <button onClick={handleButtonClick1}>CREDIT</button>)} {icon && (<FaCreditCard className="icon" size={40}/>)}
        </div>
        <br/>
        <div className="button2">
          {!showForm2 && showButton2 && (
            <button onClick={handleButtonClick2}>UPI</button>)} {icon1 &&(<FaQrcode className="icon1" size={40} color="black" />)}
        </div>
        {showButton3 && (
          <button onClick={Back}>back</button>
        )}
        {showForm1 && (
          <form id="form" onSubmit={handlePaymentSubmit1}>
            <div className="input-box">
              <input type="cardnumber" placeholder='Card-Number' value={cardNumber} onChange={handleCardNumberChange} required/>
              {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}
            </div>
            <div className="input-box">
              <input type="expirationdate" placeholder='Expiration-Date' value={expirationDate} onChange={handleExpirationDateChange} required/>
              {errors.expirationDate && <p style={{ color: 'red' }}>{errors.expirationDate}</p>}
            </div>
            <div className="input-box">
              <input type="cvv" placeholder='CVV' value={cvv} onChange={handleCVVChange} required/>
              {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" required/>I agree to terms and conditions mentioned by the FLYHIGH</label>
              <br/>
            </div>
            <button type="submit">Pay Now</button>
          </form>
        )}
        {showForm2 && (
          <form id="form1" onSubmit={handlePaymentSubmit2}>
            <div className="input-box">
              <input type="upiId" placeholder='UPI-ID' value={upiId} onChange={handleupiChange} required/>
              {errors.upiId && <p style={{ color: 'red' }}>{errors.upiId}</p>}
            </div>
            <h1>OR</h1>
            <div className='QR'>
              <BsQrCode  size={150}/>
            </div>
            <br/>
            <div className="remember">
              <label><input type="checkbox" required/>I agree to terms and conditions mentioned by the FLYHIGH</label>
              <br/>
              <br/>
            </div>
            <button type="submit">Pay Now</button>
          </form>
        )}
        <br/>
        <div>
          {p1 && (
            <progress style={progressStyle} value={progress} max="100" >hello</progress>
          )}
          {progress === 100 && <p style={successStyle}>Successful</p>}
        </div> 
        <div className="pass">
          {showButton && (
            <button><Link to="/pass" className='link'>Proceed</Link></button>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;
