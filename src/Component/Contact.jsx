import React from "react";
import "./Contact.css";
import Navigationbar from "./Navigationbar";
import ABG20 from "../../public/A-BG20.png";
import ABG21 from "../../public/A-BG21.png";
import Footer from "./Footer";
function Contact() {

  const contactus = async (e) => {
    e.preventDefault();

    const contactdata = {
      firstName: document.getElementById("first-name").value,
      lastName: document.getElementById("last-name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    }

    try{
      const response = await fetch("https://atv-backend-ie8n.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactdata),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    }
    catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    }
  }

  const reviews = async (e)=>{
        e.preventDefault();
        const reviewdata={
            name:document.getElementById("review-first-name").value,
            email:document.getElementById("review-email").value,
            heading:document.getElementById("review-heading").value,
            message:document.getElementById("review-message").value,
        }
        try{
            const response = await fetch("https://atv-backend-ie8n.onrender.com/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewdata),
      });

      if (response.ok) {
        alert("Your review has been saved successfully!");
      } else {
        alert("There was an error sending your review. Please try again.");
      }

        }
        catch(error)
        {
          console.error("Error:", error);
      alert("There was an error sending your review. Please try again.");
        }

  }
  return (
    <>
      <div className="contact-bg">
        <div className="c-nav">
          <Navigationbar />
        </div>
        <div>
          <h1 className="contact-title">Contact Us</h1>
        </div>
        <div className="c-div">
          <div className="c-form">
            <form onSubmit={contactus}>
              <div className="contact-form">
                <input
                  type="text"
                  id="first-name"
                  className="contact-input"
                  placeholder="First name"
                  maxlength="256"
                />
                <input
                  type="text"
                  id="last-name"
                  className="contact-input"
                  placeholder="Lasr name"
                  maxlength="256"
                />
              </div>
              <div className="contact-form">
                <input
                  type="text"
                  id="email"
                  className="contact-input"
                  placeholder="Email"
                  maxlength="256"
                />
                <input
                  type="text"
                  id="phone" 
                  className="contact-input"
                  placeholder="Phone number"
                  maxlength="256"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  id="message"
                  className="contact-text"
                  placeholder="Message"
                  maxlength="5000"
                />
              </div>
              <input type="submit" className="c-button" value={"Submit"} />
            </form>
          </div>
          <div className="c-text">
            <h3>
              We will assist you as <br /> promptly as possible
            </h3>
            <h6>
              Please note that while we make every effort to respond to all
              inquiries, response times may vary depending on the volume of
              messages we receive. Rest assured, we review and consider each
              message we receive, and we appreciate your patience.
            </h6>
          </div>
        </div>
        <div>
          <h1 className="contact-title">Add Reviews</h1>
        </div>
        <div className="c-div">
          <div className="c-form">
            <form onSubmit={reviews}>
              <div className="contact-form">
                <input
                  type="text"
                  id="review-first-name"
                  className="contact-input"
                  placeholder="Name"
                  maxlength="256"
                />
                <input
                  type="text"
                  id="review-email"
                  className="contact-input"
                  placeholder="Email"
                  maxlength="256"
                />
              </div>
              <div className="contact-form">
                <input
                  type="text"
                  id="review-heading"
                  className="contact-input1"
                  placeholder="Heading about your review"
                  maxlength="256"
                />
                {/* <input
                  type="text"
                  id="phone" 
                  className="contact-input"
                  placeholder="Phone number"
                  maxlength="256"
                /> */}
              </div>
              <div>
                <textarea
                  type="text"
                  id="review-message"
                  className="contact-text"
                  placeholder="Review"
                  maxlength="5000"
                />
              </div>
              <input type="submit" className="c-button" value={"Submit"} />
            </form>
          </div>
          <div className="c-text">
            <h3>
              Share your reviews <br /> about us
            </h3>
            <h6>
              Please note that while we make every effort to respond to all
              inquiries, response times may vary depending on the volume of
              messages we receive. Rest assured, we review and consider each
              message we receive, and we appreciate your patience.
            </h6>
          </div>
        </div>
        <div className="home-location" style={{ marginTop: "100px" }}>
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
      </div>
    </>
  );
}
export default Contact;
