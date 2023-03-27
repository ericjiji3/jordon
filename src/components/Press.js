import React from "react";
import pic7 from "./pics/pic7.jpeg";
import podcast from "./pics/podcast.jpeg";
import {Link} from "react-router-dom";

function Press(){
  return(
    <div className = "press row">
      <div className = "pressDiv row py-1">
        <h1 className = "words col-md-3 text-center">PRESS</h1>
      </div>
      <div className = "col-md-1">
      </div>
      <figure className = "col-md-4 mx-auto px-0 text-center">
        <img src = {pic7} width = "150" alt = "err"></img>
        <h5 className = "head2 py-1">PROFILE</h5>
        <p className = "p2">Learn more about the artist behind his music and his work on and off the stage</p>
        <Link to = "/about" className = "About" style = {{textDecoration: "none"}}>
          <button className = "button">Read More</button>
        </Link>
      </figure>
      <figure className = "col-md-4 mx-auto px-0 text-center">
        <img src = {podcast} height = "225" alt = "err"></img>
        <h5 className = "head2 py-1">BEVO BEATS: HIP HOP ON THE 40 ACRES</h5>
        <p className = "p2">Listen to Jordon on this episode of Bevo Beats, focusing on the the disconnect between local hip hop scenes and the UT campus.</p>
        <a href={'https://open.spotify.com/episode/5NOcX0vwjtsIWonBYa3d3a'} className = "About" style = {{textDecoration: "none"}}>
          <button className = "button">Listen More</button>
        </a>
      </figure>
      <div className = "col-md-1">
      </div>
    </div>
  )
}

export default Press;
