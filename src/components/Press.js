import React from "react";
import styles from "./press.css";
import album from "./pics/album.jpeg";
import {Link} from "react-router-dom";

function Press(){
  return(
    <div className = "press row">
      <div className = "row py-1">
        <h1 className = "words col-md-3 text-center">PRESS</h1>
      </div>
      <figure className = "col-md-4 text-center">

      </figure>
      <figure className = "col-md-4 text-center">
        <img src = {album} width = "175"></img>
        <h5 className = "head2 py-1">PROFILE</h5>
        <p className = "p2">Learn more about the artist behind his music and his work on and off the stage</p>
        <Link to = "/about" className = "About" style = {{textDecoration: "none"}}>
          <button className = "button">Read More</button>
        </Link>
      </figure>
      <figure className = "col-md-4 text-center">

      </figure>

    </div>
  )
}

export default Press;
