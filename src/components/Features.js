import React from 'react'
import '../style.css';
import '../normalize.css';

function Features() {
    return (
        <div className="features" id="features">
            <h2 className="main-title">Features</h2>
            <div className="container">
            <div className="box rent">
                <div className="img-holder"><img src="imgs/features-01.jpg" alt="" /></div>
                <h2>Rent</h2>
                <p>Search functionality to find available vehicles based on location, date, and type of vehicle</p>
                <a href="#">More</a>
            </div>
            <div className="box reserve">
                <div className="img-holder"><img src="imgs/features-02.jpg" alt="" /></div>
                <h2>Reserve</h2>
                <p>Online booking and reservation system: Allows users to reserve and pay for their rental car online</p>
                <a href="#">More</a>
            </div>
            <div className="box view">
                <div className="img-holder"><img src="imgs/features-03.jpg" alt="" /></div>
                <h2>View</h2>
                <p>Ability to view vehicle details include images, pricing, desciption for the available vehicles rental</p>
                <a href="#">More</a>
            </div>
            </div>
        </div>
    );
}

export default Features;



