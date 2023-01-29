import React from 'react'
import '../style.css';
import '../normalize.css';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
            <div className="box">
                <h3>MixCar</h3>
                <ul className="social">
                <li>
                    <a href="#" className="facebook">
                    <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li>
                    <a href="#" className="twitter">
                    <i className="fab fa-twitter" />
                    </a>
                </li>
                <li>
                    <a href="#" className="youtube">
                    <i className="fab fa-youtube" />
                    </a>
                </li>
                </ul>
                <p className="text">
                Find your perfect rental or for-sale car on our website. Wide selection, excellent customer service, contact us to learn more.
                </p>
            </div>
            <div className="box">
                <ul className="links">
                <li><a href="#">Important Link 1</a></li>
                <li><a href="#">Important Link 2</a></li>
                <li><a href="#">Important Link 3</a></li>
                <li><a href="#">Important Link 4</a></li>
                <li><a href="#">Important Link 5</a></li>
                </ul>
            </div>
            <div className="box">
                <div className="line">
                <i className="fas fa-map-marker-alt fa-fw" />
                <div className="info">Morocco, Larache, Street Number 15</div>
                </div>
                <div className="line">
                <i className="far fa-clock fa-fw" />
                <div className="info">Agency Open: From 08:30 To 18:30</div>
                </div>
                <div className="line">
                <i className="fas fa-phone-volume fa-fw" />
                <div className="info">
                    <span>+212-5222-98632</span>
                    <span>+212-6333-15786</span>
                </div>
                </div>
            </div>
            <div className="box footer-gallery">
                <img src="imgs/brand-01.png" alt="" />
                <img src="imgs/brand-02.png" alt="" />
                <img src="imgs/brand-03.png" alt="" />
                <img src="imgs/brand-04.png" alt="" />
                <img src="imgs/brand-05.png" alt="" />
                <img src="imgs/brand-06.png" alt="" />
            </div>
            </div>
            <p className="copyright">All Rights Reserved &#xa9; MixCar</p>
        </div>
      );
}

export default Footer;



