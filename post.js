import React, { Component } from "react";
import "./App.css";
import fire from "./fire.js";
import heart from "./heart.png";
import heartbeat from "./heartbeat.png";

const db = fire.firestore();
class Post extends Component {
  state = {
    data: null,
    tree: false,
    profilename: "",
    profilepic: "",
    emailpresent: "",
    likes: null,
  };
  post = () => {
    const data = db.collection("store").doc(this.state.emailpresent);
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
  componentDidMount = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email } = user;
        this.setState({ emailpresent: email });
      } else {
        this.setState({ emailpresent: "no" });
      }
    });
    db.collection("pics")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ data: data });
      });
  };
  render() {
    return (
      <div className="center">
        <ul>
          <a href="/post" className="aa">
            <li className="lipers"> Post </li>
          </a>
          <a href="/status" className="aa">
            <li className="liper"> Status </li>
          </a>
        </ul>
        <div>
          {this.state.data === null
            ? console.log()
            : this.state.data.map(function (self, key) {
                return (
                  <div>
                    <li className="overlay" key={key}>
                      <Pics
                        exp={self.explanation}
                        name={self.profilename}
                        profilepic={self.profilepic}
                        url={self.url}
                        likes={self.likes}
                        email={self.email}
                      />
                    </li>
                  </div>
                );
              })}
          {this.state.data === null ? <Loading /> : console.log()}
        </div>
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

class Loading extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="load">
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      </div>
    );
  }
}

class Pics extends Component {
  state = {
    likes: this.props.likes,
    states: heart,
    like: false,
  };
  like = () => {
    if (this.state.like === false) {
      db.collection("pics")
        .doc(this.props.email)
        .set({
          email: this.props.email,
          explanation: this.props.exp,
          likes: this.props.likes + 1,
          profilename: this.props.name,
          profilepic: this.props.profilepic,
          url: this.props.url,
        });
      this.setState({ likes: this.props.likes + 1 });
      this.setState({ states: heartbeat });
    } else if (this.state.like === true) {
      return;
    }
  };
  render() {
    return (
      <div className="picdiv">
        <img
          className="makesmallprofile"
          src={this.props.profilepic}
          alt="loading..."
        />
        <h1 className="profilename2">{this.props.name}</h1>
        <br />
        <h2 className="expsmall">{this.props.exp}</h2>
        <img src={this.props.url} alt="loading" className="shortit" />
        <div className="inaane">
          <button onClick={this.like} className="likebtn">
            Like
          </button>
          <h2 className="likes">{this.state.likes}</h2>
          <img className="heart" src={this.state.states} />
        </div>
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
          <h1> Upload Pic</h1>
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
            Post
          </button>
          <h1> {this.state.selected} </h1>
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

export default Post;
