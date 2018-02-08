import React, { Component } from 'react';
import './Home.css';
import LogoIcon from '../../lib/icons/logo-icon.svg';
import FoodIcon from '../../lib/icons/food-icon.svg';
import ScanIcon from '../../lib/icons/scan-icon.svg';
import ChatIcon from '../../lib/icons/chat-icon.svg';
import PayIcon from '../../lib/icons/pay-icon.svg';
import RobotImg from '../../lib/img/robot.svg';
import VenueImg from '../../lib/img/venue-ill.svg';
import StadiumImg from '../../lib/img/stadium.svg';
import Cloud1Img from '../../lib/img/cloud-1.svg';
import Cloud2Img from '../../lib/img/cloud-2.svg';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="intro-block">
                  <h1>In-seat delivery through chat.</h1>
                  <p>A chatbot that allows fans to easily get their food delivered to their seat without missing any of the action.</p>
                  <a className="btn" href="/demo">Request Demo</a>
                  <a className="btn-link" href="/">or learn more</a>
                </div>
              </div>
              <div className="col-sm-6">
                <img className="cloud-1" src={Cloud1Img} />
                <img className="cloud-2" src={Cloud2Img} />
                <img src={StadiumImg} />
              </div>
            </div>
            <span className="mouse">
        			<span>
        			</span>
        		</span>
          </div>
        </section>
        <div className="container">
          <section>
            <div className="row flex">
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
                <div className="img-wrapper hidden-xs">
                  <img src={RobotImg} alt=""/>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row flex">
              <div className="col-sm-5">
                <div className="img-wrapper hidden-xs">
                  <img src={VenueImg} alt=""/>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="bubble-container right">
                  <div className="img-icon white">
                    <img src={FoodIcon} alt=""/>
                  </div>
                  <div className="title white">Venues</div>
                  <p className="white">Allow your customers to order your products easily from the stands. Foodi is the simplest and most intuitive solution for your clients. Increase your sales while the game is going and unclutter the waiting lines during the breaks.</p>
                  <div className="bubble blue right"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="steps">
            <div className="row flex">
              <div className="col-sm-4">
                <div className="img-icon blue">
                  <img src={ScanIcon} alt="" />
                </div>
                <div className="subtitle">Scan</div>
                <p>Open your messenger app and scan a code to initiate a conversation with Foodi.</p>
              </div>
              <div className="col-sm-4">
                <div className="img-icon blue">
                  <img src={ChatIcon} alt="" />
                </div>
                <div className="subtitle">Chat</div>
                <p>Converse with our chatbot, decide what you want to eat and pay all in one place</p>
              </div>
              <div className="col-sm-4">
                <div className="img-icon blue">
                  <img src={PayIcon} alt=""/>
                </div>
                <div className="subtitle">Pay</div>
                <p>It’s as simple as that. Foodi handles everything! :)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
