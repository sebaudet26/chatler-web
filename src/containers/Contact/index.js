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
              <div className="col-sm-6">
                <div className="intro-block">
                  <h1>Request a Demo</h1>
                  <p>Bring Chatler to your venue and score with your fans!</p>
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
