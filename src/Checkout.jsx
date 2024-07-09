import React from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import item6 from './Assets/toulouseredchair.png';
import MC from './Assets/MasterCard.png';
import GP from './Assets/Google Pay.png'
import AP from './Assets/ApplePay.png';
import Vs from './Assets/Visa.png';
import PP from './Assets/PayPal.png'

const Checkout = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <div className="checkout">
            <div className="shipping">
                <h2>SHIPPING</h2>
                <div className="shipping-form">
                    <h4 className='mini-heading'>SHIPPING ADDRESS</h4>
                    <form action="">
                        <div className="address-input-grid">
                            <div className="address-input">
                                <input type="text"placeholder='First Name'/>
                            </div>
                            <div className="address-input">
                            <input type="text"placeholder='Last Name'/>
                            </div>
                        </div>
                        <div className="address-input space">
                            <input type="text" placeholder='Street Address' />
                        </div>
                        <div className="address-input">
                        <input type="text" placeholder='Apt, Suite' />
                        </div>
                        <div className="address-input-grid">
                            <div className="address-input">
                            <input type="text" placeholder='City' />
                            </div>
                            <div className="address-input">
                            <input type="text" placeholder='State' />
                            </div>
                            <div className="address-input">
                            <input type="text" placeholder='Postal Code' />
                            </div>
                        </div>
                    </form>
                    <div className="shipping-method">
                        <h4 className='mini-heading'>SHIPPING METHOD</h4>
                        <p>Enter a shipping address to see accurate shipping options for your order</p>
                        <div className="gift">
                            <h4 className='mini-heading'>GIFT OPTIONS</h4>
                            <p>This Is A Gift</p>
                        </div>
                        <button className="primary-opp-btn">
                            CONTINUE
                        </button>
                    </div>
                </div>
                <div className="shipping-method">
                        <h4 className='mini-heading'>PAYMENT METHOD</h4>
                        <div className="primary-btn card">
                            <div className='card-text'>
                                <h5>Credit Card</h5>
                                <p>Secure and encrypted</p>
                            </div>
                            <div className='card'>
                               <img src={MC} alt="" /> 
                               <img src={GP} alt="" /> 
                               <img src={AP} alt="" /> 
                               <img src={Vs} alt="" /> 
                               <img src={PP} alt="" /> 
                            </div>
                        </div>
                    </div>
            </div>
            <div className="shipping-details">
                <div className="order-summary">
                    <h4 className="mini-heading">ORDER SUMMARY</h4>
                    <div className="summary">
                    <div className="order-summary-dets">
                        <h4>Subtotal</h4>
                        <p>$300.00</p>
                    </div>
                    <div className="order-summary-dets">
                        <h4>Taxes</h4>
                        <p>-</p>
                    </div>
                    <div className="order-summary-dets">
                        <h4>Shipping (1 item)</h4>
                        <p>$50.00</p>
                    </div>
                    <hr />
                    <div className="order-summary-dets">
                        <h4>TOTAL</h4>
                        <p>$350.00</p>
                    </div>
                    </div>
                    <button className="primary-opp-btn">
                            APPLY A PROMO CODE OR DISCOUNT
                    </button>
                </div>
                <div className="cart-summary">
                    <h4 className="mini-heading">
                        CART SUMMARY
                    </h4>
                    <p className='red-text'>Arrives in 2-5 days</p>
                    <div className="cart-page">
                        <div className="items checkoutimg">
                            <img src={item6} alt="" />
                        </div>
                        <div className="item-picked-desc checkout-desc">
                            <h4>TOULOUSE FABRIC ROUND CHAIR</h4>
                            <div className="summary">
                            <p>Total height: 84cm</p>
                            <p>Total height: 84cm</p>
                            </div>
                            <p className="small-heading">$300 x 1</p>
                            <p className='red-text'>Remove</p>
                        </div>
                    </div>
                        <div className="checkout-links">
                            <a href="#" className='red-text'>Privacy Policy</a>
                            <a href="#" className='slash'>|</a>
                            <a href="#" className='red-text'>Terms & Conditions</a>
                        </div>
                </div>
            </div>
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default Checkout;