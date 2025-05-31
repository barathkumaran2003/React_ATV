import React, { useEffect, useState } from "react";
import "./Atv.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function S_Navbar() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userth, setUserth] = useState(" ");
  const [show, setShow] = useState(false);
  const [alldown, setAlldown] = useState(false);
  const [news, setNews] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const signin = async () => {
    const details = {
      username: user.name,
      password: user.nickname,
      email: user.email,
      phonenumber: user.middle_name || "",
      usertype: "user",
    };

    try {
      const response = await fetch(
        "https://atv-backend-ie8n.onrender.com/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );

      const text = await response.json();
      alert(text.message);
      setUserth(text.usert);
      if (text.message === "User signed in successfully") {
        navigate("/Home");
      } else {
        navigate("/Loginpage");
      }
    } catch (error) {
      console.error("Fetch Error:", error.message);
      alert("Network error or server not reachable.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      signin();
    }
  }, [isAuthenticated]);

  const about = () => {
    setShow(true);
    setNews(false);
    setAlldown(false);
  };

  const newsdown = () => {
    setNews(true);
    setShow(false);
    setAlldown(false);
  };

  const allpages = () => {
    setAlldown(true);
    setShow(false);
    setNews(false);
  };

  const closeall = () => {
    setShow(false);
    setNews(false);
    setAlldown(false);
  };

  const showoption = () => {
    setShow(false);
    setNews(false);
    setAlldown(false);
  };

  return (
    <div className="in-animation7">
      {!isAuthenticated ? (
        <div className="home-nav-in">
          <li className="home-nav-in-li">
            <ul><a href="#ABOUT" className="home-nav-in-ul">Demo</a></ul>
            <ul><a href="#ABOUT" className="home-nav-in-ul">About Us</a></ul>
            <ul><a href="#ABOUT" className="home-nav-in-ul">Service</a></ul>
            <ul><a href="#ABOUT" className="home-nav-in-ul">News</a></ul>
            <ul><a href="#ABOUT" className="home-nav-in-ul">All pages</a></ul>
          </li>

          <div className="search-bar">
            <a href=""><svg className="search-icon" viewBox="0 0 24 24" width="21" height="21"></svg></a>
          </div>

          <i className="fas fa-shopping-cart cart-in" id="cart"></i>

          <div className="home-nav-contact">
            <a>
              <h5
                className="home-nav-contact-h1"
                onClick={() =>
                  loginWithRedirect({
                    appState: { returnTo: "/Home" },
                  })
                }
              >
                <span>Log/Sign</span>
              </h5>
            </a>
          </div>
        </div>
      ) : (
        <div className="home-nav-in" onMouseLeave={showoption}>
          <li className="home-nav-in-li">
            <ul><a href="/Home" className="home-nav-in-ul1" onMouseOver={closeall}>Home</a></ul>
            <ul><a className="home-nav-in-ul1" onMouseOver={about}>About Us</a></ul>
            <ul><a className="home-nav-in-ul1" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} onMouseOver={closeall}>Service</a></ul>
            <ul><a className="home-nav-in-ul1" onMouseOver={newsdown}>News</a></ul>
            <ul><a className="home-nav-in-ul1" onMouseOver={allpages}>All pages</a></ul>
          </li>

          <div className="search-bar1">
            <a href=""><svg className="search-icon" viewBox="0 0 24 24" width="21" height="21"></svg></a>
          </div>

          <i className="fas fa-shopping-cart cart-in" id="cart"></i>

          <div>{userth}</div>

          <div className="profile-img" onClick={toggleDropdown}>
            <img src={user.picture} alt="user" />
            <h5>{user.name}</h5>
            <span className="dropdown-icon">{dropdownOpen ? "▲" : "▼"}</span>
          </div>

          {dropdownOpen && (
            <div className="dropdown">
              <h5>Profile</h5>
              <a
                style={{ textDecoration: "none", color: "black" }}
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <h5>Log out</h5>
              </a>
            </div>
          )}

          {show && (
            <div className="dropdown-about">
              <div className="dropdown-div">
                <a href="/Exploremore"><h5>About us</h5></a>
              </div>
              <div className="dropdown-div">
                <a href="/Gallery"><h5>Gallery</h5></a>
              </div>
              <div className="dropdown-div">
                <a href="/Team"><h5>Our Team</h5></a>
              </div>
              <div className="dropdown-div">
                <a href="/Review"><h5>Testimonial</h5></a>
              </div>
            </div>
          )}

          {news && (
            <div className="dropdown-news">
              <div className="dropdown-div">
                <a href="/News"><h5>News</h5></a>
              </div>
            </div>
          )}

          {alldown && (
            <div className="dropdown-all" style={{ display: "flex" }}>
              <div>
                <div className="dropdown-div"><a href="/Home"><h5>Home</h5></a></div>
                <div className="dropdown-div"><a href="/Exploremore"><h5>About us</h5></a></div>
                <div className="dropdown-div"><a href="/Service"><h5>Our Service</h5></a></div>
                <div className="dropdown-div"><a href="/Team"><h5>Our Team</h5></a></div>
                <div className="dropdown-div"><a href="/Gallery"><h5>Gallery</h5></a></div>
              </div>
              <div>
                <div className="dropdown-div"><a href="/Review"><h5>Testimonials</h5></a></div>
                <div className="dropdown-div"><a href="/Contact"><h5>Contact Us</h5></a></div>
                <div className="dropdown-div"><a href="/News"><h5>News</h5></a></div>
                <div className="dropdown-div"><a href="/Shop"><h5>Shop</h5></a></div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default S_Navbar;
