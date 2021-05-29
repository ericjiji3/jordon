import React from "react";
import Navbar from "../components/Navbar.js";

function Stages(){
  return(
    <div>
      <div className = "row" style = {{marginLeft: "5vw", marginRight: "5vw"}}>
        <div className = "col-md-3">
          <Navbar/>
        </div>
        <div className = "col-md-9 text-center my-4">
          <div className = "row">
              <img src = "https://sweep.ac.uk/wp-content/uploads/blue-banner.jpg" height = "200" className = "mb-4"></img>
              <h1>Coming Soon...</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stages;
