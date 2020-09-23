import React, { Component } from "react";
import "./App.css";
import fire from "./fire.js";

const db = fire.firestore();
class Main extends Component {
  state = {
    profilename: null,
    profilepic:
      "https://img.icons8.com/material-rounded/24/000000/cat-profile.png",
    status: "",
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
  };
  componentDidMount = () => {
    const data = db.collection("store").doc(this.props.emailpresent);
    data.get().then((doc) => {
      const deta = doc.data();
      const { url } = deta;
      const { name } = deta;
      const { android } = deta;
      const { angular } = deta;
      const { atom } = deta;
      const { bootstrap } = deta;
      const { c } = deta;
      const { cplusplus } = deta;
      const { csharp } = deta;
      const { css } = deta;
      const { debian } = deta;
      const { django } = deta;
      const { dotnet } = deta;
      const { github } = deta;
      const { html } = deta;
      const { java } = deta;
      const { javascript } = deta;
      const { linux } = deta;
      const { sql } = deta;
      const { node } = deta;
      const { npm } = deta;
      const { php } = deta;
      const { pycharm } = deta;
      const { python } = deta;
      const { react } = deta;
      const { typescript } = deta;
      const { ubuntu } = deta;
      const { vscode } = deta;
      const { windows } = deta;
      this.setState({ profilename: name });
      this.setState({ profilepic: url });
      this.setState({ android: android });
      this.setState({ angular: angular });
      this.setState({ atom: atom });
      this.setState({ bootstrap: bootstrap });
      this.setState({ c: c });
      this.setState({ cplusplus: cplusplus });
      this.setState({ csharp: csharp });
      this.setState({ css: css });
      this.setState({ debian: debian });
      this.setState({ django: django });
      this.setState({ dotnet: dotnet });
      this.setState({ github: github });
      this.setState({ html: html });
      this.setState({ java: java });
      this.setState({ javascript: javascript });
      this.setState({ linux: linux });
      this.setState({ sql: sql });
      this.setState({ node: node });
      this.setState({ npm: npm });
      this.setState({ php: php });
      this.setState({ pycharm: pycharm });
      this.setState({ python: python });
      this.setState({ react: react });
      this.setState({ typescript: typescript });
      this.setState({ ubuntu: ubuntu });
      this.setState({ vscode: vscode });
      this.setState({ windows: windows });
    });
  };
  Submit = () => {
    const name = document.getElementById("name").value;
    if (name === "") {
      db.collection("store").doc(this.props.emailpresent).set({
        name: this.state.profilename,
        url: this.state.profilepic,
        android: this.state.android,
        angular: this.state.angular,
        atom: this.state.atom,
        bootstrap: this.state.bootstrap,
        c: this.state.c,
        cplusplus: this.state.cplusplus,
        csharp: this.state.csharp,
        css: this.state.css,
        debian: this.state.debian,
        django: this.state.django,
        dotnet: this.state.dotnet,
        github: this.state.github,
        html: this.state.html,
        java: this.state.java,
        javascript: this.state.javascript,
        linux: this.state.linux,
        sql: this.state.sql,
        node: this.state.node,
        npm: this.state.npm,
        php: this.state.php,
        pycharm: this.state.pycharm,
        python: this.state.python,
        react: this.state.react,
        typescript: this.state.typescript,
        ubuntu: this.state.ubuntu,
        vscode: this.state.vscode,
        windows: this.state.windows,
      });
    } else {
      db.collection("store").doc(this.props.emailpresent).set({
        name: name,
        url: this.state.profilepic,
        android: this.state.android,
        angular: this.state.angular,
        atom: this.state.atom,
        bootstrap: this.state.bootstrap,
        c: this.state.c,
        cplusplus: this.state.cplusplus,
        csharp: this.state.csharp,
        css: this.state.css,
        debian: this.state.debian,
        django: this.state.django,
        dotnet: this.state.dotnet,
        github: this.state.github,
        html: this.state.html,
        java: this.state.java,
        javascript: this.state.javascript,
        linux: this.state.linux,
        sql: this.state.sql,
        node: this.state.node,
        npm: this.state.npm,
        php: this.state.php,
        pycharm: this.state.pycharm,
        python: this.state.python,
        react: this.state.react,
        typescript: this.state.typescript,
        ubuntu: this.state.ubuntu,
        vscode: this.state.vscode,
        windows: this.state.windows,
      });
    }
  };
  inputclicked = async (e) => {
    this.setState({ status: "Uploading..." });
    const file = e.target.files[0];
    const storageRef = fire.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    this.setState({ profilepic: await fileRef.getDownloadURL() });
    this.setState({ selected: true });
    if (this.state.url === "") {
      return;
    } else {
      this.setState({ status: "Now you can Submit" });
    }
  };
  android = () => {
    if (this.state.android === "logo2 devicon-android-plain-wordmark colored") {
      this.setState({
        android: "logo1 devicon-android-plain-wordmark colored",
      });
    } else {
      this.setState({
        android: "logo2 devicon-android-plain-wordmark colored",
      });
    }
  };
  angular = () => {
    if (this.state.angular === "logo2 devicon-angularjs-plain colored") {
      this.setState({
        angular: "logo1 devicon-angularjs-plain colored",
      });
    } else {
      this.setState({
        angular: "logo2 devicon-angularjs-plain colored",
      });
    }
  };
  atom = () => {
    if (this.state.atom === "logo2 devicon-atom-original colored") {
      this.setState({
        atom: "logo1 devicon-atom-original colored",
      });
    } else {
      this.setState({
        atom: "logo2 devicon-atom-original colored",
      });
    }
  };
  bootstrap = () => {
    if (this.state.bootstrap === "logo2 devicon-bootstrap-plain colored") {
      this.setState({
        bootstrap: "logo1 devicon-bootstrap-plain colored",
      });
    } else {
      this.setState({
        bootstrap: "logo2 devicon-bootstrap-plain colored",
      });
    }
  };
  c = () => {
    if (this.state.c === "logo2 devicon-c-plain colored") {
      this.setState({
        c: "logo1 devicon-c-plain colored",
      });
    } else {
      this.setState({
        c: "logo2 devicon-c-plain colored",
      });
    }
  };
  cplusplus = () => {
    if (this.state.cplusplus === "logo2 devicon-cplusplus-plain colored") {
      this.setState({
        cplusplus: "logo1 devicon-cplusplus-plain colored",
      });
    } else {
      this.setState({
        cplusplus: "logo2 devicon-cplusplus-plain colored",
      });
    }
  };
  csharp = () => {
    if (this.state.csharp === "logo2 devicon-csharp-line colored") {
      this.setState({
        csharp: "logo1 devicon-csharp-line colored",
      });
    } else {
      this.setState({
        csharp: "logo2 devicon-csharp-line colored",
      });
    }
  };
  css = () => {
    if (this.state.css === "logo2 devicon-css3-plain colored") {
      this.setState({
        css: "logo1 devicon-css3-plain colored",
      });
    } else {
      this.setState({
        css: "logo2 devicon-css3-plain colored",
      });
    }
  };
  debian = () => {
    if (this.state.debian === "logo2 devicon-debian-plain colored") {
      this.setState({
        debian: "logo1 devicon-debian-plain colored",
      });
    } else {
      this.setState({
        debian: "logo2 devicon-debian-plain colored",
      });
    }
  };
  django = () => {
    if (this.state.django === "logo2 devicon-django-plain colored") {
      this.setState({
        django: "logo1 devicon-django-plain colored",
      });
    } else {
      this.setState({
        django: "logo2 devicon-django-plain colored",
      });
    }
  };
  dotnet = () => {
    if (this.state.dotnet === "logo2 devicon-dot-net-plain colored") {
      this.setState({
        dotnet: "logo1 devicon-dot-net-plain colored",
      });
    } else {
      this.setState({
        dotnet: "logo2 devicon-dot-net-plain colored",
      });
    }
  };
  github = () => {
    if (this.state.github === "logo2 devicon-github-plain colored") {
      this.setState({
        github: "logo1 devicon-github-plain colored",
      });
    } else {
      this.setState({
        github: "logo2 devicon-github-plain colored",
      });
    }
  };
  html = () => {
    if (this.state.html === "logo2 devicon-html5-plain colored") {
      this.setState({
        html: "logo1 devicon-html5-plain colored",
      });
    } else {
      this.setState({
        html: "logo2 devicon-html5-plain colored",
      });
    }
  };
  java = () => {
    if (this.state.java === "logo2 devicon-java-plain colored") {
      this.setState({
        java: "logo1 devicon-java-plain colored",
      });
    } else {
      this.setState({
        java: "logo2 devicon-java-plain colored",
      });
    }
  };
  javascript = () => {
    if (this.state.javascript === "logo2 devicon-javascript-plain colored") {
      this.setState({
        javascript: "logo1 devicon-javascript-plain colored",
      });
    } else {
      this.setState({
        javascript: "logo2 devicon-javascript-plain colored",
      });
    }
  };
  linux = () => {
    if (this.state.linux === "logo2 devicon-linux-plain colored") {
      this.setState({
        linux: "logo1 devicon-linux-plain colored",
      });
    } else {
      this.setState({
        linux: "logo2 devicon-linux-plain colored",
      });
    }
  };
  sql = () => {
    if (this.state.sql === "logo2 devicon-mysql-plain colored") {
      this.setState({
        sql: "logo1 devicon-mysql-plain colored",
      });
    } else {
      this.setState({
        sql: "logo2 devicon-mysql-plain colored",
      });
    }
  };
  node = () => {
    if (this.state.node === "logo2 devicon-nodejs-plain-wordmark colored") {
      this.setState({
        node: "logo1 devicon-nodejs-plain-wordmark colored",
      });
    } else {
      this.setState({
        node: "logo2 devicon-nodejs-plain-wordmark colored",
      });
    }
  };
  npm = () => {
    if (this.state.npm === "logo2 devicon-npm-original-wordmark colored") {
      this.setState({
        npm: "logo1 devicon-npm-original-wordmark colored",
      });
    } else {
      this.setState({
        npm: "logo2 devicon-npm-original-wordmark colored",
      });
    }
  };
  php = () => {
    if (this.state.php === "logo2 devicon-php-plain colored") {
      this.setState({
        php: "logo1 devicon-php-plain colored",
      });
    } else {
      this.setState({
        php: "logo2 devicon-php-plain colored",
      });
    }
  };
  pycharm = () => {
    if (this.state.pycharm === "logo2 devicon-pycharm-plain colored") {
      this.setState({
        pycharm: "logo1 devicon-pycharm-plain colored",
      });
    } else {
      this.setState({
        pycharm: "logo2 devicon-pycharm-plain colored",
      });
    }
  };
  python = () => {
    if (this.state.python === "logo2 devicon-python-plain colored") {
      this.setState({
        python: "logo1 devicon-python-plain colored",
      });
    } else {
      this.setState({
        python: "logo2 devicon-python-plain colored",
      });
    }
  };
  react = () => {
    if (this.state.react === "logo2 devicon-react-original colored") {
      this.setState({
        react: "logo1 devicon-react-original colored",
      });
    } else {
      this.setState({
        react: "logo2 devicon-react-original colored",
      });
    }
  };
  typescript = () => {
    if (this.state.typescript === "logo2 devicon-typescript-plain colored") {
      this.setState({
        typescript: "logo1 devicon-typescript-plain colored",
      });
    } else {
      this.setState({
        typescript: "logo2 devicon-typescript-plain colored",
      });
    }
  };
  ubuntu = () => {
    if (this.state.ubuntu === "logo2 devicon-ubuntu-plain colored") {
      this.setState({
        ubuntu: "logo1 devicon-ubuntu-plain colored",
      });
    } else {
      this.setState({
        ubuntu: "logo2 devicon-ubuntu-plain colored",
      });
    }
  };
  vscode = () => {
    if (this.state.vscode === "logo2 devicon-visualstudio-plain colored") {
      this.setState({
        vscode: "logo1 devicon-visualstudio-plain colored",
      });
    } else {
      this.setState({
        vscode: "logo2 devicon-visualstudio-plain colored",
      });
    }
  };
  windows = () => {
    if (this.state.windows === "logo2 devicon-windows8-original colored") {
      this.setState({
        windows: "logo1 devicon-windows8-original colored",
      });
    } else {
      this.setState({
        windows: "logo2 devicon-windows8-original colored",
      });
    }
  };
  render() {
    return (
      <div className="p-center">
        <h1 className="p-heading">EDIT YOUR PROFILE</h1>
        <img
          src={
            this.state.profilepic === ""
              ? "https://lh3.googleusercontent.com/proxy/HRHAqb3O11P-bEdxPUEBd4U8RXWduismk08Pz3eTbLNtLzmznQfTAdMNm4AKup5SNGoqECHaUJAWrsNfbN9qeRaKPtOJ53g_sdHZGYECNxzTy2DPjyRfgA"
              : this.state.profilepic
          }
          className="p-pic"
        />
        <br />
        <input
          onChange={this.inputclicked}
          type="file"
          className="fileinputt"
        />
        <h1 className="white-e">{this.state.status}</h1>
        <br />
        <input
          className="p-name"
          id="name"
          type="text"
          onChange={this.changename}
          placeholder={this.state.profilename}
        />
        <div className="badges">
          <h1>SKILLS</h1>
          <p>Select Your Skills</p>
          <button onClick={this.android} className={this.state.android}>
            ANDROID
          </button>
          <button onClick={this.angular} className={this.state.angular}>
            ANGULAR JS
          </button>
          <button onClick={this.atom} className={this.state.atom}>
            ATOM
          </button>
          <button onClick={this.bootstrap} className={this.state.bootstrap}>
            BOOTSTRAP
          </button>
          <button onClick={this.c} className={this.state.c}>
            C
          </button>
          <button onClick={this.cplusplus} className={this.state.cplusplus}>
            C++
          </button>
          <button onClick={this.csharp} className={this.state.csharp}>
            C-SHARP
          </button>
          <button onClick={this.css} className={this.state.css}>
            CSS
          </button>
          <button onClick={this.debian} className={this.state.debian}>
            DEBIAN
          </button>
          <button onClick={this.django} className={this.state.django}>
            DJANGO
          </button>
          <button onClick={this.dotnet} className={this.state.dotnet}>
            .NET
          </button>
          <button onClick={this.github} className={this.state.github}>
            GITHUB
          </button>
          <button onClick={this.html} className={this.state.html}>
            HTML
          </button>
          <button onClick={this.java} className={this.state.java}>
            JAVA
          </button>
          <button onClick={this.javascript} className={this.state.javascript}>
            JAVASCRIPT
          </button>
          <button onClick={this.linux} className={this.state.linux}>
            LINUX
          </button>
          <button onClick={this.sql} className={this.state.sql}>
            MY SQL
          </button>
          <button onClick={this.node} className={this.state.node}>
            NODE JS
          </button>
          <button onClick={this.npm} className={this.state.npm}>
            NPM
          </button>
          <button onClick={this.php} className={this.state.php}>
            PHP
          </button>
          <button onClick={this.pycharm} className={this.state.pycharm}>
            PYCHARM
          </button>
          <button onClick={this.python} className={this.state.python}>
            PYTHON
          </button>
          <button onClick={this.react} className={this.state.react}>
            REACT
          </button>
          <button onClick={this.typescript} className={this.state.typescript}>
            TYPESCRIPT
          </button>
          <button onClick={this.ubuntu} className={this.state.ubuntu}>
            UBUNTU
          </button>
          <button onClick={this.vscode} className={this.state.vscode}>
            VS CODE
          </button>
          <button onClick={this.windows} className={this.state.windows}>
            WINDOWS
          </button>
        </div>
        <button className="p-btn" onClick={this.Submit}>
          SUBMIT
        </button>
        {this.state.posting === true ? <Posting /> : console.log()}
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

class Edit extends Component {
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
      return <Main emailpresent={this.state.emailpresent} />;
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

export default Edit;

class Posting extends Component {
  state = {
    status: null,
    url: null,
  };

  render() {
    return (
      <input onChange={this.inputclicked} type="file" className="fileinput" />
    );
  }
}
