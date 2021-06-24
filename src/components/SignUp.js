import React, {Component} from "react";
import Modal from 'react-modal';
import styles from "./SignUp.css";
import Axios from "axios";

class SignUp extends Component{
  constructor(props){
    super()
    this.state = {
      fName: "",
      lName: "",
      eMail: "",
      number: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value,

    })
  }

  handleSubmit(event){
    event.preventDefault()
    Axios.post("https://www.jordon-inrwav.com/insert", {
      firstName: this.state.fName,
      lastName: this.state.lName,
      email: this.state.eMail,
      number: this.state.number}).then(()=>{
        alert('success!')
      });
    alert("success!")
  }

  render(){
    return(
        <form className = "my-4" onSubmit = {this.handleSubmit}>
          <h4 className = "emailHead text-center my-3">SIGNUP FOR NOTIFICATIONS</h4>
          <div className = "row px-3">
            <label className = "labels col-sm-6">
              First Name:
              <br/>
              <input type = 'text' name = "fName" onChange = {this.handleChange}></input>
            </label>
            <label className = "labels col-sm-6">
              Last Name:
              <br/>
              <input type = 'text' name = "lName" onChange = {this.handleChange}></input>
            </label>
          </div>
          <div className = "row px-3">
            <label className = "labels">
              Email Address:
              <br/>
              <input type = 'text' className = "w-100" name = "eMail" onChange = {this.handleChange}></input>
            </label>
          </div>
          <div className = "row px-3">
            <label className = "labels">
              Phone Number:
              <br/>
              <input type = 'text' className = "w-100" name = "number" onChange = {this.handleChange}></input>
            </label>
          </div>
          <div className = "text-center mt-4">
            <button className = "w-25" type = "submit">SUBMIT</button>
          </div>
        </form>
    );
  }
}

export default SignUp
