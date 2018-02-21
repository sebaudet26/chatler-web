import React, { Component } from 'react';
import './Request.css';

class Request extends Component {
  render() {

    return (
      <div>
        <section className="request blue">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Score with your Fans!<br /><span className="accent">Bring Chatler to your venue.</span></h2>
              </div>
              <div className="col-sm-6">
                <a className="btn" href="/contact">Request Demo</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Request;
