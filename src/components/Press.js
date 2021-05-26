import React from "react";
import styles from "./press.css";

function Press(){
  return(
    <div className = "press row">
      <div className = "row py-2">
        <h1 className = "words col-md-3 text-center">PRESS</h1>
      </div>
      <figure className = "col-md-4 text-center">

      </figure>
      <figure className = "col-md-4 text-center">
        <img src = "https://nas-national-prod.s3.amazonaws.com/styles/hero_image/s3/sfw_15586958314_eabee7f9c4_o.jpg?itok=Kd8pQv-u" width = "225"></img>
        <h5 className = "head2 py-1">WASSUP</h5>
        <p className = "p2">his knees weak arms are sweaty theres vomit and his sweater already moms spaghetti</p>
        <a href = "https://www.youtube.com/watch?v=SW-BU6keEUw"><button className = "button">Read More</button></a>
      </figure>
      <figure className = "col-md-4 text-center">
        
      </figure>
    </div>
  )
}

export default Press;
