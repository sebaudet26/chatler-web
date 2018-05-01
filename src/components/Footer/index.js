import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Footer.css";
import Logo from '../../lib/img/Logo.js';
import { getTranslations } from '../../redux/selectors/translations';
import { changeLocale } from '../../redux/actions/app';


const onLocaleChange = (action, language, country) => () => action(language, country);

class Footer extends Component {
  render() {
    const { changeLocale, t } = this.props;

    return (
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <div className="brand">
                  <Link to='/'>
                    <Logo/>
                    Chatler
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 col-xs-4">
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.pages}</li>
                  <li><Link to='/'>{t.menu.home}</Link></li>
                  <li><Link to='/features'>{t.menu.features}</Link></li>
                  <li><Link to='/company'>{t.menu.company}</Link></li>
                  <li><Link to='/contact'>{t.menu.contact}</Link></li>
                </ul>
              </div>
              <div className="col-sm-3 col-xs-4">
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.resources}</li>
                  <li><Link to='/privacy-policy'>{t.footer.privacy}</Link></li>
                  <li><Link to='/terms'>{t.footer.terms}</Link></li>
                </ul>
              </div>
              <div className="col-sm-3 col-xs-4">
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.social}</li>
                  <li>
                    <a href="https://www.facebook.com/chatlerapp/">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/11528680/">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://angel.co/chatler">
                      Angel.co
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 col-xs-12">
                <ul className="footer-list">
                  <li className="footer-list-title">Language</li>
                  <li><a onClick={onLocaleChange(changeLocale, 'en', 'ca')}>English</a></li>
                  <li><a onClick={onLocaleChange(changeLocale, 'fr', 'ca')}>Français</a></li>
                </ul>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright">&copy; Chatler {(new Date()).getFullYear()}</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapState = state => ({
  t: getTranslations(state),
});

const mapActions = dispatch => ({
  changeLocale: (language, country) => (
    dispatch(changeLocale(language, country))
  ),
});

export default connect(mapState, mapActions)(Footer);
