import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [nameError, setNameError] = useState('');
  const [mobileError, setMobileError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    if (!e.target.value) {
      setMobileError('Mobile Number is required');
    } else if (!/^\d{10}$/.test(e.target.value)) {
      setMobileError('Invalid mobile number');
    } else {
      setMobileError('');
    }
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    if (!name) {
      setNameError('Name is required');
    }
    if (!mobile) {
      setMobileError('Mobile Number is required');
    } else if (!/^\d{10}$/.test(mobile)) {
      setMobileError('Invalid mobile number');
    }

    if (name && mobile && !mobileError) {
      // You would typically make an API request here to send an OTP to the user's mobile number.
      // For this example, we'll just set a flag to simulate OTP sent.
      setIsOtpSent(true);
    }
  };

  const handleLogin = () => {
    // You would typically make an API request to validate the OTP here.
    // For this example, we'll just log the details.
    console.log('Name:', name);
    console.log('Mobile:', mobile);
    console.log('OTP:', otp);
  };

  return (
    <Container fluid className='login_container_fluid'>
    <Container className="login_maincontainer">
    <img className="ice_img"src={require("../assests/ice.jpg")}alt=""/>
      <form className=''>
      <h2 className='login_heading'>Login !</h2>
      <p style={{lineHeight:"normal",marginTop:"-12px",width:"100%", fontSize:"14px"}}>Unlock Exclusive Deals with Your Secure Login</p>
        <div className='mt-2'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={`input-field ${nameError ? 'input-error' : ''}`}
            value={name}
            onChange={handleNameChange}
          />
          <div className="error-message">
          {nameError && <span className="error-message">{nameError}</span>}
        </div>
        </div>
        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            className={`input-field ${mobileError ? 'input-error' : ''}`}
            value={mobile}
            onChange={handleMobileChange}
          />
            <div className="error-message">
          {mobileError && <span className="error-message">{mobileError}</span>}
        </div>
        </div>
        {isOtpSent ? (
          <div>
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              className="input-field"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
        ) : null}
        <button
          type="button"
          className="submit-button"
          onClick={isOtpSent ? handleLogin : handleSendOtp}
        >
          {isOtpSent ? 'Login' : 'Send OTP'}
        </button>
      </form>
   
    </Container>
    </Container>
  );
}

export default Login;
