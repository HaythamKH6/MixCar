import React from 'react'
import '../style.css';
import '../normalize.css';

function CarsDistribution() {
    return (
        <div className="cars-distribution" id="cars-distribution">
          <h2 className="main-title">Cars Distribution</h2>
          <div className="container">
            <img src="imgs/cars.png" alt="" />
            <div className="cars">
              <div className="car">
                <h3>Dacia <span>45%</span></h3>
                <div className="the-progress">
                  <span style={{width: 0}} data-width="45%" />
                </div>
              </div>
              <div className="car">
                <h3>Renault <span>30%</span></h3>
                <div className="the-progress">
                  <span style={{width: 0}} data-width="30%" />
                </div>
              </div>
              <div className="car">
                <h3>Volkswagen <span>15%</span></h3>
                <div className="the-progress">
                  <span style={{width: 0}} data-width="15%" />
                </div>
              </div>
              <div className="car">
                <h3>Others <span>10%</span></h3>
                <div className="the-progress">
                  <span style={{width: 0}} data-width="10%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}


export default CarsDistribution;