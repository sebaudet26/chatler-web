import React, { Component } from 'react';
import Request from '../../components/Request/';
import './Company.css';
import WorkImg from '../../lib/img/work.svg';
import RocketIcon from '../../lib/icons/rocket.svg';
import LogoIcon from '../../lib/icons/chat-icon.svg';

class About extends Component {
  render() {
    return (
      <div>
        <section className="intro ">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                  <h1>We help venues increase their sales.</h1>
                  <h3>At Chatler, we make it our mission to put businesses and their customers in the same conversation.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section>
            <div className="row">
              <div className="col-sm-6">
                <div className="bubble-container left">
                  <div className="img-icon green">
                    <img src={RocketIcon} alt="" />
                  </div>
                  <h2>We are a young startup from Montreal.</h2>
                  <p>At Chatler, we make it our mission to put businesses and customers in the same conversation. We are a team of engineers and designers who focus on getting stuff done quickly with the highest amount quality possible.</p>
                  <div className="bubble left"></div>
                </div>
              </div>
              <div className="col-sm-6">
                <img className="work-img" src={WorkImg} alt="" />
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12">
                <div className="center-section">
                  <div className="img-icon blue">
                    <img className="logo-icon" src={LogoIcon} alt="" />
                  </div>
                  <h2>Apps are out. Chatbots are in.</h2>
                  <p>The app market is over saturated in unengaging apps. Everyone is building apps whether it's movie theatre, a stadium a train station, or an airport. The answer to every solution shouldn't be: "Let's build an app for that".</p>
                  <p>That's where we come in to play. Chatbots are perfect for this. There is no app to download, no account to create and no location to enter. Chatbots offer an experience that most closely ressembles how you interact with the world around you.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Request />
      </div>
    );
  }
}

export default About;
