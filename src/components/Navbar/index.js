import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';
import MenuIcon from '../../lib/icons/menu-button.svg';
import Logo from '../../lib/img/logo-nav.js';
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
                <NavLink activeClassName="active" className='menu-link' exact to={process.env.PUBLIC_URL + '/'}>{t.menu.home}</NavLink>
                <NavLink activeClassName="active" className='menu-link' to='/features'>{t.menu.features}</NavLink>
                <NavLink activeClassName="active" className='menu-link' to='/company'>{t.menu.company}</NavLink>
                <NavLink activeClassName="active" className='menu-link' to='/contact'>{t.menu.contact}</NavLink>
              </div>
              <div className="mobile-menu">
                <img className="mobile-menu-icon" src={MenuIcon} alt="" onClick={this.burgerToggle} />
                <ul className="mobile-menu-links">
                  <li><NavLink to='/' exact onClick={this.burgerToggle}>{t.menu.home}</NavLink></li>
                  <li><NavLink to='/features' onClick={this.burgerToggle}>{t.menu.features}</NavLink></li>
                  <li><NavLink to='/company' onClick={this.burgerToggle}>{t.menu.company}</NavLink></li>
                  <li><NavLink to='/contact' onClick={this.burgerToggle}>{t.menu.contact}</NavLink></li>
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

export default withRouter(connect(mapState)(Navbar));
