import React from 'react'
import '../style.css';
import '../normalize.css';

function Stats() {
    return (
        <div className="stats" id="stats">
          <h2>Our Awesome Stats</h2>
          <div className="container">
            <div className="box">
              <i className="far fa-user fa-2x fa-fw" />
              <span className="number" data-goal={150}>0</span>
              <span className="text">Clients</span>
            </div>
            <div className="box">
              <i className="fas fa-brands fa-sellsy fa-2x fa-fw" />
              <span className="number" data-goal={135}>0</span>
              <span className="text">Sales</span>
            </div>
            <div className="box">
              <i className="fas fa-globe-asia fa-2x fa-fw" />
              <span className="number" data-goal={50}>0</span>
              <span className="text">Countries</span>
            </div>
            <div className="box">
              <i className="far fa-money-bill-alt fa-2x fa-fw" />
              <span className="number" data-goal={500}>0</span>
              <span className="text">Money</span>
            </div>
          </div>
        </div>
      );
}

export default Stats;