import React from 'react';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';
import ShopPageChair from './Assets/homePageChairImg.png'
import SmallStool from './Assets/homePageSmalltableImg.png';
import Chandelier from './Assets/homePageChandelierImg.png';
import item1 from './Assets/walnutchair.png';
import item2 from './Assets/roundchair.png';
import item3 from './Assets/oakwoodclock.png';
import item4 from './Assets/caterpillasofa.png';
import item5 from './Assets/sleeperchair.png';
import item6 from './Assets/toulouseredchair.png';
import item7 from './Assets/blackstool.png';
import item8 from './Assets/roundchair.png';
import Pot from './Assets/pot.png';
import discountChair from './Assets/romeoredchair.png';
import Footer from './Components/Footer';


const Shop = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
          <div className="shop-home">
            <h2 className='green-heading'>We Transform Your Homes, One Furniture at a Time</h2>
            <button className='primary-btn'>
              VIEW MORE
            </button>
            <div className='banner-chair'>
            <img src={ShopPageChair} alt="" />
            </div>
              <div className="banner-stool">
                <img src={SmallStool}/>
              </div>
              <div className="banner-chandelier">
                <img src={Chandelier}/>
              </div>
            
          </div>
        <div className="shop-items" id="shop-items">
          <div className="shop-list-items">
            <div className='list-grid'>
              <div className="shop-list-grid">
                <div className="items">
                  <Link to="/cart"><img src={item1}/></Link>
                  <div className="item-desc">
                  <h4>CURVED WALNUT DINING CHAIR</h4>
                  <p>$356.00</p>
                </div>
                </div>
                <div className="items">
                <Link to="/cart"><img src={item2}/></Link>
                <div className="item-desc">
                  <h4>ROUND ELM STOOL</h4>
                  <p>$300.00</p>
                </div>
                </div>
                <div className="items">
                <Link to="/cart"><img src={item3}/></Link>
                <div className="item-desc">
                  <h4>OAK WOOD WALL CLOCK</h4>
                  <p>$500.00</p>
                </div>
                </div>
                <div className="items">
                <Link to="/cart"><img src={item4}/></Link>
                <div className="item-desc">
                  <h4>CATERPILLAR SOFA COUCH</h4>
                  <p>$375.00</p>
                </div>
                </div>
              </div>
              <div className="items single">
              <img src={item5} alt="" />
                  <div className="item-desc">
                  <h4>CURVED WALNUT DINING CHAIR</h4>
                  <p>$356.00</p>
                </div>
              </div>
            </div>
            <div className='list-grid'>
            <div className="items single">
              <Link to="/cart"><img src={item6}/></Link>
                  <div className="item-desc">
                  <h4>TOULOUSE FABRIC ROUND CHAIR</h4>
                  <p>$300.00</p>
                </div>
              </div>
              <div className="shop-list-grid">
                <div className="items">
                <Link to="/cart"><img src={item7}/></Link>
                <div className="item-desc">
                  <h4>DINING SLIDE CHAIR</h4>
                  <p>$225.06</p>
                </div>
                </div>
                <div className="items">
                <Link to="/cart"><img src={item8}/></Link>
                <div className="item-desc">
                  <h4>CHARLES STOOL</h4>
                  <p>$299.00</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <button className='primary-btn'>PREV</button>
          <button className='primary-btn'>NEXT</button>
        </div>
        </div>
        <div className="discount">
          <div className="discount-desc">
            <h2><span>50%</span> DISCOUNT</h2>
            <h1 className='red-text'>ROMEO RED SOFA</h1>
            <button className='secondary-btn'>
              BUY NOW
            </button>
          </div>
          <div className="discount-img">
            <img src={discountChair} alt="" />
          </div>
        </div>
        <div className='container'>
          <div className='aesthetics'>
          <img src={item1}/>
          <img src={item3}/>
          <img src={item5}/>
          <img src={item2}/>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default Shop;