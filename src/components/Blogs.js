import React from 'react'
import '../style.css';
import '../normalize.css';

function Blogs() {
    return (
        <div>
          <div className="articles" id="articles">
            <h2 className="main-title">Articles</h2>
            <div className="container">
              <div className="box">
                <img src="../imgs/cat-01.jpg" alt="" />
                <div className="content">
                  <h3>The best way to drive cars</h3>
                  <p>The best way to drive a car is to follow the rules of the road, obey ...</p>
                </div>
                <div className="info">
                  <a href>Read More</a>
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
              <div className="box">
                <img src="imgs/cat-02.jpg" alt="" />
                <div className="content">
                  <h3>If your car battery is down</h3>
                  <p>If your car battery is dead, there are a few things you can try to get it started again ...</p>
                </div>
                <div className="info">
                  <a href>Read More</a>
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
              <div className="box">
                <img src="imgs/cat-03.jpg" alt="" />
                <div className="content">
                  <h3>The best way to give trip</h3>
                  <p>The best way to give a trip would depend on the specific context, such as the location ...</p>
                </div>
                <div className="info">
                  <a href>Read More</a>
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
              <div className="box">
                <img src="imgs/cat-04.jpg" alt="" />
                <div className="content">
                  <h3>The uses of rain repellent</h3>
                  <p>Rain repellent is a liquid or spray that is applied to car windshields and windows ...</p>
                </div>
                <div className="info">
                  <a href>Read More</a>
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
              <div className="box">
                <img src="imgs/cat-05.jpg" alt="" />
                <div className="content">
                  <h3>Simple safety tips for the winter weather</h3>
                  <p>Winter weather can be unpredictable and dangerous, so it's important ...</p>
                </div>
                <div className="info">
                  <a href>Read More</a>
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
              <div className="box">
                <img src="imgs/cat-06.jpg" alt="" />
                <div className="content">
                  <h3>The Best Electric Cars — Ranked</h3>
                  <p>Electric cars (EVs) have become increasingly popular in recent years ...</p>
                </div>
                <div className="info">
                  <a href>Read More</a>
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
              <div className="box">
                <img src="imgs/cat-07.jpg" alt="" />
                <div className="content">
                  <h3>3 car brands that are long-term investments</h3>
                  <p>When it comes to car brands that are considered long-term investments ...</p>
                </div>
                <div className="info">
                  <a href>Read More</a>
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
              <div className="box">
                <img src="imgs/cat-08.jpg" alt="" />
                <div className="content">
                  <h3>Top Tips To Follow Before Purchasing GAP Insurance</h3>
                  <p>Gap insurance, also known as Guaranteed Asset Protection insurance ...</p>
                </div>
                <div className="info">
                  <a href>Read More</a>
                  <i className="fas fa-long-arrow-alt-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="spikes" />
        </div>
    );
}

export default Blogs;