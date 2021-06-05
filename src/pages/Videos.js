import React from "react"
import Navbar from "../components/Navbar.js";
import styles from "./Videos.css";
import trailer from "../components/pics/trailer.MOV";

function Videos(){
  return(
    <div>
    <div className = "row" style = {{marginLeft: "-4vw", marginRight: "-4vw"}}>
      <div className = "col-md-3">
        <Navbar/>
      </div>
      <div className = "col-md-9 text-center">
        <iframe className = "coffee py-2" src="https://www.youtube.com/embed/jajJPlCs2nY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <video className = "trailer py-2" controls>
              <source src={trailer}>
              </source>
          </video>
      </div>
    </div>
    </div>
  )
}

export default Videos;
