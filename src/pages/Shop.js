import React from "react"
import Navbar from "../components/Navbar.js"

function Shop(){
  return(
    <div>
    <div className = "row" style = {{marginLeft: "-4vw", marginRight: "-4vw"}}>
      <div className = "col-md-3">
        <Navbar/>
      </div>
      <div className = "col-md-9 text-center my-auto mt-5">
        <h1>Coming Soon...</h1>
      </div>
    </div>
    </div>
  )
}

export default Shop;
