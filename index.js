import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Login from "./login.js";
import Signup from "./signup.js";
import Post from "./post.js";
import Chat from "./chat.js";
import Help from "./help.js";
import Register from "./register.js";
import Hackers from "./hackers.js";
import Status from "./status.js";
import Developer from "./developer.js";
import Edit from "./edit.js";
import Team from "./team.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
  document.getElementById("root")
);
function Map() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/post" component={Post} />
          <Route path="/chat" component={Chat} />
          <Route path="/help" component={Help} />
          <Route path="/register" component={Register} />
          <Route path="/hackers" component={Hackers} />
          <Route path="/status" component={Status} />
          <Route path="/developer" component={Developer} />
          <Route path="/editprofile" component={Edit} />
          <Route Path="/team" component={Team} />
        </Switch>
      </div>
    </Router>
  );
}
export default Map;
serviceWorker.unregister();
