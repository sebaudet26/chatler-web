import React, { Component } from 'react';
import "./Footer.css";
import Logo from '../../lib/img/Logo.js';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <div className="brand">
                  <a href="/">
                    <Logo />
                    Chatler
                  </a>
                </div>
                <ul className="footer-list">
                  <li className="footer-list-title">Contact Us</li>
                  <li>contact@chatler.io</li>
                  <li>Montreal, QC, Canada</li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">Pages</li>
                  <li><a href="/">Home</a></li>
                  <li><a href="/features">Features</a></li>
                  <li><a href="/company">Company</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">Social</li>
                  <li>
                    <a href="/partners">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/partners">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-12">
                <ul className="footer-list">
                  <li className="footer-list-title">Language</li>
                  <li><a href="/">English</a></li>
                  <li><a href="/">Français</a></li>
                </ul>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright">&copy; Chatler 2018</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
