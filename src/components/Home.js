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
    </div>
  )
}

export default Home;
