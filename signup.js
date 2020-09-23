import React, { Component } from "react";
import "./App.css";
import fire from "./fire";

const db = fire.firestore();
class Signup extends Component {
  state = {
    error: null,
    err: null,
    user: null,
    status: "",
    url: "",
  };
  signin = (e) => {
    if (this.state.status === "Uploading...") {
      this.setState({ error: "Uploading" });
      return;
    } else {
      this.setState({ error: "" });
    }
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
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
    } else if (name.length <= 3) {
      this.setState({ error: "Name is required." });
      return;
    } else {
      this.setState({ error: "Connecting..." });
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((a) => {
          this.setState({ error: "" });
          this.setState({ user: "yes" });
          db.collection("store").doc(email).set({
            name: name,
            url: this.state.url,
            android: "logo1 devicon-android-plain-wordmark colored",
            angular: "logo1 devicon-angularjs-plain colored",
            atom: "logo1 devicon-atom-original colored",
            bootstrap: "logo1 devicon-bootstrap-plain colored",
            c: "logo1 devicon-c-plain colored",
            cplusplus: "logo1 devicon-cplusplus-plain colored",
            csharp: "logo1 devicon-csharp-line colored",
            css: "logo1 devicon-css3-plain colored",
            debian: "logo1 devicon-debian-plain colored",
            django: "logo1 devicon-django-plain colored",
            dotnet: "logo1 devicon-dot-net-plain colored",
            github: "logo1 devicon-github-plain colored",
            html: "logo1 devicon-html5-plain colored",
            java: "logo1 devicon-java-plain colored",
            javascript: "logo1 devicon-javascript-plain colored",
            linux: "logo1 devicon-linux-plain colored",
            sql: "logo1 devicon-mysql-plain colored",
            node: "logo1 devicon-nodejs-plain-wordmark colored",
            npm: "logo1 devicon-npm-original-wordmark colored",
            php: "logo1 devicon-php-plain colored",
            pycharm: "logo1 devicon-pycharm-plain colored",
            python: "logo1 devicon-python-plain colored",
            react: "logo1 devicon-react-original colored",
            typescript: "logo1 devicon-typescript-plain colored",
            ubuntu: "logo1 devicon-ubuntu-plain colored",
            vscode: "logo1 devicon-visualstudio-plain colored",
            windows: "logo1 devicon-windows8-original colored",
          });
        })
        .catch((err) => {
          this.setState({ user: "no" });
        });
    }
  };

  inputclicked = async (e) => {
    this.setState({ status: "Uploading..." });
    const file = e.target.files[0];
    const storageRef = fire.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    this.setState({ url: await fileRef.getDownloadURL() });
    if (this.state.url === "") {
      return;
    } else {
      this.setState({ status: "Uploaded" });
    }
  };

  render() {
    return (
      <div>
        {this.signin}
        <div className="form">
          <h1 className="loginheading">Signup</h1>
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
          <br />
          <input id="name" placeholder="Name" className="inputboxstyling" />
          <br />
          <input
            onChange={this.inputclicked}
            type="file"
            className="choosefile"
            accept="image/x-png,image/gif,image/jpeg"
          />
          <br />
          Profile Pic optional
          <br />
          <h2>{this.state.status}</h2>
          <button className="loginbtn" onClick={this.signin}>
            Sign Up
          </button>
          <br />
          <h2 className="justred">{this.state.error}</h2>
        </div>
        {this.state.user === "yes" ? <Signupset /> : console.log()}
      </div>
    );
  }
}

class Signupset extends Component {
  render() {
    return (
      <div className="seta">
        <img
          className="slogo"
          src="https://img.icons8.com/color/96/000000/checked-2.png"
          alt="logo"
        />
        <h1>Sign Up Successful</h1>
        <a href="/">
          <button className="loginbtnn">Get In</button>
        </a>
      </div>
    );
  }
}

export default Signup;
