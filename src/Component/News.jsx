import React from "react";
import Navigationbar from "./Navigationbar";
import ABG1 from "../../public/A-BG1.png";
import ABG34 from "../../public/A-BG34.png";
import ABG35 from "../../public/A-BG35.png";
import ABG36 from "../../public/A-BG36.png";

import "./News.css";
import Footer from "./Footer";
function News() {
  return (
    <>
      <div className="news-bg">
        <div className="news-div">
          <img src={ABG1} alt="bg" className="n-bg1" />
          <div style={{ position: "absolute", top: "20px" }}>
            <Navigationbar />
            <h1 className="banner-title">News</h1>
          </div>
        </div>
        <div className="whole-div" style={{ marginTop: "100px" }}>
          
            <div className="part-div">
              <div className="w-img-div">
                <img src={ABG34} alt="AS" className="w-img" />
              </div>
              <div className="w-text-div"> 
                <h5>July 18, 2023</h5>
                <h3>Nutrition and Fitness Tips  <br />for Riders</h3>
                <h5>While the thrill of riding is undeniable, <br />it's crucial to prioritize safety on and <br /> off the track.</h5>
                <p>Read Full post</p>
              </div>
              
            </div>
            <div className="part-div">
              <div className="w-img-div">
                <img src={ABG36} alt="AS" className="w-img" />
              </div>
              <div className="w-text-div"> 
                <h5>July 18, 2023</h5>
                <h3>Nutrition and Fitness Tips  <br />for Riders</h3>
                <h5>While the thrill of riding is undeniable, <br />it's crucial to prioritize safety on and <br /> off the track.</h5>
                <p>Read Full post</p>
              </div>
              
            </div>
            <div className="part-div">
              <div className="w-img-div">
                <img src={ABG35} alt="AS" className="w-img" />
              </div>
              <div className="w-text-div"> 
                <h5>July 18, 2023</h5>
                <h3>Nutrition and Fitness Tips  <br />for Riders</h3>
                <h5>While the thrill of riding is undeniable, <br />it's crucial to prioritize safety on and <br /> off the track.</h5>
                <p>Read Full post</p>
              </div>
              
            </div>
          
          
           
          
        </div>
        <div className="whole-div" style={{ marginBottom: "100px" }}>
          
            <div className="part-div">
              <div className="w-img-div">
                <img src={ABG34} alt="AS" className="w-img" />
              </div>
              <div className="w-text-div"> 
                <h5>July 18, 2023</h5>
                <h3>Nutrition and Fitness Tips  <br />for Riders</h3>
                <h5>While the thrill of riding is undeniable, <br />it's crucial to prioritize safety on and <br /> off the track.</h5>
                <p>Read Full post</p>
              </div>
              
            </div>
            <div className="part-div">
              <div className="w-img-div">
                <img src={ABG36} alt="AS" className="w-img" />
              </div>
              <div className="w-text-div"> 
                <h5>July 18, 2023</h5>
                <h3>Nutrition and Fitness Tips  <br />for Riders</h3>
                <h5>While the thrill of riding is undeniable, <br />it's crucial to prioritize safety on and <br /> off the track.</h5>
                <p>Read Full post</p>
              </div>
              
            </div>
            <div className="part-div">
              <div className="w-img-div">
                <img src={ABG35} alt="AS" className="w-img" />
              </div>
              <div className="w-text-div"> 
                <h5>July 18, 2023</h5>
                <h3>Nutrition and Fitness Tips  <br />for Riders</h3>
                <h5>While the thrill of riding is undeniable, <br />it's crucial to prioritize safety on and <br /> off the track.</h5>
                <p>Read Full post</p>
              </div>
              
            </div>
          
          
           
          
        </div>
      </div>
      <Footer />
    </>
  );
}
export default News;
