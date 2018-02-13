import React, { Component } from 'react';
import Form from '../../components/Form/';
import './Contact.css';


class About extends Component {
  render() {
    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                  <h1>Request a Demo</h1>
                  <h3>Bring Chatler to your venue and score with your fans!</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container content">
          <section>
            <div className="row">
              <div className="col-sm-12">
                <Form />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
