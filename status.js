import React, { Component } from "react";
import "./App.css";
import fire from "./fire.js";

const db = fire.firestore();

class Status extends Component {
  state = {
    tree: null,
    profilename: null,
    profilepic: null,
    likes: null,
  };
  post = () => {
    const data = db.collection("store").doc("bezlin");
    data.get().then((doc) => {
      const deta = doc.data();
      const { url } = deta;
      const { name } = deta;
      const { likes } = deta;
      this.setState({ tree: true });
      this.setState({ profilename: name });
      this.setState({ profilepic: url });
      this.setState({ likes: likes });
      {
        window.scrollTo(0, document.body.scrollHeight);
      }
    });
  };
  render() {
    return (
      <div className="center">
        <ul>
          <a href="/post" className="aa">
            <li className="liper">Post</li>
          </a>
          <a href="/status" className="aa">
            <li className="lipers">Status</li>
          </a>
        </ul>
        <div className="downclasspost">
          <button onClick={this.post} className="downclasspostitem1">
            +Post Images
          </button>
        </div>
        {this.state.tree === true ? (
          <Posting
            email={this.state.emailpresent}
            profilename={this.state.profilename}
            profilepic={this.state.profilepic}
          />
        ) : (
          console.log()
        )}
      </div>
    );
  }
}
class Posting extends Component {
  state = { status: "", selected: "", url: "", ready: false };
  inputclicked = async (e) => {
    this.setState({ status: "Uploading..." });
    const file = e.target.files[0];
    const storageRef = fire.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    this.setState({ url: await fileRef.getDownloadURL() });
    this.setState({ selected: true });
    if (this.state.url === "") {
      return;
    } else {
      this.setState({ status: "Now you can post it." });
    }
  };
  postupload = () => {
    const exp = document.getElementById("exp").value;
    if (this.state.selected === "") {
      this.setState({ selected: "Please select an image" });
      return;
    } else if (exp.length <= 4) {
      this.setState({ selected: "Fill all fields." });
      return;
    } else {
      this.setState({ selected: "" });
    }
    const abc =
      Math.random().toString(16).substring(2, 15) +
      Math.random().toString(16).substring(2, 15);
    if (this.state.url === "") {
      return;
    } else {
      db.collection("pics")
        .doc(this.props.email + abc)
        .set({
          url: this.state.url,
          profilepic: this.props.profilepic,
          profilename: this.props.profilename,
          explanation: exp,
          likes: 0,
          email: this.props.email + abc,
        });
      this.setState({ selected: "Refresh to see progress" });
      this.setState({ status: "" });
      this.setState({ ready: true });
    }
  };
  render() {
    return (
      <div>
        <div className="postingmaindiv">
          <h1> Upload Pic</h1>{" "}
          <input
            onChange={this.inputclicked}
            type="file"
            className="fileinput"
          />
          <input
            id="exp"
            className="inputboxstyling"
            placeholder="ex:My coding pic"
          />
          <h1 className="upldind"> {this.state.status} </h1> <br />
          <br />
          <button onClick={this.postupload} className="postbtn">
            Post{" "}
          </button>
          <h1> {this.state.selected} </h1>{" "}
        </div>
        {this.state.ready === true ? (
          <Imageuploaded image={this.state.url} />
        ) : (
          console.log()
        )}
      </div>
    );
  }
}
export default Status;
class Imageuploaded extends Component {
  state = {};
  render() {
    return (
      <div className="postingmaindiv">
        <br />
        <h1 className="imagecheruthaakan">Image Uploaded</h1>
        <br />
        <img
          className="imagecheruthaakan"
          src={this.props.image}
          alt="Uploaded image"
        />
        <a href="/post">
          <button className="loginbtn">Back</button>
        </a>
      </div>
    );
  }
}
