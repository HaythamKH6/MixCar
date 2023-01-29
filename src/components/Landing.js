import React from 'react'
import '../style.css';
import '../normalize.css';


function Landing() {
    return (
        <div className="landing">
          <div className="container">
            <div className="text">
              <h1>Welcome, To MixCar World</h1>
              <p>Find your dream car for rent or purchase on our website. Wide variety of vehicles including luxury, sports and family cars.</p>
            </div>
            <div className="image">
              <img src="../imgs/landing-image.png" alt="img" />
            </div>
          </div>
          <a href="#articles" className="go-down">
            <i className="fas fa-angle-double-down fa-2x" />
          </a>
        </div>
      );
}

export default Landing;