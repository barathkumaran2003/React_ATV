import React, { useEffect, useState } from "react";
import "./Review.css";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: false },
};
const fadeDown = {
  initial: { opacity: 0, y: -50 },
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

function Review() {
  const [addondata, setAddondata] = useState([]);

  const fetchNewsList = async () => {
    try {
      const response = await fetch(
        "https://atv-backend-ie8n.onrender.com/review"
      );
      const data = await response.json();
      setAddondata(
        data.map((item) => ({
          name: item.name,
          heading: item.heading,
          message: item.message,
        }))
      );
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNewsList();
  }, []);
  return (
    <>
      <div className="contact-bg">
        <div className="c-nav">
          <Navigationbar />
        </div>
        <motion.div {...popIn}>
          <div>
            <h1 className="contact-title">Review of Our Services</h1>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="r-div1">
            <div className="r-div2">
              {addondata.map((item, index) => (
                <div key={index} className="r-div3">
                  <div className="r-div4">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJElEQVR4nO3VP0oDURAG8NRaphQ8id5Ab2AhKDsDFt4gHkgQZ1J5B0GwCoiNzJhUKfxTK6kiy76dvPB4WfD7weuW72N3Z2dHIwAAAIC6ruxuzK6X5CrkOmOTryHlJTWue2Q6YdMPdv35e4aQ14vepgdk8tgu2rawdF6vxvWQXd9TZbmFpfPi1+zy1FeWU1g6L8SmN1FZTmHpvHg7dHxg6yO37NPjs/nD/i7yQuRykSojv7/edV5otZdTT2oIeSFyfekqbFyPhpAXItPPrsJtZ7R0XohNvjfZGOs5liWZnNfKC/VvjHRprbxQblm0w0vnhXADLXgDuTBCLRihXBihFoxQLjZdZP/6Tea18kKN6Sm7PpPJ6yZndS2bnNTKAwAAAPjvfgHOtIUHZZkWiAAAAABJRU5ErkJggg=="
                      alt="quote-right"
                    ></img>
                  </div>
                  <h4 className="r-head">{item.name}</h4>
                  <p className="r-para">{item.heading}</p>
                  <p className="r-para2">{item.message}</p>
                  <p className="r-date">22 / 10 / 2023</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

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
export default Review;
