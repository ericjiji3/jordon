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
      isOpen: false
    };
  }

  render(){
    return(
      <nav className = "tab" style = {{height: "500px"}}>
          <ul className = "tabs list-unstyled text-center">
                <li className = "tab py-4">
                  <Link to = {NavbarData[0].path} className = {NavbarData[0].cName} style = {{textDecoration: "none"}}>
                    <span>{NavbarData[0].title}</span>
                  </Link>
                </li>
                <li className = "tab py-4">
                  <Link to = {NavbarData[1].path} className = {NavbarData[1].cName} style = {{textDecoration: "none"}}>
                    <span>{NavbarData[1].title}</span>
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
                  left: '30vw',
                  right: '30vw',
                  bottom: '40vh',
                  border: '1px solid black',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none'

                }
              }
            }>
            <SignUp/>
          </Modal>
      </nav>
  );
}
}

export default Navbar;
