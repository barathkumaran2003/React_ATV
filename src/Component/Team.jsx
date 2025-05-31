import React from 'react'
import './Team.css';
import ABG16 from "../../public/A-BG30.png";
import ABG17 from "../../public/A-BG31.png";
import ABG18 from "../../public/A-BG32.png";
import ABG19 from "../../public/A-BG33.png";
import sri from "../assets/sri.jpeg"
import barath from "../assets/barath.jpg"

import Navigationbar from './Navigationbar';
import Footer from './Footer';

function Team  () {
  return (
    <>
    <div className='team-bg'>
    <div className="news-div">
          <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b595b6654493327b558236_joe-neric-HHunRG19kF8-unsplash.jpg" alt="bg" className="n-bg1" />
          <div style={{ position: "absolute", top: "20px" }}>
            <Navigationbar/>
            <h1 className="banner-title">Our Team</h1>
          </div>
        </div>
        <div className='team-head'>
            <h2>
            passionate about sharing their <br />love for the sport
            </h2>
        </div>
        <div className="e-price">
                  <div className="in-animation4">
                    <div className="e-hole-div">
                      <img src={ABG16} alt="uyt" className="E-price-img" />
                      <div className="E-price-new-div">
                        <h5 className="E-price-head">Guy Hawkins</h5>
                        <h5>CEO</h5>
                      </div>
                    </div>
                  </div>
                  <div className="in-animation4">
                    <div className="e-hole-div">
                      <img src={ABG17} alt="uyt" className="E-price-img" />
                      <div className="E-price-new-div">
                        <h5 className="E-price-head">Theresa Webb</h5>
                        <h5>Administrator</h5>
                      </div>
                    </div>
                  </div>
                  <div className="in-animation4">
                    <div className="e-hole-div">
                      <img src={ABG18} alt="uyt" className="E-price-img" />
                      <div className="E-price-new-div">
                        <h5 className="E-price-head">Brooklyn Simmons</h5>
                        <h5>Instructor</h5>
                      </div>
                    </div>
                  </div>
                  <div className="in-animation4">
                    <div className="e-hole-div">
                      <img src={ABG19} alt="uyt" className="E-price-img" />
                      <div className="E-price-new-div">
                        <h5 className="E-price-head">Arlene McCoy</h5>
                        <h5>Manager</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t-price">
                  <div className="in-animation4">
                    <div className="e-hole-div">
                      <img src={sri} alt="uyt" className="E-price-img" />
                      <div className="E-price-new-div">
                        <h5 className="E-price-head">Sri Sabharish</h5>
                        <h5>CEO</h5>
                      </div>
                    </div>
                  </div>
                  <div className="in-animation4">
                    <div className="e-hole-div">
                      <img src={barath} alt="uyt" className="E-price-img" />
                      <div className="E-price-new-div">
                        <h5 className="E-price-head">Barathkumaran</h5>
                        <h5>Administrator</h5>
                      </div>
                    </div>
                  </div>
                  <div className="in-animation4">
                    <div className="e-hole-div">
                      <img src={ABG18} alt="uyt" className="E-price-img" />
                      <div className="E-price-new-div">
                        <h5 className="E-price-head">Brooklyn Simmons</h5>
                        <h5>Instructor</h5>
                      </div>
                    </div>
                  </div>
                  <div className="in-animation4">
                    <div className="e-hole-div">
                      <img src={ABG19} alt="uyt" className="E-price-img" />
                      <div className="E-price-new-div">
                        <h5 className="E-price-head">Arlene McCoy</h5>
                        <h5>Manager</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='t-head'>
                    <h2>Customers frequently ask</h2>
                </div>
                <div className='t-div'>
                        <div className='t-div1'>
                            <div className='t-div2'>
                                <div className='t-div3'>
                                    <h6>What is motocross?</h6>
                                </div>
                            </div>
                            <div className='t-div2'>
                                <div className='t-div3'>
                                    <h6>What equipment do I need for motocross?</h6>
                                </div>
                            </div>
                            <div className='t-div2'>
                                <div className='t-div3'>
                                    <h6>What are the benefits of joinin a motocross club or community?</h6>
                                </div>
                            </div>
                            <div className='t-div2'>
                                <div className='t-div3'>
                                    <h6>How do I choose the right motocross gear and apparel?</h6>
                                </div>
                            </div>

                        </div>

                        <div className='t-div1'>
                            <div className='t-div2'>
                                <div className='t-div3'>
                                    <h6>What are the different types of motocross races?</h6>
                                </div>
                            </div>
                            <div className='t-div2'>
                                <div className='t-div3'>
                                    <h6>What are the age categories n motocross racing?</h6>
                                </div>
                            </div>
                            <div className='t-div2'>
                                <div className='t-div3'>
                                    <h6>What are the rules and regulations of motocross racing?</h6>
                                </div>
                            </div>
                            <div className='t-div2'>
                                <div className='t-div3'>
                                    <h6>Are there any motocross training schools or camps available?</h6>
                                </div>
                            </div>

                        </div>
                </div>
                
    </div>
    <div className="marquee">
        <h1>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
          BE PART OF A THRIVING COMMUNITY, JOIN US!{" "}
          <i
            class="fas fa-motorcycle"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          ></i>
        </h1>
      </div>
      <Footer/>
    </>
  )
}
export default Team;
