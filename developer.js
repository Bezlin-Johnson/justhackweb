import React, { Component } from "react";
import "./App.css";
import img1 from "./img1.png";
class Developer extends Component {
  state = {};
  render() {
    return (
      <div className="developerclass">
        <h1>Developers</h1>
        <p className="ptagdev">
          You can also become a developer. All what you want to do is shoot us a
          mail . <br />
          In that tell us what you want to build new to this site . whats the
          use of building that .<br /> We will approve your bid within 2 hours
          and give you the source code according to your use.
        </p>
        <Developed
          name="Bezlin Johnson"
          post="Senior Developer @ JustHack 2020"
          description="I made this Platform happy to see everyone here .If you want to see more stuff that you wish to see in this website shoot us a mail we will make it granted. I love coding it is my weekness after this hackathon you too will code like me .Happy to make this happen."
        />
      </div>
    );
  }
}
class Developed extends Component {
  state = {};
  render() {
    return (
      <div className="Boxdesign">
        <h1 className="white">{this.props.name}</h1>
        <img src={img1} className="developerpic" />
        <h1 className="whites">{this.props.post}</h1>
        <p className="whites">{this.props.description}</p>
      </div>
    );
  }
}
export default Developer;
