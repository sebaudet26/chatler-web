import React, { Component } from 'react';
import Request from '../../components/Request/';

class About extends Component {
  render() {
    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="intro-block">
                  <h1>Features</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container content">
          <section>
            <div className="row">
              <div className="col-sm-12">
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
