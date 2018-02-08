import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block">
                  <div className="title">We're an innovative startup from Montreal.</div>
                  <p>Go big or go home!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section>
            <div className="row flex">
              <div className="col-sm-12">
                <div className="bubble-container left">
                  <div className="title">Our Vision</div>
                  <p>The app market is over saturated. Everyone is building apps whether it's movie theatre, a stadium a train station or an airport. Companies are investing enormous sums of money for an app that not many people use. Users end up with irregular and arduous user experiences and apps that take up space on their phone.</p>
                  <p>At Chatler, we make it our mission to make feel you connected to the world and there is nothing more intuitive than a conversational interface. Our product is one that ressembles the most with how we interact with the world around us.</p>
                  <div className="bubble left"></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="title">Want to work with us? Send us a message!</div>
            <a className="btn" href="/contact">Send message</a>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
