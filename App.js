// /* /index.html 200
import React, { Component } from "react";
import "./App.css";
import fire from "./fire.js";

const db = fire.firestore();
class Core extends Component {
  state = {
    data: null,
    links: null,
    profilepic: null,
    profilename: null,
    send: "",
  };
  componentDidMount = () => {
    const data = db.collection("store").doc(this.props.emailpresent);
    data.get().then((doc) => {
      const deta = doc.data();
      const { url } = deta;
      const { name } = deta;
      this.setState({ profilename: name });
      this.setState({ profilepic: url });
    });
  };
  send = () => {
    var comment = document.getElementById("commentbox").value;
    var commentname = this.state.profilename;
    if (comment === "" || commentname === "") {
      this.setState({ send: "Required  Field" });
      return;
    } else {
      db.collection("comments").doc(commentname).set({
        name: commentname,
        comment: comment,
      });
      this.setState({ send: "Your message was send" });
      document.getElementById("commentbox").value = "";
    }
  };
  render() {
    return (
      <div className="mainclass">
        <a href={this.state.profilepic}>
          <img
            src={
              this.state.profilepic === ""
                ? "https://lh3.googleusercontent.com/proxy/HRHAqb3O11P-bEdxPUEBd4U8RXWduismk08Pz3eTbLNtLzmznQfTAdMNm4AKup5SNGoqECHaUJAWrsNfbN9qeRaKPtOJ53g_sdHZGYECNxzTy2DPjyRfgA"
                : this.state.profilepic
            }
            alt="profilepic"
            className="profilepic"
          />
        </a>
        <h1 className="profilename">{this.state.profilename}</h1>
        <a href="/editprofile">
          <img
            className="profiledit"
            src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"
          />
        </a>
        <a href="https://hackclub.com">
          <img
            src="https://assets.hackclub.com/flag-orpheus-top.png"
            alt="Hackclub"
            className="hackbaner"
          />
        </a>
        <h1 className="justhackheading" id="coch">
          JUSTHACK 2020 BY HACK CLUB @ SHEMS
        </h1>
        <p className="hackexplanation">
          A Digital Hackathon you will never forget.
        </p>
        <br />
        <a href="/register">
          <button className="registerbtn">REGISTER</button>
        </a>
        <br />
        <a href="/hackers">
          <button className="hackerbtn">HACKERS</button>
        </a>
        <br />
        <a href="/team">
          <button className="teambutton">Set up Team</button>
        </a>
        <br />
        <div className="boxbox">
          <div className="box">
            <h1>POST</h1>
            <p>
              Hey {this.state.profilename},
              <br />
              You can post your pics here and have fun let others no you are
              coding. If you dont mind use it as instagram alternative.
            </p>
            <a href="/post">
              <button className="boxbtn">GET IN</button>
            </a>
          </div>
          <div className="box">
            <h1>CHAT</h1>
            <p>
              Hi {this.state.profilename},
              <br />
              You can have a global chat about the hackathon or tech
              .Collaboration is cool so do share each other and clear doubts.
            </p>
            <a href="/chat">
              <button className="boxbtn">GET IN</button>
            </a>
          </div>
          <div className="box">
            <h1>HELP!</h1>
            <p>
              Hello {this.state.profilename},
              <br />
              Have a bunch of doubts to get cleared .Dont worry the just hack
              team is there to help you jump in and clear fast.
            </p>
            <a href="/help">
              <button className="boxbtn">GET IN</button>
            </a>
          </div>
        </div>
        <h1 className="reachus">Reach Us</h1>
        <div className="reachclass">
          <textarea
            id="commentbox"
            name="note"
            className="coment"
            placeholder="Text us your problems we will try to reach you faaaaast."
          ></textarea>
          <br />
          <button onClick={this.send} className="reachussend">
            SEND
          </button>
          <h1 className="justred">{this.state.send}</h1>
          <h2 className="supercall">
            You can Join our Whatsapp Group to Clear your Doubts.
          </h2>
          <a href="https://chat.whatsapp.com/Kd0RJBZY2iv6p5JMpa3JXj">
            <button className="whatsapp">JOIN</button>
          </a>
          <div className="footer">
            <h3>
              JUST HACK 2020 - @hackclub hackathon
              <a href="/developer">Know_Developer</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

class Choose extends Component {
  state = {};
  render() {
    return (
      <div className="form">
        <h1 className="loginheading">Login/Signup</h1>
        <a href="/login">
          <button className="loginbtnn">Log In</button>
        </a>
        <br />
        <a href="/signup">
          <button className="loginbtnn">Sign Up</button>
        </a>
      </div>
    );
  }
}

class Main extends Component {
  state = {
    userdetails: null,
    user: null,
    emailpresent: null,
  };
  componentDidMount = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userdetails: user });
        this.setState({ user: "yes" });
        const { email } = user;
        this.setState({ emailpresent: email });
      } else {
        this.setState({ user: "no" });
      }
    });
  };
  render() {
    if (this.state.user === "no") {
      return <Choose />;
    } else if (this.state.user === "yes" && this.state.emailpresent !== null) {
      return <Core emailpresent={this.state.emailpresent} />;
    }
    return (
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    );
  }
}
export default Main;
