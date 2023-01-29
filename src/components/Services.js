import React from 'react'
import '../style.css';
import '../normalize.css';

function Services() {
    return (
        <div className="services" id="services">
          <h2 className="main-title">Services</h2>
          <div className="container">
            <div className="box">
              <i className="fas fa-user-shield fa-4x" />
              <h3>Security</h3>
              <div className="info">
                <a href="#">Details</a>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-tools fa-4x" />
              <h3>Fixing Problems</h3>
              <div className="info">
                <a href="#">Details</a>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-map-marked-alt fa-4x" />
              <h3>Location</h3>
              <div className="info">
                <a href="#">Details</a>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-headphones fa-4x" />
              <h3>Support</h3>
              <div className="info">
                <a href="#">Details</a>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-credit-card fa-4x" />
              <h3>Online Payment</h3>
              <div className="info">
                <a href="#">Design</a>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-rocket fa-4x" />
              <h3>Express delivery</h3>
              <div className="info">
                <a href="#">Details</a>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Services;