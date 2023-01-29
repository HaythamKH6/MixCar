import React from 'react'
import '../style.css';
import '../normalize.css';

function Discount() {
    return (
        <div className="discount" id="discount">
          <div className="image">
            <div className="content">
              <h2>We Have A Discount</h2>
              <p>
              A discount is a reduction in the original price of a product or service. It can be offered for a variety of reasons, such as to encourage sales, reward loyalty, or clear inventory. Discounts can be offered in the form of percentage off the original price, a fixed dollar amount, or as a buy-one-get-one-free deal.
              </p>
              <img src="imgs/discount.png" alt="" />
            </div>
          </div>
          <div className="form">
            <div className="content">
              <h2>Request A Discount</h2>
              <form action="true">
                <input className="input" type="text" placeholder="Your Name" name="name" />
                <input className="input" type="email" placeholder="Your Email" name="email" />
                <input className="input" type="text" placeholder="Your Phone" name="mobile" />
                <textarea className="input" placeholder="Tell Us About Your Needs" name="message" defaultValue={""} />
                <input type="submit" defaultValue="Send" />
              </form>
            </div>
          </div>
        </div>
    );
}

export default Discount;