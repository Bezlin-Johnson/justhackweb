import React, { Component } from "react";
import "./App.css";
import fire from "./fire";

class Login extends Component {
  state = {
    error: null,
    err: null,
    user: null,
  };
  login = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const checkmail = email.length;
    if (
      email[checkmail - 1] !== "m" &&
      email[checkmail - 2] !== "o" &&
      email[checkmail - 3] !== "c" &&
      email[checkmail - 4] !== "." &&
      email[checkmail - 5] !== "l" &&
      email[checkmail - 6] !== "i" &&
      email[checkmail - 7] !== "a" &&
      email[checkmail - 8] !== "m" &&
      email[checkmail - 9] !== "g" &&
      email[checkmail - 10] !== "@"
    ) {
      this.setState({ error: "Email Invalid!" });
      return;
    } else if (password.length <= 5) {
      this.setState({ error: "Password Should Be 6 Char Long." });
      return;
    } else {
      this.setState({ error: "Connecting..." });
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((a) => {
          this.setState({ error: "" });
          this.setState({ user: "yes" });
        })
        .catch((err) => {
          this.setState({ user: "no" });
          alert(err);
          this.setState({ error: "" });
        });
    }
  };
  render() {
    return (
      <div>
        <div className="form">
          <h1 className="loginheading">Login</h1>
          <input
            id="email"
            placeholder="Enter your email"
            className="inputboxstyling"
          />
          <br />
          <br />
          <input
            id="password"
            placeholder="Password"
            className="inputboxstyling"
          />
          <br />
          <button onClick={this.login} className="loginbtn">
            Log In
          </button>
          <br />
          <h2 className="justred">{this.state.error}</h2>
        </div>
        {this.state.user === "yes" ? <Loginset /> : console.log()}
      </div>
    );
  }
}

class Loginset extends Component {
  render() {
    return (
      <div className="set">
        <img
          className="slogo"
          src="https://img.icons8.com/color/96/000000/checked-2.png"
          alt="logo"
        />
        <h1>Log In Successful</h1>
        <a href="/">
          <button className="loginbtnn">Get In</button>
        </a>
      </div>
    );
  }
}

export default Login;
