import React, { Component } from "react";
import "./App.css";
class Help extends Component {
  state = {};
  componentDidMount = () => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5f5b1f04f0e7167d000f5877/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  };
  render() {
    return (
      <div>
        <h1>Help</h1>
      </div>
    );
  }
}

export default Help;
