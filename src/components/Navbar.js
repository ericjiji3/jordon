import React,{useState} from "react";
import {NavbarData} from "./NavbarData";
import {Link} from "react-router-dom";
import styles from "./Navbar.css";
import SocialBar from "./SocialBar";
import SignUp from "./SignUp";
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
import { IconContext } from "react-icons";
import {FaBars} from 'react-icons/fa';


class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      isOpen2: false
    };
  }
  render(){
    return(
      <nav className = "tab">
          <IconContext.Provider value = {{className: 'hamburger'}}>
            <FaBars/>
          </IconContext.Provider>
          <ul className = "tabs list-unstyled text-center">
                <li className = "tab py-4">
                  <Link to = {NavbarData[0].path} className = {NavbarData[0].cName} style = {{textDecoration: "none"}}>
                    <span>{NavbarData[0].title}</span>
                  </Link>
                </li>
                <li className = "tab py-4">
                  <Link to = {NavbarData[1].path} className = {NavbarData[1].cName} style = {{textDecoration: "none"}}>
                    <a onClick = {() => this.setState({isOpen2: !this.state.isOpen2})}>{NavbarData[1].title}</a>
                  </Link>
                </li>
                <li className = "tab py-4">
                  <Link to = {NavbarData[2].path} className = {NavbarData[2].cName} style = {{textDecoration: "none"}}>
                    <span>{NavbarData[2].title}</span>
                  </Link>
                </li>
                <li className = "tab py-4">
                  <Link to = {NavbarData[3].path} className = {NavbarData[3].cName} style = {{textDecoration: "none"}}>
                    <span>{NavbarData[3].title}</span>
                  </Link>
                </li>
                <li className = "tab py-4">
                  <Link to = {NavbarData[4].path} className = {NavbarData[4].cName} style = {{textDecoration: "none"}}>
                    <a onClick = {() => this.setState({ isOpen: !this.state.isOpen})}>{NavbarData[4].title}</a>
                  </Link>
                </li>
                <li className = "tab py-4">
                  <Link to = {NavbarData[5].path} className = {NavbarData[5].cName} style = {{textDecoration: "none"}}>
                    <span>{NavbarData[5].title}</span>
                  </Link>
                </li>
                <li className = "tabL py-4">
                  <Link to = {NavbarData[6].path} className = {NavbarData[6].cName} style = {{textDecoration: "none"}}>
                    <span>{NavbarData[6].title}</span>
                  </Link>
                </li>
                <SocialBar/>
          </ul>
          <Modal className = "emailPop" overlayClassName = "emailOverlay" isOpen = {this.state.isOpen} onRequestClose = {() => this.setState({isOpen: !this.state.isOpen})}>
            <SignUp/>
          </Modal>
          <Modal className = "albumPop" overlayClassName = "albumOverlay" isOpen = {this.state.isOpen2} onRequestClose = {() => this.setState({isOpen2: !this.state.isOpen2})}>
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
      </nav>
  );
}
}

export default Navbar;
