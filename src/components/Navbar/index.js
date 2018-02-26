import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Navbar.css';
import MenuIcon from '../../lib/icons/menu-button.svg';
import Logo from '../../lib/img/Logo.js';
import { getTranslations } from '../../redux/selectors/translations';

class Navbar extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <nav>
          <div className="container">
            <div className="nav-wrapper">
              <div className="brand">
                <a href="/">
                  <Logo />
                  Chatler
                </a>
              </div>
              <div className="menu">
                <a className='menu-link' href="/">{t.menu.home}</a>
                <a className="menu-link" href="/company">{t.menu.company}</a>
                <a className="menu-link" href="/contact">{t.menu.contact}</a>
              </div>
              <div className="mobile-menu">
                <img className="mobile-menu-icon" src={MenuIcon} alt="" onClick={this.burgerToggle} />
                <ul className="mobile-menu-links">
                  <li><a href="/" onClick={this.burgerToggle}>{t.menu.home}</a></li>
                  <li><a href="/company" onClick={this.burgerToggle}>{t.menu.company}</a></li>
                  <li><a href="/contact" onClick={this.burgerToggle}>{t.menu.contact}</a></li>
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

const mapState = state => ({
  t: getTranslations(state),
});

export default connect(mapState)(Navbar);
