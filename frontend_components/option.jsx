import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  // Inline styles for the main container
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  // Inline styles for the heading
  const headingStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
  };

  // Inline styles for the description text
  const descriptionStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
  };

  // Inline styles for the buttons container
  const buttonContainerStyle = {
    display: 'flex', // Flex layout for buttons to be side-by-side
    justifyContent: 'center', // Center the buttons horizontally
    gap: '20px', // Space between buttons
  };

  // Inline styles for the buttons
  const buttonStyle = {
    padding: '10px 20px', // Padding for the button
    fontSize: '1rem', // Font size
    cursor: 'pointer', // Change cursor to pointer on hover
    border: 'none', // No border
    backgroundColor: '#3498db', // Blue background color
    color: 'white', // White text color
    borderRadius: '5px', // Rounded corners
  };

  // Handlers for navigation when buttons are clicked
  const handleLoginClick = () => {
    navigate('/login'); // Redirect to the login page
  };

  const handleSignupClick = () => {
    navigate('/sign'); // Redirect to the signup page
  };

  return (
    <div style={containerStyle}> {/* Main container with inline styles */}
    <p style={descriptionStyle}>To book tickets, LOGIN or SIGN UP for free.!!
    </p>

      <div style={buttonContainerStyle}> {/* Container for buttons, side-by-side */}
        <button style={buttonStyle} onClick={handleLoginClick}>Login</button> {/* Login button */}
        <button style={buttonStyle} onClick={handleSignupClick}>Sign Up</button> {/* Signup button */}
      </div>
    </div>
  );
};

export default WelcomePage;
