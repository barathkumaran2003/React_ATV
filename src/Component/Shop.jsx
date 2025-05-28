import React, { useEffect, useState } from "react";
import Navigationbar from "./Navigationbar";
import "./Shop.css";
import ABG20 from "../../public/A-BG20.png";
import ABG16 from "../assets/A-BG16.jpg";
import ABG17 from "../assets/A-BG17.jpg";
import ABG18 from "../assets/A-BG18.jpg";
import ABG19 from "../assets/A-BG19.jpg";
import ABG14 from "../../public/A-BG14.png";
import Footer from "./Footer";
import plus from "../../public/plus.png";

function Shop() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [editformOpen, setEditFormOpen] = useState(false);
  const addnews = () => setDropdownOpen(!dropdownOpen);
  const canceledit = () => setEditFormOpen(!editformOpen);
  const [addondata, setAddondata] = useState([]);
  const [user, setUser] = useState("");
  const [userType, setUserType] = useState("");
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    userType: "",
  });
  const [shopDetails, setShopDetails] = useState({
    imgurl: "",
    product: "",
    sprice: "",
  });

  const fetchNewsList = async () => {
    try {
      const response = await fetch("https://atv-backend-ie8n.onrender.com/shop");
      const data = await response.json();
      setAddondata(
        data.map((item) => ({
          imgurl: item.imgurl,
          product: item.product,
          sprice: item.sprice,
        }))
      );
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    setUser(localStorage.getItem("username"));
    const get = localStorage.getItem("username");
    console.log("Title from Singup:", user);
    const fetchUserDetails = async () => {
      try {
        console.log("linkurl", user);
        const response = await fetch(
          `https://atv-backend-ie8n.onrender.com/login?username=${get}`
        );
        const data = await response.json();

        // Extract only what you need
        setUserDetails({
          username: data.username,
          email: data.email,
          userType: data.userType,
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
    fetchNewsList();
  }, []);
  
   const edit= 
     async(product) =>
    
    {
    setUserType(product);
    console.log("Editing product:", product);
    try{
      const editingdata= await fetch(`https://atv-backend-ie8n.onrender.com/shopedit?product=${product}`);
      const shopeditdata = await editingdata.json();
      setShopDetails({
        imgurl: shopeditdata.imgurl,
        product: shopeditdata.product,
        sprice: shopeditdata.sprice,
      }) 
      console.log("Shop details fetched for editing:",shopDetails.imgurl, shopDetails.product, shopDetails.sprice);
      setEditFormOpen(!editformOpen);
    }

    
    
    catch(error){
      console.error("Error fetching product data:", error);
    }
  }
  
  const saveshop = async () => {
    const shopdatan = {
      imgurl: document.getElementById("imgurl").value,
      product: document.getElementById("product").value,
      sprice: document.getElementById("price").value,
    };
    try {
      const response = await fetch("https://atv-backend-ie8n.onrender.com/shop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shopdatan),
      });
      if (response.ok) {
        alert("Shop data saved successfully")
      } else {
        console.error("Failed to save shop data");
      }
      const shopdata = await response.json();
      alert(shopdata.message);
      setAddondata((prev) => [
        {
          imgurl: shopdata.imgurl,
          product: shopdata.product,
          sprice: shopdata.sprice,
        },
        ...prev, // prepend the new item
      ]);
      fetchNewsList();
    } catch (error) {
      console.error("Error saving shop data:", error);
    }
  };

  const changeshopdetails = async (e) => {
    e.preventDefault();
    const updatedShopDetails = {
      imgurl: document.getElementById("changedimgurl").value,
      product: document.getElementById("changedproduct").value,
      sprice: document.getElementById("changedsprice").value,
    };
    try {
      const response = await fetch(`https://atv-backend-ie8n.onrender.com/shopedit?product=${userType}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedShopDetails),
      });
      if (response.ok) {
        alert("Shop details updated successfully");
        setEditFormOpen(false);
        fetchNewsList();
      } else {
        console.error("Failed to update shop details");
      }
    } catch (error) {
      console.error("Error updating shop details:", error);
    }
  }
  const deleteproduct = async (product) => {
    try {
      const response = await fetch(`https://atv-backend-ie8n.onrender.com/shopdelete?product=${product}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Product deleted successfully");
        fetchNewsList();
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
 
 

  return (
    <>
      <div className="shop-bg">
        <div className="news-div">
          <img src={ABG20} alt="bg" className="n-bg1" />
          <div style={{ position: "absolute", top: "20px" }}>
            <Navigationbar />
            <h1 className="banner-title">Shop</h1>
          </div>
        </div>
        <div className="s-div">
          <div className="s-div1">
            <div className="s-div2">
              <a href="" className="s-a">
                <div>All</div>
              </a>
            </div>
            <div className="s-div2">
              <a href="" className="s-a1">
                <div>Helmet</div>
              </a>
            </div>
            <div className="s-div2">
              <a href="" className="s-a1">
                <div>Protection Set</div>
              </a>
            </div>
          </div>
          <div className="s-price">
            <div
              style={{
                width: "1400px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                position: "relative",
              }}
            >
              {addondata.map((item, index) => (
                <div key={index} >
                  <div className="price-img-div" style={{position: "relative"}}>  
                    <img src={item.imgurl} alt="uyt" className="price-img" />
                  {userDetails.userType == "admin" && (
                    <>
                    <div style={{position: "absolute", color: "white", cursor: "pointer", top:0}} onClick={()=> edit(item.product)}>
                    edit
                  </div>
                  <div style={{position: "absolute", color: "white", cursor: "pointer", top:'30px'}} onClick={()=> deleteproduct(item.product)}>
                    delet
                  </div>   
                    </>
                  )}
                  {userDetails.userType == "user" && (
                    <div style={{position: "absolute", color: "white", cursor: "pointer", top:0}}>
                      buy
                    </div>
                  )

                  }
                  </div>
                  <h5 className="price-head">{item.product}</h5>
                  <h5 style={{ color: "white" }}>{item.sprice}</h5>
                </div>
                
                
              ))}

               {editformOpen &&(
                  <form onSubmit={changeshopdetails}>
                    <input type="text" placeholder="img" id="changedimgurl" /><br />
                    <input type="text" value={shopDetails.product} placeholder="product" id="changedproduct"/><br />
                    <input type="text"  placeholder="price" id="changedsprice"/><br />
                    <input type="submit" value="change" />
                    <div>
                      <button onClick={canceledit} style={{cursor: "pointer", color: "white"}}>cancel</button>
                    </div>
                  </form>
                )}
             

              {userDetails.userType == "admin" && (
                <div className="add-news" onClick={addnews}>
                  <div className="add-news1">
                    <div
                      style={{
                        padding: "10px",
                        borderRadius: "50px",
                        border: "2px dotted green",
                      }}
                    >
                      <img src={plus} alt="asd" />
                    </div>
                  </div>
                </div>
              )}
              {dropdownOpen && (
                <div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault(); // Prevent page reload
                      saveshop(); // Call your function
                    }}
                    style={{ display: "block" }}
                  >
                    <input type="text" id="imgurl" placeholder="Image URL" />{" "}
                    <br />
                    <input type="text" id="product" placeholder="product" />
                    <br />
                    <input type="text" id="price" placeholder="price" />
                    <br />
                    <input type="submit" value="Add" />
                  </form>

                  <div
                    style={{ cursor: "pointer", color: "white" }}
                    onClick={addnews}
                  >
                    cancel
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
        <div className="experience">
          <div>
            <img src={ABG14} alt="" className="experience-img" />
            <div>
              <div className="up" style={{ position: "absolute" }}>
                <div className="in-animation4" id="experience-button">
                  <a href="/Contact">
                    {" "}
                    <h5>GET STARTED</h5>
                  </a>
                </div>
              </div>

              <div
                style={{
                  paddingTop: "150px",
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
                  Whether you're a seasoned rider or just starting out, we've
                  got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Shop;
