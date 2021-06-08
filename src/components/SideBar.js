import React, {useState} from 'react';
import { IconContext } from "react-icons";
import {FaBars} from 'react-icons/fa';
import {NavbarData} from "./NavbarData";
import {Link} from "react-router-dom";
import SocialBar from "./SocialBar";
import SignUp from "./SignUp";
import Modal from "react-modal";
import styles from "./SideBar.css";

const SideBar = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className = "sideBar">
                <IconContext.Provider value = {{className: 'hamburger'}}>
                    <FaBars/>
                </IconContext.Provider>
            <div className = "navWrapper">
                <ul className = "sideTabs list-unstyled text-center">
                    <li className = "sideTab py-4">
                        <Link to = {NavbarData[0].path} className = {NavbarData[0].cName} style = {{textDecoration: "none"}}>
                            <span>{NavbarData[0].title}</span>
                        </Link>
                    </li>
                    <li className = "sideTab py-4">
                        <Link to = {NavbarData[1].path} className = {NavbarData[1].cName} style = {{textDecoration: "none"}}>
                            <a onClick = {() => this.setState({isOpen2: !this.state.isOpen2})}>{NavbarData[1].title}</a>
                        </Link>
                    </li>
                    <li className = "sideTab py-4">
                        <Link to = {NavbarData[2].path} className = {NavbarData[2].cName} style = {{textDecoration: "none"}}>
                            <span>{NavbarData[2].title}</span>
                        </Link>
                    </li>
                    <li className = "sideTab py-4">
                        <Link to = {NavbarData[3].path} className = {NavbarData[3].cName} style = {{textDecoration: "none"}}>
                            <span>{NavbarData[3].title}</span>
                        </Link>
                    </li>
                    <li className = "sideTab py-4">
                        <Link to = {NavbarData[4].path} className = {NavbarData[4].cName} style = {{textDecoration: "none"}}>
                            <a onClick = {() => this.setState({ isOpen: !this.state.isOpen})}>{NavbarData[4].title}</a>
                        </Link>
                    </li>
                    <li className = "sideTab py-4">
                        <Link to = {NavbarData[5].path} className = {NavbarData[5].cName} style = {{textDecoration: "none"}}>
                            <span>{NavbarData[5].title}</span>
                        </Link>
                    </li>
                    <li className = "sideTabL py-4">
                        <Link to = {NavbarData[6].path} className = {NavbarData[6].cName} style = {{textDecoration: "none"}}>
                            <span>{NavbarData[6].title}</span>
                        </Link>
                    </li>
                    <SocialBar/>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;