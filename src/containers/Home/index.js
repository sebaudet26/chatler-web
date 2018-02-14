import React, { Component } from 'react';
import './Home.css';
import Request from '../../components/Request/';
import StadiumImg from '../../lib/img/stadium.svg';
import PhoneScreenImg from '../../lib/img/screen.svg';
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
                  <h3>A chatbot that allows fans to easily get their food delivered to their seat without missing any of the action.</h3>
                  <a className="btn" href="/contact">Request Demo</a>
                  <a className="btn-link" href="/company">or learn more</a>
                </div>
              </div>
              <div className="col-sm-6 hidden-xs">
                <img className="cloud-1" src={Cloud1Img} alt=""/>
                <img className="cloud-2" src={Cloud2Img} alt=""/>
                <img src={StadiumImg} alt="" />
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
            <div className="row">
              <div className="col-sm-7">
                <div className="bubble-container left">
                  <h2>Seamless experience for fans</h2>
                  <p>Fans can effortlessly order with our chatbot. There are no apps to download, no accounts to create and no location to enter. The only thing the fan has to think about is what to eat. Just scan, chat and pay!</p>
                  <div className="bubble left"></div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="img-wrapper hidden-xs">
                  <div className="phone">
                    <img src={PhoneScreenImg} alt="" />
                    <div className="phone-home"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-5">
                <div className="img-wrapper hidden-xs">
                  <div className="tablet">
                    <div className="tablet-home"></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="bubble-container right">
                  <h2>Increased productivity and efficiency for venues</h2>
                  <p>Venues lose on potential sales because fans don't want to miss any of the action. And during breaks, customers don't want to wait in line either. We help venues have a steady demand all along the event and help them reach their sales potential.</p>
                  <div className="bubble right"></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12">
                <div className="center-section">
                  <h2>More insights on your customers</h2>
                  <p>Get to know your fans better. The person attending the event is very often not the one who purchased the ticket. Chatler helps venues understand their customers.</p>
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

export default Home;
