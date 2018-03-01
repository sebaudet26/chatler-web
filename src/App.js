import React, { Component } from "react";
import { withRouter, HashRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar/"
import Footer from "./components/Footer/"
import "./lib/styles/bootstrap.css";
import "./lib/styles/main.css";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar />
          <div>
            <Routes />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default withRouter(App);
