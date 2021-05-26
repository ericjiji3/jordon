import React from "react";
import {NavbarData} from "./NavbarData";
import {Link} from "react-router-dom";
import styles from "./Navbar.css";
import SocialBar from "./SocialBar";
import SignUp from "./SignUp";

class Navbar extends React.Component{
  state = {
    modalOpen: false
  }
  handleModalOpen = () => {
    this.setState
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
                    <span>{NavbarData[4].title}</span>
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
        </nav>
  );
}
}

export default Navbar;
