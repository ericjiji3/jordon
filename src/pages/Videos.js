import React from "react"
import Navbar from "../components/Navbar.js";

function Videos(){
  return(
    <div>
    <div className = "row" style = {{marginLeft: "5vw", marginRight: "5vw"}}>
      <div className = "col-md-3">
        <Navbar/>
      </div>
      <div className = "col-md-9">
        <iframe className = "row mx-auto my-3" width="500" height="315" src="https://www.youtube.com/embed/n9eHtXAHInA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className = "row mx-auto my-3" width="500" height="315" src="https://www.youtube.com/embed/-Ib_SfYQpq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    </div>
  )
}

export default Videos;
