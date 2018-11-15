import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Footer.css";
import { getTranslations } from '../../redux/selectors/translations';
import Logo from '../../lib/img/Logo.js';
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
                    <Logo />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.pages}</li>
                  <li><Link to='/'>{t.menu.home}</Link></li>
                  <li><Link to='/features'>{t.menu.features}</Link></li>
                  <li><Link to='/case-study'>{t.menu.study}</Link></li>
                  <li><Link to='/company'>{t.menu.company}</Link></li>
                  <li><a target="_blank" rel="noopener noreferrer" href='http://dashboard.chatler.io'>{t.menu.dashboard}</a></li>
                </ul>
              </div>
              <div className="col-sm-3 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.resources}</li>
                  <li><Link to='/faq'>{t.footer.faq}</Link></li>
                  <li><Link to='/privacy'>{t.footer.privacy}</Link></li>
                  <li><Link to='/terms'>{t.footer.terms}</Link></li>
                </ul>
              </div>
              <div className="col-sm-3 col-xs-6">
                <ul className="footer-list">
                  <li className="footer-list-title">{t.footer.social}</li>
                  <li>
                    <a href="https://medium.com/chatler-blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Chatler-Pickles-621034761581515/">
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
              <div className="col-sm-3 col-xs-6">
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
                <div className="contact-info">contact@chatler.io</div>
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
