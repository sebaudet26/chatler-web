import React, { Component } from 'react';
import { connect } from 'react-redux';
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
              <div className="col-sm-6 col-xs-12">
                <div className="brand">
                  <a href={process.env.PUBLIC_URL + '/'}>
                    <Logo />
                    Chatler
                  </a>
                </div>
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.contactUs}</li>
                  <li>contact@chatler.io</li>
                  <li>{t.footer.contactLocation}</li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.pages}</li>
                  <li><a href={process.env.PUBLIC_URL + '/'}>{t.menu.home}</a></li>
                  <li><a href={process.env.PUBLIC_URL + '/#/company'}>{t.menu.company}</a></li>
                  <li><a href={process.env.PUBLIC_URL + '/#/contact'}>{t.menu.contact}</a></li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.social}</li>
                  <li>
                    <a href="https://www.facebook.com/Chatler-1902952329966274">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      Angel.co
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2 col-xs-12">
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
