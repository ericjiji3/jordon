import React,{useState} from "react";
import {NavbarData} from "./NavbarData";
import {Link} from "react-router-dom";
import styles from "./Navbar.css";
import SocialBar from "./SocialBar";
import SignUp from "./SignUp";
import Modal from "react-modal";


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
      <nav className = "tab" style = {{height: "575px"}}>
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
                <li className = "tab py-4">
                  <Link to = {NavbarData[6].path} className = {NavbarData[6].cName} style = {{textDecoration: "none"}}>
                    <span>{NavbarData[6].title}</span>
                  </Link>
                </li>
          </ul>
          <SocialBar/>
          <Modal className = "emailPop" overlayClassName = "emailOverlay" isOpen = {this.state.isOpen} onRequestClose = {() => this.setState({isOpen: !this.state.isOpen})}>
            <SignUp/>
          </Modal>
          <Modal className = "albumPop" overlayClassName = "albumOverlay" isOpen = {this.state.isOpen2} onRequestClose = {() => this.setState({isOpen2: !this.state.isOpen2})}>
            <a href = "https://www.youtube.com/"><img src = "https://i.pinimg.com/originals/8c/d6/b7/8cd6b72ff980245cd55044239c7d1e28.jpg" className = "albumPic"></img></a>
          </Modal>
      </nav>
  );
}
}

export default Navbar;
