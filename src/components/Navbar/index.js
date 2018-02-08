import React, { Component } from 'react';
import './Navbar.css';
import MenuIcon from '../../lib/icons/menu-button.svg';
import Logo from '../../lib/img/logo.svg';

class Navbar extends Component {
  render() {

    return (
      <div>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <div className="brand">
                <a href="/">
                  <img src={Logo} alt="" />
                  Chatler
                </a>
              </div>
              <div className="menu">
                <a className='menu-link' href="/">Home</a>
                <a className="menu-link" href="/product">Product</a>
                <a className="menu-link" href="/about">Company</a>
              </div>
              <div className="mobile-menu">
                <img className="mobile-menu-icon" src={MenuIcon} alt="" onClick={this.burgerToggle} />
                <ul className="mobile-menu-links">
                  <li><a href="/" onClick={this.burgerToggle}>Home</a></li>
                  <li><a href="/about" onClick={this.burgerToggle}>Product</a></li>
                  <li><a href="/" onClick={this.burgerToggle}>Company</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  burgerToggle() {
		let linksEl = document.querySelector('.mobile-menu-links');
		if (linksEl.style.display === 'block') {
			linksEl.style.display = 'none';
		} else {
			linksEl.style.display = 'block';
		}
	}
}

export default Navbar;
