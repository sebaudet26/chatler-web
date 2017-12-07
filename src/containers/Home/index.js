import React, { Component } from 'react';
import './Home.css';
import LogoIcon from '../../lib/icons/logo-icon.svg';
import RobotImg from '../../lib/img/robot.svg';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <div className="intro-block">
                  <div className="title">A chatbot that puts venues and their customers in the same conversation</div>
                  <p>Scan a code, tell Foodi what you want to order, and let him take care of the rest!</p>
                  <a className="btn" href="/demo">Try Demo</a>
                </div>
              </div>
              <div className="col-sm-3">
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section>
            <div className="row">
              <div className="col-sm-7">
                <div className="bubble-container left">
                  <div className="img-icon blue">
                    <img src={LogoIcon} alt=""/>
                  </div>
                  <div className="title">What is Foodi?</div>
                  <p>Foodi is a chatbot that aspires to help businesses connect with their customers. Instead of paying large sums for an app that a large quantity of your customers will never use, you can simply sell your products through chatting. Foodi mimicks the most accurately how customers order or buy products in person. </p>
                  <div className="bubble left"></div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="img-wrapper">
                  <img src={RobotImg} alt=""/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
