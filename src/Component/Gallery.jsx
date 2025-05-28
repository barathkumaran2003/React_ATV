import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Navigationbar from "./Navigationbar";
import ABG20 from "../../public/A-BG20.png";
import ABG21 from "../../public/A-BG21.png";
import Footer from "./Footer";
function Gallery() {
      
  return (
    <>
      <div className="contact-bg">
        <div className="c-nav">
          <Navigationbar />
        </div>
        <div>
          <h1 className="contact-title">Gallery</h1>
        </div>
        <div className="g-div">
            <div className="g-div1">
                <a href="" className="g-div2">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b0643d81d27459e3f28f3d_harley-davidson-zGzXsJUBQfs-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
                 <a href="" className="g-div3">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b0658f5a3d2b102c56117f_roberto-nickson-eXV74Ia7Log-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
                <a href="" className="g-div3">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b064e9ed5e3223d4264599_mike-kienle-2jCCzw83jGU-unsplash.jpg" alt="sd" className="g-img"/>
                </a>


                
                 <a href="" className="g-div3">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b020ce4c70c1160bff6cfb_them-snapshots-GP5HzcrKciI-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
                <a href="" className="g-div3">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b0640a304b3b31487718b3_zac-wolff-Ptx8G07I6xI-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
                <a href="" className="g-div2">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b0658fe01f2afe646721b3_joe-neric-EGzkhZyFRX4-unsplash.jpg" alt="sd" className="g-img"/>
                </a>


                <a href="" className="g-div2">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b064e94bfa60d467c3294d_gijs-coolen-CRmcBeINxtg-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
                 <a href="" className="g-div3">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b0658feebf032479ee2f1f_tim-meyer-2LTMNCN4nEg-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
                <a href="" className="g-div3">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b0658f3dd5c8231faab8f9_majestic-lukas-tAUpEIpBUOw-unsplash.jpg" alt="sd" className="g-img"/>
                </a>


                 <a href="" className="g-div3">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b0640e1f4890ccf6ad3a18_erik-mclean-JTvW7aAo7sE-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
                <a href="" className="g-div3">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b0076a0d20e58cfb99156d_harley-davidson-eeTJKC_wz34-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
                <a href="" className="g-div2">
                    <img src="https://cdn.prod.website-files.com/64aed5c5b8ef105ff462ced9/64b595b6654493327b558236_joe-neric-HHunRG19kF8-unsplash.jpg" alt="sd" className="g-img"/>
                </a>
            </div>

        </div>
        {/* <div className="home-location" style={{ marginTop: "100px" }}>
          <img src={ABG20} alt="jh" className="home-location-img" />
          <div style={{ paddingTop: "140px" }} className="in-animation4">
            <div className="home-location-div"></div>
            <img src={ABG21} alt="ASD" className="home-location-img2" />
            <div className="home-location-content">
              <div>
                <h5 className="home-locaton-head">Find Us</h5>
                <p style={{ marginTop: "15px" }}>
                  14 Tottenham Road, London, England
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <h5 className="home-location-head2">Message Us</h5>
                <p style={{ marginTop: "20px" }}>
                  information@office.com <br />
                  (704) 358-1528
                </p>
              </div>
              <div className="home-location-i">
                <ion-icon
                  name="logo-facebook"
                  className="home-location-icon"
                ></ion-icon>
                <ion-icon
                  name="logo-instagram"
                  className="home-location-icon"
                ></ion-icon>
                <ion-icon
                  name="logo-youtube"
                  className="home-location-icon2"
                ></ion-icon>
              </div>
            </div>
            <div style={{ position: "absolute" }}>
              <i class="fas fa-location-dot" id="home-location-icon-main"></i>
            </div>
          </div>
        </div> */}
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
        <Footer />
      </div>
    </>
  );
}
export default Gallery;
