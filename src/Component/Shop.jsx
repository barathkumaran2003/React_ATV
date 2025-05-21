import React from 'react'
import Navigationbar from './Navigationbar';
import './Shop.css';
import ABG20 from "../../public/A-BG20.png";
import ABG16 from "../assets/A-BG16.jpg";
import ABG17 from "../assets/A-BG17.jpg";
import ABG18 from "../assets/A-BG18.jpg";
import ABG19 from "../assets/A-BG19.jpg";
import ABG14 from "../../public/A-BG14.png";
import Footer from './Footer';


function Shop  () {
  return (
    <>
        <div className='shop-bg'>
        <div className="news-div">
          <img src={ABG20} alt="bg" className="n-bg1" />
          <div style={{ position: "absolute", top: "20px" }}>
            <Navigationbar/>
            <h1 className="banner-title">Shop</h1>
          </div>
        </div>
        <div className='s-div'>
            <div className='s-div1'>
                <div className='s-div2'>
                    <a href="" className='s-a'><div>All</div></a>
                </div>
                <div className='s-div2'>
                    <a href="" className='s-a1'><div>Helmet</div></a>
                </div>
                <div className='s-div2'>
                    <a href="" className='s-a1'><div>Protection Set</div></a>
                </div>
            </div>
            <div className="s-price">
                      <div className="in-animation4">
                        <img src={ABG16} alt="uyt" className="price-img" />
                        <h5 className="price-head">Moto Helmet Glossy Black</h5>
                        <h5 style={{ color: "white" }}>$ 91.62 USD</h5>
                      </div>
                      <div className="in-animation4">
                        <img src={ABG17} alt="uyt" className="price-img" />
                        <h5 className="price-head">Black Full Protection Set</h5>
                        <h5 style={{ color: "white" }}>$ 67.23 USD</h5>
                      </div>
                      <div className="in-animation4">
                        <img src={ABG18} alt="uyt" className="price-img" />
                        <h5 className="price-head">Moto Helmet And Glasses</h5>
                        <h5 style={{ color: "white" }}>$ 8.52 USD</h5>
                      </div>
                      <div className="in-animation4">
                        <img src={ABG19} alt="uyt" className="price-img" />
                        <h5 className="price-head">Helmet And Glasses Orange</h5>
                        <div style={{ display: "flex" }}>
                          <h5 style={{ color: "white" }}>$ 37.67 USD</h5>
                          <h5 className="price-head2">$ 7,721.71 USD</h5>
                        </div>
                      </div>
                    </div>
                    <div className="s-price1">
                      <div className="in-animation4">
                        <img src={ABG16} alt="uyt" className="price-img" />
                        <h5 className="price-head">Moto Helmet Glossy Black</h5>
                        <h5 style={{ color: "white" }}>$ 91.62 USD</h5>
                      </div>
                      <div className="in-animation4">
                        <img src={ABG17} alt="uyt" className="price-img" />
                        <h5 className="price-head">Black Full Protection Set</h5>
                        <h5 style={{ color: "white" }}>$ 67.23 USD</h5>
                      </div>
                      <div className="in-animation4">
                        <img src={ABG18} alt="uyt" className="price-img" />
                        <h5 className="price-head">Moto Helmet And Glasses</h5>
                        <h5 style={{ color: "white" }}>$ 8.52 USD</h5>
                      </div>
                      <div className="in-animation4">
                        <img src={ABG19} alt="uyt" className="price-img" />
                        <h5 className="price-head">Helmet And Glasses Orange</h5>
                        <div style={{ display: "flex" }}>
                          <h5 style={{ color: "white" }}>$ 37.67 USD</h5>
                          <h5 className="price-head2">$ 7,721.71 USD</h5>
                        </div>
                      </div>
                    </div>
            
        </div>
        <div className="experience">
                <div>
                  <img src={ABG14} alt="" className="experience-img" />
                  <div >
                    <div className="up" style={{ position: "absolute" }}>
                      <div className="in-animation4" id="experience-button">
                        <a href="/Contact">                <h5>GET STARTED</h5>
                        </a>
                      </div>
                    </div>
        
                    <div
                      style={{ paddingTop: "150px", paddingLeft: "170px",width: "800px"}}
                      className="in-animation4"
                    >
                      <h1 className="experience-head">
                        Share Experiences, And Stay <br />
                        Connected
                      </h1>
                      <p style={{ color: "white" }}>
                        Whether you're a seasoned rider or just starting out, we've got
                        you covered.
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
              <div style={{position:'relative'}}>                  <Footer/>
</div>

        </div>
    </>
  )
}
export default Shop;