import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-columns">
            <h5>CONNECT WITH US</h5>
            <p>FACEBOOK: <a href="#">HOMEAFFAIRSFURNITURE</a></p>
            <p>INSTAGRAM: <a href="#">@HOMEAFFAIRSFURNITURE</a></p>
            <p>TWITTER: <a href="#">@HOMEAFFAIRSFURN</a></p>
            <p>PINTEREST: <a href="#">HOMEAFFAIRSFURNITURE</a></p>
        </div>
        <div className="footer-columns">
            <h5>CONTACT US</h5>
            <p>PHONE:<a href="#">+1(800)123-4567</a></p>
            <p><a href="#">FAQs</a></p>
            <p><a href="#">RETURNS & EXCHANGES</a></p>
        </div>
        <div className="footer-columns">
            <h5>EXPLORE</h5>
            <p><a href="#">NEW ARRIVALS</a></p>
            <p><a href="#">BEST SELLERS</a></p>
            <p><a href="#">SALE</a></p>
            <p><a href="#">GIFT CARDS</a></p>
        </div>
        <div className="footer-columns">
            <h5>NEWSLETTER</h5>
            <p>STAY UPDATED WITH OUR LATEST PRODUCTS, EXCLUSIVE AND DESIGN TIPS.</p>
            
            <input type="text" placeholder='YOUR EMAIL HERE'/> <button className='tertiary-btn'>SUBSCRIBE</button>
            
        </div>
    </div>
  )
}

export default Footer;