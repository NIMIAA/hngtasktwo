import React from 'react';
import Navbar from './Components/Navbar';
import More from './Components/More';
import Footer from './Components/Footer';
import item6 from './Assets/toulouseredchair.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
        <Navbar/>
        <div className="container">

        <div className="cart-page">
            <div className="item-picked items">
            <img src={item6}/>
            </div>
            <div className="item-picked-desc">
                <h2>TOULOUSE FABRIC ROUND CHAIR</h2>
                <p className='small-heading'>DESCRIPTION</p>
                <p>Give your reception room a new look with our Toulouse visitor chair.  This modern retro chair gives every room an exclusive look. It impresses not only with its special seating properties, but also with the interesting material mix of fabric and wood.  The high backrest and pleasant fabric upholstery ensure long, relaxed seating comfort.  </p>
                <div className="item-picked-order">
                    <div className="order-dimension">
                        <p className='small-heading'>GUIDE DIMENSIONS</p>
                        <p>Total height: 84cm</p>
                        <p>Total height: 84cm</p>
                        <p>Total height: 84cm</p>
                        <p>Total height: 84cm</p>
                        <p>Total height: 84cm</p>
                        <p>Total height: 84cm</p>
                    </div>
                    <div className="order-quantity">
                        <p className='small-heading'>QUANTITY</p>
                        <div>
                            <div className="items">1</div>
                            <p>-</p>
                            <p>+</p>
                        </div>
                        <div className="item-price">
                            <p className='small-heading'>PRICE:</p><h4>$350.00</h4>
                        </div>
                    </div>
                </div>
                <div className="proceed">
                    <Link to="/checkout"><button className='primary-opp-btn'>CHECK OUT</button></Link>
                    <Link to="/shop"><button className='primary-btn'>CONTINUE SHOPPING</button></Link>
                    
                    <span>&hearts;</span>
                </div>
            </div>
        </div>
        </div>
        <More/>
        <Footer/>
    </>
  )
}

export default Cart;