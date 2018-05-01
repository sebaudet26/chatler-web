import React, { Component } from 'react';
import { connect } from 'react-redux';
import Request from '../../components/Request/';
import { getTranslations } from '../../redux/selectors/translations';
import './Company.css';
import RocketIcon from '../../lib/icons/rocket.svg';
import LogoIcon from '../../lib/icons/logo-icon.svg';

class Company extends Component {
  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.menu.company;
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

    return (
      <div>
        <section className="intro intro-company">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                  <h1>{t.company.intro.title}</h1>
                  <h3>{t.company.intro.subtitle}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section>
            <div className="row">
              <div className="col-md-12">
                <div className="center-section">
                  <div className="img-icon blue">
                    <img src={RocketIcon} alt="" />
                  </div>
                  <h2>{t.company.body.title1}</h2>
                  <p>{t.company.body.p1}</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-12">
                <div className="center-section">
                  <img className="logo-icon" src={LogoIcon} alt="" />
                  <h2>{t.company.body.title2}</h2>
                  <p>{t.company.body.p2l1}</p>
                  <p>{t.company.body.p2l2}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Request />
      </div>
    );
  }
}

const mapState = state => ({
  t: getTranslations(state),
});

export default connect(mapState)(Company);
