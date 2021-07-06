import React, {useState} from "react";
import Slide from "./Slide";
import {SlideData} from "./SlideData";
import AlbumPic from "./AlbumPic";
import Press from "./Press";
import Navbar from "./Navbar";
import styles from "./Home.css";
import Modal from "react-modal";
import trailer from "./pics/trailer.MOV";
import pic6 from "./pics/pic6.png";

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render(){
    return(
      <div>
        <div className = "row" style={{marginLeft: "0vw", marginRight: "0vw"}}>
          <div className = "col-sm-3 mb-1">
            <Navbar/>
          </div>
          <div className = "slide col-sm-9">
            <Slide slides = {SlideData}/>
          </div>
        </div>
        <div>

           <a className = "linkPic" href = "http://hyperurl.co/jordon.CHROMA"><div className= "linkPic-text"> LATEST SOUNDS </div><img src = {pic6} className = "pic"></img></a>
        </div>
        <iframe className = "however row mx-auto my-3" src="https://www.youtube.com/embed/zxA9LQOj2_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Press/>
        <Modal isOpen = {this.state.isOpen} onRequestClose = {() => this.setState({isOpen: !this.state.isOpen})} style={
            {
              overlay:{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
              },
              content:{
                position: 'absolute',
                top: '25vh',
                left: '38vw',
                right: '38vw',
                bottom: '30vh',
                border: '1px solid black',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '0px'

              }
            }
          }>
          <a href = "https://www.youtube.com/"><img src = "https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg" className = "albumPic"></img></a>
        </Modal>
    </div>
    )
  }
}

export default Home;
