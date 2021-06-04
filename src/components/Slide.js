import React, { useEffect, useState } from "react";
import {SlideData} from "./SlideData";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {BiLeftArrowAlt, BiRightArrowAlt} from "react-icons/bi";
import {TiArrowLeftOutline, TiArrowRightOutline} from "react-icons/ti";
import styles from "./Slide.css";


function Slide(props){
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === props.slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? props.slides.length - 1 : current - 1)
  }


  if(!Array.isArray(props.slides) || props.slides.length <= 0){
    return null;
  }
  return(
    <div className = "slides">
      <TiArrowLeftOutline className = "leftArrow" onClick = {prevSlide}/>
      <TiArrowRightOutline className = "rightArrow" onClick = {nextSlide}/>
      {SlideData.map((slide, index) => {
        return(
          <div className = {index === current ? 'slide active' : 'slideInactive'} key = {index}>
            {index === current && (<img src = {slide.image} alt = "errror" className = {slide.cName}></img>)}
          </div>
        )
      })}
    </div>
  )
}

export default Slide;
