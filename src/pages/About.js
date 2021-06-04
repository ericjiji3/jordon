import React, {useState} from "react";
import Navbar from "../components/Navbar.js";
import styles from "./About.css";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faItunesNote,
  faAmazon,
  faGooglePlay,
  faYoutube,
  faDeezer
} from "@fortawesome/free-brands-svg-icons";


class About extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render(){
    return(
    <div>
      <div className = "row" style = {{marginLeft: "5vw", marginRight: "5vw"}}>
        <div className = "col-md-3">
          <Navbar/>
        </div>
        <div className = "col-md-3">
          <img className = "about" src = "https://lh6.googleusercontent.com/lFE_yCc0NJMTKrgdO9kCNF6SeRQaWDOczbddbGIBBRo3ySEHTceKY4lwFaIcdXDSCYSEPnWaEapSf6c4KdHcX2UhG_ByJwCBFVmZvMBfjS8gX8rEL2pTTERfTBrA-_3iL-s5FBqN"></img>
        </div>
        <div className = "col-md-5">
          <span className = "text">
            For Jordon, music is more than a collection of notes, it's an experience. As a child, Jordon’s love for music began in car rides with his father. Whether it was R&B/Soul icons Marvin Gaye and Sade or rock moguls Fleetwood Mac and Pink Floyd, Jordon was beginning to develop a colorful palette that would influence his musical creations. As an adolescent, artists Drake, Kid Cudi, and J. Cole helped to propel Jordon’s interest in Hip-Hop. Writing raps on notebook paper in the back of the bus, a thirteen year old Jordon's love deepened as he rediscovered music as an expression of himself. Everyday after soccer practice, Jordon could be found learning the art of production as he experimented with recording setups and music. At eighteen, Jordon had already gained a strong affinity for performing his music live. Showcasing his talents in multiple cities across Texas, his stage presence cultivated him a small but loyal following. Now Jordon's passion continues to grow with each project he creates. Jordon, reigning from Houston, Texas, dropped his new EP CHROMA on June 4th, 2021.
          </span><br/><br/>
        <button className = "but" type = "button" onClick = {() => this.setState({isOpen: !this.state.isOpen})}>LISTEN NOW</button>
        </div>
        <Modal className = "aboutPop" overlayClassName = "aboutOverlay" isOpen = {this.state.isOpen} onRequestClose = {() => this.setState({isOpen: !this.state.isOpen})}>
          <div className = "bold row pt-4 pb-3">
            <h2>LISTEN ON:</h2>
          </div>
          <a className = "l1 row d-block" href = "https://open.spotify.com/album/2fjpmy9hTMQdm7z5AIjfH1?si=kulDq64HSBGRGEx5lq281w&nd=1">
              <FontAwesomeIcon icon={faSpotify} size = "4x"/>
              <h3 className = "t1 d-inline">SPOTIFY</h3>
          </a>
          <a className = "l2 row d-block" href = "https://music.apple.com/us/album/chroma-ep/1566164837?ls=1&app=music&at=11lEW&ct=xz1s2y">
            <FontAwesomeIcon icon={faApple} size = "4x"/>
            <h3 className = "t2 d-inline">APPLE</h3>
          </a>
          <a className = "l3 row d-block" href = "https://tidal.com/browse/album/183073999">
            <FontAwesomeIcon icon={faDeezer} size = "4x"/>
            <h3 className = "t3 d-inline">TIDAL</h3>
          </a>
          <a className = "l4 row d-block" href = "https://music.apple.com/us/album/chroma-ep/1566164837?ls=1&app=music&at=11lEW&ct=xz1s2y">
            <FontAwesomeIcon icon={faItunesNote} size = "4x"/>
            <h3 className = "t4 d-inline">ITUNES</h3>
          </a>
          <a className = "l5 row d-block" href = "https://music.amazon.com/albums/B0947DVT1M?marketplaceId=ATVPDKIKX0DER&tag=smarturl-pivot-20&musicTerritory=US&">
            <FontAwesomeIcon icon={faAmazon} size = "4x"/>
            <h3 className = "t5 d-inline">AMAZON</h3>
          </a>
          <a className = "l6 row d-block mb-3" href = "https://open.spotify.com/artist/6dZMYil8Wj3zvMFS5hoA8U">
            <FontAwesomeIcon icon={faYoutube} size = "4x"/>
            <h3 className = "t6 d-inline">YOUTUBE MUSIC</h3>
          </a>
        </Modal>
      </div>
    </div>
    )
  }
}

export default About;
