import React, { useEffect, useState } from "react";
import ABG1 from "../../public/A-BG1.png";
import plus from "../../public/plus.png";
import Navigationbar from "./Navigationbar";


import "./News.css";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";
function Atvn() { 

        const {user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
      const [dropdownOpen, setDropdownOpen] = useState(false);
    const [addondata2, setAddondata2]=useState([]);

     const [userDetails, setUserDetails] = useState({username: '',email: '',userType:''});
        const addnews = () => setDropdownOpen(!dropdownOpen);
        const fetchNewsList = async () => {
  try {
    const response = await fetch("https://atv-backend-ie8n.onrender.com/news");
    const data = await response.json();
    setAddondata2(data.map(item => ({
      imglink: item.img,
      newhead: item.heading,
      newdata: item.ndate,
      newdetails: item.content
    })));
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};


   useEffect(() => {
  if (isAuthenticated && user) {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://atv-backend-ie8n.onrender.com/login?username=${user.name}`);
        const data = await response.json();
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
    fetchNewsList();
  
}
}, [isAuthenticated, user]);


    const savenews=async()=>{
        const newsdata = {
    img: document.getElementById("imgurl").value,
    ndate: document.getElementById("date").value,
    heading: document.getElementById("heading").value,
    content: document.getElementById("news").value,
  }; 

        try {
    const response = await fetch("https://atv-backend-ie8n.onrender.com/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsdata),
    });

    if (!response.ok) {
      const errorData = await response.text(); // You can also use `.json()` if your backend returns JSON error
      throw new Error(`Server Error: ${errorData}`);
    }
    const getdata = await response.json();
    alert("News added successfully"); // Only if fetch was successful

    // Assuming the server returns an array of news items
    setAddondata2(prev => [
  {
    imglink: getdata.img,
    newhead: getdata.heading,
    newdata: getdata.ndate,
    newdetails: getdata.content
  },
  ...prev // prepend the new item
]);
    fetchNewsList();
  }catch (error) {
      console.error("Fetch Error:", error.message);
      alert("Network error or server not reachable.");
    }
    }
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
          <div style={{width:"1440px", display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems :"center", gap:"30px"}}>
              {addondata2.map((item, index) => (
  <div key={index} className="part-div">
    <div className="w-img-div">
      <img src={item.imglink} alt="news" className="w-img" />
    </div>
    <div className="w-text-div">
      <p>{item.newdata}</p>
      <h3>{item.newhead}</h3>
      <p>{item.newdetails}</p>
      <p style={{color:'#68e5b2'}}>Read Full post</p>
    </div>
  </div>
))}
            {userDetails.userType=="admin" &&(
              <div className="add-news" onClick={addnews} >
                    <div className="add-news1">
                      <div style={{padding:'10px', borderRadius:'50px', border:'2px dotted green'}}>
                        <img src={plus} alt="asd" />            

                      </div>
                    </div>
              </div>
            )}
            {dropdownOpen&&(
              <div>
                 <form onSubmit={(e) => {
  e.preventDefault(); // Prevent page reload
  savenews();         // Call your function
}} style={{display:'block'}}>
  <input type="text" id="imgurl" placeholder="Image URL" /> <br />
  <input type="text" id="date" placeholder="Date" /><br />
  <input type="text" id="heading" placeholder="Heading" /><br />
  <input type="text" id="news" placeholder="News content" /><br />
  <input type="submit" value="Add" />
</form>

                 <div style={{cursor:'pointer'}} onClick={addnews} >
                    cancel
                  </div>
              </div>
            )}
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
      </div>
      <Footer />
    </>
  );
}
export default Atvn;
