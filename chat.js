import React, { Component } from "react";
import "./App.css";
import fire from "./fire.js";

const db = fire.firestore();

class Main extends Component {
  state = {
    text: "",
    messages: [],
    profilename: null,
    profilepic: null,
    count: 1000,
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
    const DB = fire.database().ref("messages/");
    DB.on("value", (snapshot) => {
      let newMessages = [];
      snapshot.forEach((child) => {
        var message = child.val();
        newMessages.push({ id: child.key, text: message.text });
      });
      this.setState({ messages: newMessages });
      this.setState({ count: this.state.messages.length * 20 });
    });
    window.scrollTo(0, document.body.scrollHeight + this.state.count);
  };

  submit = () => {
    const message = document.getElementById("textbox").value;
    if (message === "") {
      return;
    } else {
      const time =
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
      fire
        .database()
        .ref("messages/")
        .push({
          text: [message, this.state.profilename, time],
        });
      this.setState({ text: "" });
      document.getElementById("textbox").value = "";
    }
  };
  onKeyDown = (event) => {
    if (event.key === "Enter") {
      this.submit();
    }
  };
  render() {
    return (
      <div>
        <a href="/">
          <button id="home">
            <img
              className="homebtn"
              src="https://img.icons8.com/fluent-systems-regular/40/000000/home.png"
            />
          </button>
        </a>
        <br />
        {this.state.messages.map((message) => (
          <Text
            reciever={this.state.profilename}
            email={this.state.profilename}
            text={message.text[0]}
            sender={message.text[1]}
            time={message.text[2]}
          />
        ))}
        <div>
          <input
            placeholder="Type here"
            id="textbox"
            onKeyDown={this.onKeyDown}
            className="chatsendbox"
          ></input>
        </div>
      </div>
    );
  }
}
class Text extends Component {
  state = {
    tree: false,
  };
  componentDidMount = () => {
    if (
      (this.props.email === this.props.sender &&
        this.props.name === this.props.reciever) ||
      (this.props.email === this.props.reciever &&
        this.props.name === this.props.sender)
    ) {
      this.setState({ tree: true });
    } else {
      this.setState({ tree: false });
    }
  };
  render() {
    return (
      <div>
        {this.state.tree === true ? (
          <Texs
            email={this.props.email}
            text={this.props.text}
            sender={this.props.sender}
            reciever={this.state.recievers}
            time={this.props.time}
            name={this.props.name}
          />
        ) : this.props.tree !== true ? (
          <Texts
            email={this.props.email}
            text={this.props.text}
            sender={this.props.sender}
            reciever={this.state.recievers}
            time={this.props.time}
            name={this.props.name}
          />
        ) : (
          console.log()
        )}
      </div>
    );
  }
}
class Texs extends Component {
  state = {
    change: "tsenderui",
    sender: this.props.sender,
    senderui: "tfreakui",
    messager: "",
  };
  componentDidMount = () => {
    if (this.props.sender === this.props.email) {
      this.setState({ change: "textuix" });
      this.setState({ sender: "You" });
      this.setState({ senderui: "tfreakui" });
      this.setState({ messager: "messager" });
    } else {
      this.setState({ change: "tsenderui" });
      this.setState({ sender: this.props.sender });
      this.setState({ messager: "messagers" });
    }
    window.scrollTo(0, document.body.scrollHeight + 41000);
  };

  render() {
    return (
      <div>
        <div className={this.state.change}>
          <p className="tfreakui">{this.state.sender}</p>
          <p className="tfreakui">{"-" + this.props.time}</p>
          <h2 className="tmessager">{this.props.text}</h2>
        </div>
      </div>
    );
  }
}

class Texts extends Component {
  state = {
    change: "textui",
    sender: this.props.sender,
    senderui: "sender",
    messager: "",
  };
  componentDidMount = () => {
    if (this.props.sender === this.props.email) {
      this.setState({ change: "textuix" });
      this.setState({ sender: "You" });
      this.setState({ senderui: "senders" });
      this.setState({ messager: "messager" });
    } else {
      this.setState({ change: "textui" });
      this.setState({ sender: this.props.sender });
      this.setState({ messager: "messagers" });
    }
    window.scrollTo(0, document.body.scrollHeight + 41000);
  };

  render() {
    return (
      <div>
        <div className={this.state.change}>
          <p className={this.state.senderui}>{this.state.sender}</p>
          <p className={this.state.senderui}>{"-" + this.props.time}</p>
          <h2 className={this.state.messager}>{this.props.text}</h2>
        </div>
      </div>
    );
  }
}

class Chat extends Component {
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
      return <Chaters emailpresent={this.state.emailpresent} />;
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

class Chaters extends Component {
  state = {
    data: null,
    tree: null,
  };
  componentDidMount = () => {
    db.collection("store")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ data: data });
      });
  };
  select = () => {
    this.setState({ tree: true });
  };
  render() {
    return (
      <div>
        <div className="chater-main-div">
          <button id="readle" className="clientbtns" onClick={this.select}>
            <img
              src={
                "https://cdn0.iconfinder.com/data/icons/network-and-communication-41/64/51-512.png"
              }
              id="sameline  "
              className="clientsprofileimage"
            />
            <h1 className="clientname" id="sameline">
              PUBLIC CHAT
            </h1>
          </button>
          <div>
            {this.state.data === null
              ? console.log()
              : this.state.data.map(function (self, key) {
                  return (
                    <div>
                      <li className="overlay" key={key}>
                        <Clients url={self.url} name={self.name} />
                      </li>
                    </div>
                  );
                })}
            {this.state.data === null ? <Loading /> : console.log()}
            {this.state.tree === true ? (
              <Selector emailpresent={this.props.emailpresent} />
            ) : (
              console.log()
            )}
          </div>
        </div>
      </div>
    );
  }
}
class Loading extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <h1>Loading...</h1>
      </div>
    );
  }
}
class Clients extends Component {
  state = { tree: false };
  clicked = () => {
    this.setState({ tree: true });
  };
  render() {
    return (
      <div className="seriouserr">
        <button className="clientbtn" onClick={this.clicked}>
          <img
            src={
              this.props.url === ""
                ? "data:image/jpeg;base64,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"
                : this.props.url
            }
            id="sameline  "
            className="clientsprofileimage"
          />
          <h1 className="clientname" id="sameline">
            {this.props.name}
          </h1>
        </button>
        {this.state.tree === true ? (
          <Cselect pic={this.props.url} name={this.props.name} />
        ) : (
          console.log()
        )}
      </div>
    );
  }
}
class Selector extends Component {
  state = {};
  render() {
    return (
      <div className="fulldanger">
        <Main emailpresent={this.props.emailpresent} />
      </div>
    );
  }
}

class Cselect extends Component {
  state = {};
  render() {
    return (
      <div className="faceits">
        <Customchat pic={this.props.pic} name={this.props.name} />
      </div>
    );
  }
}

class Customchat extends Component {
  state = {
    messages: [],
    userdetails: null,
    user: null,
    profilename: null,
    profilepic: null,
  };
  componentDidMount = () => {
    const DB = fire.database().ref("chats/");
    DB.on("value", (snapshot) => {
      let newMessages = [];
      snapshot.forEach((child) => {
        var message = child.val();
        newMessages.push({ id: child.key, text: message.text });
      });
      this.setState({ messages: newMessages });
    });
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userdetails: user });
        this.setState({ user: true });
        const { email } = user;
        const data = db.collection("store").doc(email);
        data.get().then((doc) => {
          const deta = doc.data();
          const { url } = deta;
          const { name } = deta;
          this.setState({ profilename: name });
          this.setState({ profilepic: url });
        });
      } else {
        this.setState({ user: "no" });
      }
    });
  };
  submit = () => {
    const message = document.getElementById("textbox").value;
    if (message === "") {
      return;
    } else {
      const time =
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
      fire
        .database()
        .ref("chats/")
        .push({
          text: [this.state.profilename, this.props.name, message, time, true],
        });
      this.setState({ text: "" });
      document.getElementById("textbox").value = "";
    }
  };
  onKeyDown = (event) => {
    if (event.key === "Enter") {
      this.submit();
    }
  };
  render() {
    return (
      <div className="fulldangers">
        <a href="/">
          <button id="home">
            <img
              className="homebtn"
              src="https://img.icons8.com/fluent-systems-regular/40/000000/home.png"
            />
          </button>
        </a>
        <img
          src={
            this.state.profilepic === ""
              ? "data:image/jpeg;base64,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"
              : this.state.profilepic
          }
          className="imgcomp1"
        />
        <img
          className="linkedcon"
          src="https://img.icons8.com/nolan/64/link.png"
        />
        <img
          src={
            this.props.pic === ""
              ? "data:image/jpeg;base64,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"
              : this.props.pic
          }
          className="imgcomp1"
        />
        <h1 className="fontmatrttt">
          {this.state.profilename + " <==> " + this.props.name}
        </h1>
        <br />
        {this.state.messages.map((message) => (
          <Text
            email={this.state.profilename}
            sender={message.text[0]}
            reciever={message.text[1]}
            text={message.text[2]}
            time={message.text[3]}
            name={this.props.name}
            tree={message.text[4]}
          />
        ))}
        <div>
          <input
            placeholder="Type here"
            id="textbox"
            onKeyDown={this.onKeyDown}
            className="chatsendbox"
          ></input>
        </div>
      </div>
    );
  }
}

export default Chat;
