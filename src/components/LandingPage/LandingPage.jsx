import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import backgroundImage from '../../assets/landingImg.png'; // Import your background image

const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure full viewport height
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <h1>Welcome to Our Online Store</h1>
        <p>Discover amazing products at great prices.</p>
        <Link to="/products">
          <Button variant="contained" style={buttonStyle}>
            Explore Products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;