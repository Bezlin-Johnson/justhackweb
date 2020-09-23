import React, { Component } from "react";
import "./App.css";
import fire from "./fire.js";

const db = fire.firestore();
class Register extends Component {
  state = {
    isemailok: "",
    isnameok: "",
    isnumberok: "",
    islocationok: "",
    name: "",
    mango: false,
  };
  actualsubmit = (email, name, number, location) => {
    if (email === "" || name === "" || number === "" || location === "") {
      return;
    } else {
      db.collection("users").doc(name).set({
        name: name,
        email: email,
        number: number,
        location: location,
      });
      this.setState({ mango: true });
    }
  };
  submitclicked = (event) => {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    this.setState({ name: name });
    var number = document.getElementById("number").value;
    var location = document.getElementById("commentbox").value;
    var checkmail = email.length;
    if (email === "") {
      this.setState({ isemailok: "Required Field." });
    } else if (checkmail <= 10) {
      this.setState({ isemailok: "Email Invalid!" });
    } else if (
      email[checkmail - 1] === "m" &&
      email[checkmail - 2] === "o" &&
      email[checkmail - 3] === "c" &&
      email[checkmail - 4] === "." &&
      email[checkmail - 5] === "l" &&
      email[checkmail - 6] === "i" &&
      email[checkmail - 7] === "a" &&
      email[checkmail - 8] === "m" &&
      email[checkmail - 9] === "g" &&
      email[checkmail - 10] === "@"
    ) {
      this.setState({ isemailok: "" });
    } else {
      this.setState({ isemailok: "Email Invalid!" });
    }
    if (name === "") {
      this.setState({ isnameok: "Required Field" });
    } else if (name.length <= 2) {
      this.setState({ isnameok: "Give Proper name." });
    } else {
      this.setState({ isnameok: "" });
    }
    if (number === "") {
      this.setState({ isnumberok: "Required Field" });
    } else if (number.length <= 9) {
      this.setState({ isnumberok: "Invalid Number" });
    } else {
      this.setState({ isnumberok: "" });
    }
    if (location === "") {
      this.setState({ islocationok: "Required Field" });
    } else {
      this.setState({ islocationok: "" });
    }
    if (
      this.state.islocationok === "" &&
      this.state.isnumberok === "" &&
      this.state.isnameok === "" &&
      this.state.isemailok === ""
    ) {
      this.actualsubmit(email, name, number, location);
    }
  };
  render() {
    return (
      <div className="regsiterbox">
        <h1>Register</h1>
        <h6 className="invalidemail">{this.state.isemailok}</h6>
        <input
          id="email"
          placeholder="Enter your email"
          className="rinputboxstyling"
        />
        <br />
        <h6 className="invalidemail">{this.state.isnameok}</h6>
        <input id="name" placeholder="Full Name" className="rinputboxstyling" />
        <br />
        <h6 className="invalidemail">{this.state.isnumberok}</h6>
        <input
          id="number"
          placeholder="Phone Number"
          className="rinputboxstyling"
        />
        <br />
        <textarea
          id="commentbox"
          name="note"
          className="rinputboxstyling"
          placeholder="Tell us something about yourself."
        ></textarea>
        <h6 className="invalidemaild">{this.state.islocationok}</h6>
        <br />
        <button onClick={this.submitclicked} className="loginbtn">
          SUBMIT
        </button>
        {this.state.mango === true ? <Set /> : console.log()}
      </div>
    );
  }
}

class Set extends Component {
  state = {};
  render() {
    return (
      <div className="seta">
        <img
          className="slogo"
          src="https://img.icons8.com/color/96/000000/checked-2.png"
          alt="logo"
        />
        <h1>HOOOREEYYY YOU ARE IN.</h1>
        <a href="/">
          <button className="loginbtnn">Home</button>
        </a>
      </div>
    );
  }
}

export default Register;
