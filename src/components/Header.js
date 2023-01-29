import React from 'react'
import '../style.css';
import '../normalize.css';

function Header() {
    return (
        <div className="header" id="header">
          <div className="container">
            <a href="#" className="logo">MixCar</a>
            <ul className="main-nav">
              <li><a href="#articles">Articles</a></li>
              <li><a href="#brands">Brands</a></li>
              <li><a href="#features">Features</a></li>
              <li>
                <a href="#">Other Links</a>
                {/* Start Megamenu */}
                <div className="mega-menu">
                  <div className="image">
                    <img src="../imgs/megamenu.png" alt="" />
                  </div>
                  <ul className="links">
                    <li>
                      <a href="#testimonials"><i className="far fa-comments fa-fw" /> Testimonials</a>
                    </li>
                    <li>
                      <a href="#team"><i className="far fa-user fa-fw" /> Team Members</a>
                    </li>
                    <li>
                      <a href="#services"><i className="far fa-building fa-fw" /> Services</a>
                    </li>
                    <li>
                      <a href="#cars-distribution"><i className="far fa-solid fa-book fa-fw" /> Cars Distribution</a>
                    </li>
                    <li>
                      <a href="#stats"><i className="far fa-chart-bar fa-fw" /> Stats</a>
                    </li>
                    <li>
                      <a href="#discount"><i className="fas fa-percent fa-fw" /> Request A Discount</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">
                        <button className="signup-btn">Sign Up Now</button>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Megamenu */}
              </li>
            </ul>
          </div>
        </div>
      );
}

export default Header;



