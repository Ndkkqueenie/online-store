import React from 'react';
import backgroundImage from '../../assets/landingImg.png';
import './styles.css';

const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure full viewport height
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div className='main'>
          <h1 className='text'>Now, furniture shopping is simple</h1>
          <p className='text2'>We've got the furniture you need to fill your new home. 
            Browse now for free and get big discounts on everything from tables to lamps!
          </p>
      </div>
    </div>
  );
};

export default LandingPage;