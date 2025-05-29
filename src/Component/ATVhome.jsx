import React, { useState, useEffect } from 'react';
import "./Atv.css";
import ABG1 from "../../public/A-BG1.png";
import ABG2 from "../../public/A-BG2.png";
import ABG3 from "../../public/A-BG3.png";
import ABG4 from "../../public/A-BG4.png";
import ABG6 from "../../public/A-BG6.png";
import ABG5 from "../../public/A-BG5.png";
import ABG7 from "../../public/A-BG7.png";
import ABG8 from "../../public/A-BG8.png";
import ABG9 from "../../public/A-BG9.png";
import ABG10 from "../../public/A-BG10.png";
import ABG11 from "../../public/A-BG11.png";
import ABG12 from "../../public/A-BG12.png";
import ABG13 from "../../public/A-BG13.png";
import ABG14 from "../../public/A-BG14.png";
import ABG15 from "../../public/A-BG15.png";
import ABG16 from "../assets/A-BG16.jpg";
import ABG17 from "../assets/A-BG17.jpg";
import ABG18 from "../assets/A-BG18.jpg";
import ABG19 from "../assets/A-BG19.jpg";
import ABG20 from "../../public/A-BG20.png";
import ABG21 from "../../public/A-BG21.png";
import Footer from "./Footer";
import { title } from './Singup';
import Navigationbar from "./Navigationbar";
import '../../animation';

console.log("Title from Singup:", title); // Log the title value
function ATVhome() {
   const [user, setUser] = useState('');
   const [userDetails, setUserDetails] = useState({username: '',email: '',userType:''});
 useEffect(() => {
    setUser(localStorage.getItem("username"));
    const get=localStorage.getItem("username");
    console.log("Title from Singup:",user);
    const fetchUserDetails = async () => {
      try {
        console.log("linkurl",user);
        const response = await fetch(`https://atv-backend-ie8n.onrender.com/login?username=${get}`);
        const data = await response.json();

        // Extract only what you need
        setUserDetails({
          username: data.username,
          email: data.email,
          userType: data.userType,
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      } 
    };
    fetchUserDetails();

  }, []);
  //    

  // const login = async () => {
  //   try {
  //     const data = await fetch(`http://localhost:5000/api/signin`);
  //     const username = await data.json();
  //     setUser(username.name);
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };

  // useEffect(() => {
  //   login(); 
  // }, []);

    return (
    <>
      <div className="bg">
        <img src={ABG1} alt="bg" className="A-bg1" />
        <div className="home-nav">
          <Navigationbar />
          <div className="in-animation4">
            <div className="home-hero-h1">
              <h1 className="home-hero-head">Passionate about motorcycles </h1>
              
            </div>
            <div className="home-hero-h1-sub">
              <p className="home-hero-para">
                Join us at ATM & Motorcycle and be part of a thriving community
                that celebrates the adrenaline-fueled sport of motocross.
                Whether you're seeking information, entertainment, or
                connection, we've got it all covered. 
              </p>
              <div style={{position:'absolute', backgroundColor:'white'}}>
{userDetails.username} {userDetails.email}  {userDetails.userType}             </div>
            </div>
            <div className="in-animation4" id="f-button">
              <a href="/Exploremore" className="f-a">
                EXPLORE MORE
              </a>
            </div>
          </div>
        </div>
        <div className="bg2"></div>
        <div className="in-animation7" id="contact">
          <div className="contact-div">
            <i class="fas fa-phone-volume" id="contact-phone"></i>
            <p className="contact-number"> (+91) 94429-51070</p>``
            <i class="fas fa-location-dot" id="contact-location"></i>
            <p className="contact-add"> 14 MWC, Chengalpattu, Chennai</p>
            <div className="a-form">
              <form action="" className="a-form1">
                <input
                  type="email"
                  name="email"
                  className="a-input"
                  placeholder="E-mail"
                />
                <input
                  type="submit"
                  className="a-submit"
                  value={"Get in touch"}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="home-head2">
          <div className="home-head-div">
            <div className="in-animation4">
              <img src={ABG2} alt="av" className="home-head-div-img" />
            </div>
            <div className="home-head-div-para">
              <div className="home-head-div-sub">
                <h1 className="in-animation4">We Live And Breathe Motocross</h1>
                <h6 className="in-animation4" id="home-hero-div-h6">
                  Stay up to date with the latest motocross news, including race
                  results, championship standings, rider interviews, and
                  industry developments. We provide timely and accurate
                  information, keeping you in the loop.
                </h6>
                <div className="in-animation4" id="e-button">
                  <a href="/Exploremore" className="e-a">
                    EXPLORE MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="in-animation8" id="main-box">
            <div style={{ display: "flex" }}>
              <div className="box-1">
                <h3 className="in-animation4" id="box-1-head">
                  Join us at ATM & Motorcycle
                </h3>
                <p style={{ color: "gray" }} className="in-animation4">
                  Looking to upgrade your motorcycle or gear? We provide honest
                  and detailed reviews of the latest bikes, accessories, and
                  safety equipment. Make informed decisions and find the perfect
                  fit for your needs.
                </p>
                <div className="in-animation4" id="e-button">
                  <a href="/Service" className="e-a">
                    EXPLORE MORE
                  </a>
                </div>
              </div>
              <div className="box-2">
                <img src={ABG3} alt="ff" className="box-2-img" />
                <div class="in-animation4" id="box-2-div">
                  Adrenaline-Fueled Sports
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="box-3">
                <img src={ABG4} alt="ff" className="box-3-img" />
                <div className="in-animation4" id="box-3-div">
                  Dive Into The World
                </div>
              </div>
              <div className="box-4">
                <h3 className="in-animation4" id="box-4-head">
                  Strap on your helmet, rev your engine
                </h3>
                <p style={{ color: "gray" }} className="in-animation4">
                  Immerse yourself in the world of motocross through our
                  collection of captivating videos and stunning photos. Relive
                  epic races, witness incredible stunts, and get inspired by the
                  passion that drives the motocross community.
                </p>
                <div className="in-animation4" id="e-button">
                  <a href="/News" className="e-a">
                    EXPLORE MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            className="in-animation4"
            id="para"
            style={{ marginTop: "1100px" }}
          >
            <h1 className="para-head">
              Be Part Of{" "}
              <img
                src={ABG5}
                alt="sdf"
                style={{ width: "130px", height: "60px" }}
              />{" "}
              A Thriving Community That <br />
              Celebrates The Adrenaline-Fueled Sport{" "}
              <img
                src={ABG6}
                alt=""
                style={{ width: "130px", height: "60px", overflow: "hidden" }}
              />{" "}
              . <br />
              Whether You're Seeking Information, Entertainment, <br />
              Or Connection,We've Got It All{" "}
              <img
                src={ABG7}
                alt=""
                style={{ width: "130px", height: "60px" }}
              />{" "}
              Covered For You.
            </h1>
          </div>
          <div className="in-animation4" id="q-button">
            <a href="/Contact" className="e-a">
              EXPLORE MORE
            </a>
          </div>
        </div>
      </div>
      <div className="frame">
        <div style={{ display: "flex" }} className="in-animation4">
          <img src={ABG8} alt="" className="frame-1" />
          <img src={ABG9} alt="" className="frame-2-3" />
          <img src={ABG10} alt="" className="frame-2-3" />
        </div>
        <div
          style={{ display: "flex", marginTop: "20px" }}
          className="in-animation4"
        >
          <img src={ABG11} alt="" className="frame-4" />
          <img src={ABG12} alt="" className="frame-5" />
          <img src={ABG13} alt="" className="frame-6" />
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
      <div className="experience">
        <img src={ABG14} alt="" className="experience-img" />
        <div style={{ position: "absolute", marginTop: "120px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                paddingTop: "15px",
                paddingLeft: "170px",
                width: "800px",
              }}
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
            <div className="in-animation4" id="t-button">
              <a href="/Contact" className="t-a">
                Get started{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-fit">
        <div className="home-fit-div">
          <div className="home-fit-div1">
            <div className="in-animation5" id="home-fit-div2">
              <div className="home-fit-main">
                <h1>Be Part Of A Thriving Community</h1>
                <h6>
                  Join us at ATM & Motorcycle and be part of a thriving
                  community that celebrates the adrenaline-fueled sport of
                  motocross. Whether you're seeking information, entertainment,
                  or connection, we've got it all covered.{" "}
                </h6>
                <div className="in-animation4" id="g-button">
                  <a href="/Team" className="g-a">
                    Get started{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="in-animation6">
              <img src={ABG15} alt="av" className="home-fit-img" />
            </div>
          </div>

          <div
            class="in-animation4"
            id="home-fit-next-divs"
            style={{ display: "flex" }}
          >
            <div>
              <h1>Our merchandise</h1>
              <p>
                We provide honest and detailed reviews of the latest bikes,
                accessories, and safety equipment.
              </p>
            </div>
            <div class="up" style={{ marginLeft: "250px" }}>
              <div className="in-animation4" id="g-button">
                <a href="/Shop" className="g-a">
                  Get started{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="price">
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
      <div className="home-location">
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
      </div>
      <Footer />
    </>
  );
}
export default ATVhome;
