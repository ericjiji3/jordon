import React, {Component} from "react"
import Navbar from "../components/Navbar.js";

function Projects(){
  return(
    <div>
    <div className = "row" style = {{marginLeft: "-4vw", marginRight: "-4vw"}}>
      <div className = "col-md-3">
        <Navbar/>
      </div>
      <div className = "col-md-9 text-center my-auto">
        <h1>Coming Soon...</h1>
      </div>
    </div>
    </div>
  )
}

export default Projects;
