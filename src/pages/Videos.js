import React from "react"
import Navbar from "../components/Navbar.js";
import styles from "./Videos.css";


function Videos(){
  return(
    <div>
    <div className = "row" style = {{marginLeft: "5vw", marginRight: "5vw"}}>
      <div className = "col-md-3">
        <Navbar/>
      </div>
      <div className = "col-md-9 text-center">
        <iframe className = "coffee" src="https://www.youtube.com/embed/jajJPlCs2nY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    </div>
    </div>
  )
}

export default Videos;
