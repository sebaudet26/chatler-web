import React, { Component } from 'react';
import Request from '../../components/Request/';
import './Features.css';

class About extends Component {
  render() {
    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                  <h1>What we offer</h1>
                  <h3>A full suite of tools powering venues.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section>
            <div className="row flex">
              <div className="col-sm-7">
                <div className="bubble-container left">
                  <h2>Chatbot</h2>
                  <p>Our chatbot gathers orders from fans in a super intuitive experience and dispatches them to the correct concession.</p>
                  <div className="bubble left"></div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="img-wrapper hidden-xs">
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row flex">
              <div className="col-sm-5">
                <div className="img-wrapper hidden-xs">
                </div>
              </div>
              <div className="col-sm-7">
                <div className="bubble-container right">
                  <h2>Complete tools for concessions and runners</h2>
                  <p>A complete solution to fulfill your customers orders. It's an easy-to-use drag-and-drop interface that gives concessions an easy way to process and dispatch orders.</p>
                  <p>Runners can easily pickup orders from concessions and deliver them to the fans.</p>
                  <div className="bubble right"></div>
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
