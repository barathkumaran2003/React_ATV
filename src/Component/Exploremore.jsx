import React, { useEffect, useRef, useState } from "react";
import "./Explore.css";
import Navigationbar from "./Navigationbar";
import ABG26 from "../../public/A-BG29.png";
import ABG20 from "../../public/A-BG20.png";
import ABG5 from "../../public/A-BG5.png";
import ABG6 from "../../public/A-BG6.png";
import ABG7 from "../../public/A-BG7.png";
import ABG16 from "../../public/A-BG30.png";
import ABG17 from "../../public/A-BG31.png";
import ABG18 from "../../public/A-BG32.png";
import ABG19 from "../../public/A-BG33.png";
import ABG15 from "../../public/A-BG15.png";
import ABG9 from "../../public/A-BG9.png";
import ABG8 from "../../public/A-BG8.png";
import ABG3 from "../../public/A-BG3.png";
import ABG34 from "../../public/A-BG34.png";
import Footer from "./Footer";

function Exploremore() {

const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = end / (duration / 16);

          const animate = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <h1 className="e-count-head" ref={ref}>+{count.toLocaleString()}</h1>;
};

const CountUpSection = () => {
  const data = [
    {
      value: 100000,
      text: "Providing valuable and engaging content for fellow motocross enthusiasts.",
    },
    {
      value: 65000,
      text: "Providing valuable and engaging content for fellow motocross enthusiasts.",
    },
    {
      value: 2000,
      text: "Providing valuable and engaging content for fellow motocross enthusiasts.",
    },
  ];

  return (
    <div className="e-counts">
      {data.map((item, index) => (
        <div key={index} className="e-count-container">
          <div className="e-count">
            <CountUp end={item.value} duration={2000} />
            <p className="e-count-para">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

  return (
    <>
      <div className="bg">
        <img src={ABG26} alt="bg" className="A-bg1" />
        <div className="home-nav">
          <Navigationbar />
          <div class="in-animation41">
            <div className="home-hero-h1">
              <h1 className="home-hero-head">About Us</h1>
            </div>
            <div className="home-hero-h1-sub">
              <p className="home-hero-para">
                Join us at ATM & Motorcycle and be part of a thriving community
                that celebrates the adrenaline-fueled sport of motocross
              </p>
            </div>
            <div className="up">
              <div className="in-animation41" id="home-hero-head-up">
                <a href="/Exploremore">
                  <h5>EXPLORE MORE</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="e-bg2"></div>
        <div style={{ position: "absolute", marginTop: "70px" }} class="e-up">
          <div className="in-animation4" id="home-fit-button">
            <h5 className="home-fit-button-head">
              {" "}
              <samp>GET STARTED</samp>
            </h5>
          </div>
        </div>
        <div class="in-animation41" id="e-home-fit-next-div">
          <h1>We live and breathe motocross</h1>
          <p>
            What sets us apart is our deep understanding of the motocross
            community.
          </p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            height: "50px",
            position: "absolute",
          }}
          className="in-animation4"
        >
          <img src={ABG20} alt="lg" className="e-image" />
        </div>
        <div className="e-counts">
          <CountUpSection/>
        </div>
        <div>
          <div>
            <div className="in-animation4" id="e-para">
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
            <div className="up">
              <div className="in-animation4" id="para-button">
                <h5 className="para-button-head">EXPLORE MORE</h5>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute" }} class="e-up">
          <div className="in-animation4" id="e-home-fit-button">
            <h5 className="home-fit-button-head">
              {" "}
              <samp>GET STARTED</samp>
            </h5>
          </div>
        </div>
        <div class="in-animation4" id="e-home-fit-next-divs">
          <h1>Passionate About Sharing Their Love For The Sport </h1>
          <p>
            What sets us apart is our deep understanding of the motocross
            community.
          </p>
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
        <div className="E-marquee">
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
        <div className="e-last-image">
          <img src={ABG3} alt="uyt" />
          <img src={ABG8} alt="uyt" />
          <img src={ABG34} alt="uyt" />
          <img src={ABG9} alt="uyt" />
          <img src={ABG15} alt="uyt" />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Exploremore;
