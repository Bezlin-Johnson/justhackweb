import React, { Component } from "react";
import "./App.css";
import fire from "./fire.js";

const db = fire.firestore();
class Hackers extends Component {
  state = {
    data: null,
  };
  componentDidMount = () => {
    db.collection("store")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        this.setState({ data: data });
      });
  };
  render() {
    return (
      <div className="hackersd">
        <h1 className="hackersh">HACKERS</h1>
        <div>
          {this.state.data === null
            ? console.log()
            : this.state.data.map(function (self, key) {
                return (
                  <div>
                    <li className="overlay" key={key}>
                      <Box
                        url={self.url}
                        name={self.name}
                        android={self.android}
                        angular={self.angular}
                        atom={self.atom}
                        bootstrap={self.bootstrap}
                        c={self.c}
                        cplusplus={self.cplusplus}
                        csharp={self.csharp}
                        css={self.css}
                        debian={self.debian}
                        django={self.django}
                        dotnet={self.dotnet}
                        github={self.github}
                        html={self.html}
                        java={self.java}
                        javascript={self.javascript}
                        linux={self.linux}
                        sql={self.sql}
                        node={self.node}
                        npm={self.npm}
                        php={self.php}
                        pycharm={self.pycharm}
                        python={self.python}
                        react={self.react}
                        typescript={self.typescript}
                        ubuntu={self.ubuntu}
                        vscode={self.vscode}
                        windows={self.windows}
                      />
                    </li>
                  </div>
                );
              })}
          {this.state.data === null ? <Loading /> : console.log()}
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

class Box extends Component {
  state = {};
  render() {
    return (
      <div className="hackbox">
        <a href={this.props.url}>
          <img
            className="hackpic"
            src={
              this.props.url === ""
                ? "data:image/jpeg;base64,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"
                : this.props.url
            }
          />
        </a>
        <h1 className="hackname">{this.props.name}</h1>
        {this.props.android ===
        "logo2 devicon-android-plain-wordmark colored" ? (
          <button className="logo0 devicon-android-plain-wordmark colored">
            ANDROID
          </button>
        ) : (
          console.log()
        )}
        {this.props.angular === "logo2 devicon-angularjs-plain colored" ? (
          <button className="logo0 devicon-angularjs-plain colored">
            ANGULAR
          </button>
        ) : (
          console.log()
        )}
        {this.props.atom === "logo2 devicon-atom-original colored" ? (
          <button className="logo0 devicon-atom-original colored">ATOM</button>
        ) : (
          console.log()
        )}
        {this.props.bootstrap === "logo2 devicon-bootstrap-plain colored" ? (
          <button className="logo0 devicon-bootstrap-plain colored">
            BOOTSTRAP
          </button>
        ) : (
          console.log()
        )}
        {this.props.c === "logo2 devicon-c-plain colored" ? (
          <button className="logo0 devicon-c-plain colored">C</button>
        ) : (
          console.log()
        )}
        {this.props.cplusplus === "logo2 devicon-cplusplus-plain colored" ? (
          <button className="logo0 devicon-cplusplus-plain colored">C++</button>
        ) : (
          console.log()
        )}
        {this.props.csharp === "logo2 devicon-csharp-line colored" ? (
          <button className="logo0 devicon-csharp-line colored">C SHARP</button>
        ) : (
          console.log()
        )}
        {this.props.css === "logo2 devicon-css3-plain colored" ? (
          <button className="logo0 devicon-css3-plain colored">CSS</button>
        ) : (
          console.log()
        )}
        {this.props.debian === "logo2 devicon-debian-plain colored" ? (
          <button className="logo0 devicon-debian-plain colored">DEBIAN</button>
        ) : (
          console.log()
        )}
        {this.props.django === "logo2 devicon-django-plain colored" ? (
          <button className="logo0 devicon-django-plain colored">DJANGO</button>
        ) : (
          console.log()
        )}
        {this.props.dotnet === "logo2 devicon-dot-net-plain colored" ? (
          <button className="logo0 devicon-dot-net-plain colored">.NET</button>
        ) : (
          console.log()
        )}
        {this.props.github === "logo2 devicon-github-plain colored" ? (
          <button className="logo0 devicon-github-plain colored">GITHUB</button>
        ) : (
          console.log()
        )}
        {this.props.html === "logo2 devicon-html5-plain colored" ? (
          <button className="logo0 devicon-html5-plain colored">HTML</button>
        ) : (
          console.log()
        )}
        {this.props.java === "logo2 devicon-java-plain colored" ? (
          <button className="logo0 devicon-java-plain colored">JAVA</button>
        ) : (
          console.log()
        )}
        {this.props.javascript === "logo2 devicon-javascript-plain colored" ? (
          <button className="logo0 devicon-javascript-plain colored">JS</button>
        ) : (
          console.log()
        )}
        {this.props.linux === "logo2 devicon-linux-plain colored" ? (
          <button className="logo0 devicon-linux-plain colored">LINUX</button>
        ) : (
          console.log()
        )}
        {this.props.sql === "logo2 devicon-mysql-plain colored" ? (
          <button className="logo0 devicon-mysql-plain colored">SQL</button>
        ) : (
          console.log()
        )}
        {this.props.node === "logo2 devicon-nodejs-plain-wordmark colored" ? (
          <button className="logo0 devicon-nodejs-plain-wordmark colored">
            NODE
          </button>
        ) : (
          console.log()
        )}
        {this.props.npm === "logo2 devicon-npm-original-wordmark colored" ? (
          <button className="logo0 devicon-npm-original-wordmark colored">
            NPM
          </button>
        ) : (
          console.log()
        )}
        {this.props.php === "logo2 devicon-php-plain colored" ? (
          <button className="logo0 devicon-php-plain colored">PHP</button>
        ) : (
          console.log()
        )}
        {this.props.pycharm === "logo2 devicon-pycharm-plain colored" ? (
          <button className="logo0 devicon-pycharm-plain colored">
            PYCHARM
          </button>
        ) : (
          console.log()
        )}
        {this.props.python === "logo2 devicon-python-plain colored" ? (
          <button className="logo0 devicon-python-plain colored">PYTHON</button>
        ) : (
          console.log()
        )}
        {this.props.react === "logo2 devicon-react-original colored" ? (
          <button className="logo0 devicon-react-original colored">
            REACT
          </button>
        ) : (
          console.log()
        )}
        {this.props.typescript === "logo2 devicon-typescript-plain colored" ? (
          <button className="logo0 devicon-typescript-plain colored">
            TYPESCRIPT
          </button>
        ) : (
          console.log()
        )}
        {this.props.ubuntu === "logo2 devicon-ubuntu-plain colored" ? (
          <button className="logo0 devicon-ubuntu-plain colored">UBUNTU</button>
        ) : (
          console.log()
        )}
        {this.props.vscode === "logo2 devicon-visualstudio-plain colored" ? (
          <button className="logo0 devicon-visualstudio-plain colored">
            VSCODE
          </button>
        ) : (
          console.log()
        )}
        {this.props.windows === "logo2 devicon-windows8-original colored" ? (
          <button className="logo0 devicon-windows8-original colored">
            WINDOWS
          </button>
        ) : (
          console.log()
        )}
        <br />
        {/* <button className="hackbtn">CHAT</button> */}
      </div>
    );
  }
}

export default Hackers;
