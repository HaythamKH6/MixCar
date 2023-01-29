import React from 'react';
import '../style.css';
import '../normalize.css';


function Brands() {
      return (
        <div className="gallery" id="brands">
          <h2 className="main-title">Brands</h2>
          <div className="container">
            <div className="box">
              <div className="image">
                <img src="imgs/brand-01.png" alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="imgs/brand-02.png" alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="imgs/brand-03.png" alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="imgs/brand-04.png" alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="imgs/brand-05.png" alt="" />
              </div>
            </div>
            <div className="box">
              <div className="image">
                <img src="imgs/brand-06.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Brands;