import React from "react";
import Navbar from "../components/Navbar.js";
import styles from "./Stages.css";

function Stages(){
  return(
    <div>
      <div className = "row" style = {{marginLeft: "-4vw", marginRight: "-4vw"}}>
        <div className = "col-md-3">
          <Navbar/>
        </div>
        <div className = "col-md-9 text-center my-4">
          <div className = "row mx-auto">
              <img src = "https://lh6.googleusercontent.com/BWmdqf9JL3HZ5zj5jfUuwnHxVlShnkoYvnPpFTKHlTBn1z-4T-47cprAmoyllJd09WujN94WFOlFTsguLKBjlKiDIbuR3iir4Yl6SL1KA5mEJTnEC6OIkuS3Q-GvkFUEvcJcVA07" className = "banner mb-4"></img>
              <h1>Coming Soon...</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stages;
