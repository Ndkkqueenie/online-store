import React from 'react';
import './homepage.css'; // Add your CSS file path
import './globals.css';
import './styleguide.css';

function Homepage() {
  return (
    <div className="macbook-pro">
      <div className="div">
        <div className="overlap">
            <div className="group">
              <p className="now-furniture">Now, Furniture Shopping Is Simple</p>
            </div>
            <div className="frame">
              <div className="div-wrapper"><a href='#popular' className="text-wrapper">Explore</a></div>
            </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <img className="vector-2" src="https://c.animaapp.com/1tJnT5Iq/img/vector-2.svg" alt='Categories'/>
            <div className="text-wrapper-5" id='popular'>Popular Categories</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
