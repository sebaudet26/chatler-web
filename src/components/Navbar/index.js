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
                <a href={process.env.PUBLIC_URL + '/'}>
                  <Logo />
                  Chatler
                </a>
              </div>
              <div className="menu">
                <a className='menu-link' href={process.env.PUBLIC_URL + '/'}>{t.menu.home}</a>
                <a className="menu-link" href={process.env.PUBLIC_URL + '/company'}>{t.menu.company}</a>
                <a className="menu-link"href={process.env.PUBLIC_URL + '/contact'}>{t.menu.contact}</a>
              </div>
              <div className="mobile-menu">
                <img className="mobile-menu-icon" src={MenuIcon} alt="" onClick={this.burgerToggle} />
                <ul className="mobile-menu-links">
                  <li><a href={process.env.PUBLIC_URL + '/'} onClick={this.burgerToggle}>{t.menu.home}</a></li>
                  <li><a href={process.env.PUBLIC_URL + '/company'} onClick={this.burgerToggle}>{t.menu.company}</a></li>
                  <li><a href={process.env.PUBLIC_URL + '/contact'} onClick={this.burgerToggle}>{t.menu.contact}</a></li>
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
