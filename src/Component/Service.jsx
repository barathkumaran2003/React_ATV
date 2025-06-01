import React from "react";
import Navigationbar from "./Navigationbar";
import "./Sevice.css";
import ABG5 from "../../public/A-BG5.png";
import ABG6 from "../../public/A-BG6.png";
import ABG13 from "../../public/A-BG13.png";
import ABG34 from "../../public/A-BG34.png";
import ABG7 from "../../public/A-BG7.png";
import ABG2 from "../../public/A-BG2.png";
import ABG15 from "../../public/A-BG15.png";
import ABG4 from "../../public/A-BG4.png";
import ABG9 from "../../public/A-BG9.png";
import ABG3 from "../../public/A-BG3.png";
import Footer from "./Footer";
import { motion } from "framer-motion";


const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
    viewport: { once: false },

};

const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
      viewport: { once: false },

};

const fadeRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8 },
      viewport: { once: false },

};

const popIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
      viewport: { once: false },

};


function Service() {
  return (
    <>
      <div className="service">
        <Navigationbar />
        <div className="service-div">
          <h1 className="contact-title">Services</h1>
          <p>
            Get ready to hit the track and embrace the adrenaline-fueled sport!
          </p>
        </div>
        <motion.div
  {...fadeLeft}
  viewport={{ once: false }}
>
  <div className="service-img">
          <div style={{ marginRight: "15px" }}>
            <img src={ABG5} alt="GHJ" className="service-list-2-item-image" />
            <div className="service-img-head">
              <h3>Race Registration and Ticketing</h3>
            </div>
            <div className="service-img-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div style={{ marginRight: "15px" }}>
            <img src={ABG4} alt="GHJ" className="service-list-2-item-image" />
            <div className="service-img-head">
              <h3>Race Registration and Ticketing</h3>
            </div>
            <div className="service-img-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div style={{ marginRight: "15px" }}>
            <img src={ABG13} alt="GHJ" className="service-list-2-item-image" />
            <div className="service-img-head">
              <h3>Race Registration and Ticketing</h3>
            </div>
            <div className="service-img-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
  {/* content here */}
</motion.div>
        <motion.div
 {...fadeRight}
>
  <div className="service-img">
          <div style={{ marginRight: "15px" }}>
            <img src={ABG34} alt="GHJ" className="service-list-2-item-image" />
            <div className="service-img-head">
              <h3>Race Registration and Ticketing</h3>
            </div>
            <div className="service-img-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div style={{ marginRight: "15px" }}>
            <img src={ABG2} alt="GHJ" className="service-list-2-item-image" />
            <div className="service-img-head">
              <h3>Race Registration and Ticketing</h3>
            </div>
            <div className="service-img-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div style={{ marginRight: "15px" }}>
            <img src={ABG7} alt="GHJ" className="service-list-2-item-image" />
            <div className="service-img-head">
              <h3>Race Registration and Ticketing</h3>
            </div>
            <div className="service-img-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
  {/* content here */}
</motion.div>


        <motion.div
 {...popIn}>
  <div className="s-home-fit-div1">
          <div className="in-animation5" id="s-home-fit-div2">
            <div className="s-home-fit-main">
              <h1>Be Part Of A Thriving Community</h1>
              <h6>
                Join us at ATM & Motorcycle and be part of a thriving community
                that celebrates the adrenaline-fueled sport of motocross.
                Whether you're seeking information, entertainment, or
                connection, we've got it all covered.{" "}
              </h6>
              <div className="s-home-fit-main-div">
                <h5> EXPLORE MORE</h5>
              </div>
            </div>
          </div>
          <div className="in-animation6">
            <img src={ABG15} alt="av" className="s-home-fit-img" />
          </div>
        </div>
 </motion.div>


  <motion.div
 {...fadeUp}>
   <div className="last-img">
          <div className="last-img-div">
            <img src={ABG3} alt="av" className="last-img-img" />
          </div>
          <div className="last-img-div">
            <img src={ABG9} alt="av" className="last-img-img-next" />
          </div>
          <div className="last-img-div-1">
            <div>
              <h1>
                Share Experiences, <br />
                And Stay Connected{" "}
              </h1>
              <div className="button">
                <div className="button-div">
                  <h5 className="button-head">Contact</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
 </motion.div>
          
        <Footer />
      </div>
    </>
  );
}
export default Service;
