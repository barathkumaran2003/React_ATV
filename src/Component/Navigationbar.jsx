import React, { useEffect, useState } from "react";
import "./Atv.css";
import man from "../../public/man.png";
import man1 from "../../public/man1.png";

import user1 from "../../public/user.png";
import { useAuth0 } from "@auth0/auth0-react";

function Navigationbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [show, setShow] = useState(false);
  const [alldown, setAlldown] = useState(false);
  const [news, setNews] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    userType: "",
  });
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
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

  useEffect(() => {
    const get = localStorage.getItem("username");
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `https://atv-backend-ie8n.onrender.com/login?username=${user.name}`
        );
        const data = await response.json();

        // Extract only what you need
        setUserDetails({
          username: data.username,
          userType: data.userType,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div className="in-animation7" onMouseLeave={showoption}>
      <div className="home-nav-in">
        
        <li className="home-nav-in-li">
          <ul>
            <a href="/Home" className="home-nav-in-ul1" onMouseOver={closeall}>
              Home
            </a>
          </ul>
          <ul>
            <a className="home-nav-in-ul1" onMouseOver={about}>
              About Us
            </a>
          </ul>
          <ul>
            <a
              href="/Service"
              className="home-nav-in-ul1"
              onMouseOver={closeall}
            >
              Service
            </a>
          </ul>
          <ul>
            <a className="home-nav-in-ul1" onMouseOver={newsdown}>
              News
            </a>
          </ul>
          <ul>
            <a className="home-nav-in-ul1" onMouseOver={allpages}>
              All pages
            </a>
          </ul>
        </li>
        <div className="search-bar1">
          <a href="">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="21"
              height="21"
            >
            </svg>
          </a>
        </div>

        <i class="fas fa-shopping-cart cart-in" id="cart"></i>

        {isAuthenticated && user && (
          <div className="profile-img" onClick={toggleDropdown}>
            <img src={user.picture} alt="sd" style={{ borderRadius: "50px" }} />
            <h5>{user.name}</h5>
            <span className="dropdown-icon">{dropdownOpen ? "▲" : "▼"}</span>
          </div>
        )}

        {/* {userDetails.userType=="admin" && (
                      <div className='profile-img' onClick={toggleDropdown}>
                        <img src={} alt="sd" />
                        <h5>{userDetails.username}</h5>
                                                <span className="dropdown-icon">{dropdownOpen ? "▲" : "▼"}</span>

                    </div>
                    )} */}
        {dropdownOpen && (
          <div className="dropdown">
            {/* <Link to="" className="dropdown-item">
                  Profile
                </Link> */}
            {/* <button className="dropdown-item logout-btn">
                  Logout
                </button> */}
            <div>
              <h5>Profile</h5>
              <a
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                style={{ textDecoration: "none", color: "black" }}
              >
                <h5>Log out</h5>
              </a>
            </div>
          </div>
        )}
        {show ? (
          <div className="dropdown-about">
            {/* <Link to="" className="dropdown-item">
                  Profile
                </Link> */}
            {/* <button className="dropdown-item logout-btn">
                  Logout
                </button> */}
            <div>
              <div className="dropdown-div">
                <div></div>
                <a
                  href="/Exploremore"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <h5>About us</h5>
                </a>
              </div>
              <div className="dropdown-div">
                <div></div>
                <a
                  href="/Gallery"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <h5>Gallery</h5>
                </a>
              </div>
              <div className="dropdown-div">
                <div></div>
                <a
                  href="/Team"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <h5>Our Team</h5>
                </a>
              </div>
              <div className="dropdown-div">
                <div></div>
                <a
                  href="/Review"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <h5>Testimonial</h5>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {news ? (
          <div className="dropdown-news">
            {/* <Link to="" className="dropdown-item">
                  Profile
                </Link> */}
            {/* <button className="dropdown-item logout-btn">
                  Logout
                </button> */}
            <div>
              <div className="dropdown-div">
                <div></div>
                <a
                  href="/News"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  <h5>News</h5>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {alldown ? (
          <div className="dropdown-all">
            {/* <Link to="" className="dropdown-item">
                  Profile
                </Link> */}
            {/* <button className="dropdown-item logout-btn">
                  Logout
                </button> */}
            <div style={{ display: "flex" }}>
              <div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="/Home"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>Home</h5>
                  </a>
                </div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="/Exploremore"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>About us</h5>
                  </a>
                </div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="/Service"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>Our Service</h5>
                  </a>
                </div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="/Team"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>Our Team</h5>
                  </a>
                </div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="/Gallery"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>Gallery</h5>
                  </a>
                </div>
              </div>
              <div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="/Review"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>Testimonials</h5>
                  </a>
                </div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="/Contact"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>Contact Us</h5>
                  </a>
                </div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="/News"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>News</h5>
                  </a>
                </div>
                <div className="dropdown-div">
                  <div></div>
                  <a
                    href="Shop"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    <h5>Shop</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default Navigationbar;
