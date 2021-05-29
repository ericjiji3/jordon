import React from "react";
import Slide from "./Slide";
import {SlideData} from "./SlideData";
import AlbumPic from "./AlbumPic";
import Press from "./Press";
import Navbar from "./Navbar";
import styles from "./Home.css";

function Home(){
  return(
    <div>
      <div className = "row" style={{marginLeft: "5vw", marginRight: "5vw"}}>
        <div className = "col-md-3">
          <Navbar/>
        </div>
        <div className = "col-md-9">
          <Slide slides = {SlideData}/>
        </div>
      </div>
      <AlbumPic/>
      <Press/>
      <iframe className = "row mx-auto my-5" width="500" height="315" src="https://www.youtube.com/embed/n9eHtXAHInA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Home;
