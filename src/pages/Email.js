import React from "react"
import Navbar from "../components/Navbar.js";
import SignUp from "../components/SignUp.js";
function Email(){
  return(
  <div>
    <div className = "row" style = {{marginLeft: "5vw", marginRight: "5vw"}}>
      <div className = "col-md-3">
        <Navbar/>
      </div>
      <div className = "col-md-9 mt-5">
        <SignUp/>
      </div>
    </div>
  </div>
  )
}

export default Email;
