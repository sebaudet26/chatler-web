import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./components/Navbar/"
import Footer from "./components/Footer/"
import "./lib/styles/bootstrap.css";
import "./lib/styles/main.css";

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
