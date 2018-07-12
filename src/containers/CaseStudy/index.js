import React, { Component } from 'react';
import { connect } from 'react-redux';
import Request from '../../components/Request/';
import { getTranslations } from '../../redux/selectors/translations';
import './CaseStudy.css';
import PicklesLogo from '../../lib/img/Pickles_Logo.svg';

class Company extends Component {
  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.menu.study;
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

    return (
      <div>
        <section className="intro intro-study">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block">
                  <img src={PicklesLogo} />
                  <h1>{t.study.intro.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="body-section study-intro">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <h2>{t.study.body.title1}</h2>
                <p>{t.study.body.p1p1}</p>
                <p>{t.study.body.p1p2}</p>
              </div>
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <div className="delivery-img"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-3">
                <div className="stats-title">49.5<span className="stats-ind">%</span></div>
                <div className="stats-subtitle">{t.home.body.study.subtitle0}</div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="stats-title">10.2<span className="stats-ind">%</span></div>
                <div className="stats-subtitle">{t.home.body.study.subtitle1}</div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="stats-title">1.71</div>
                <div className="stats-subtitle">{t.home.body.study.subtitle2}</div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="stats-title">3<span className="stats-ind">MIN</span></div>
                <div className="stats-subtitle">{t.home.body.study.subtitle3}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="body-section study-sales">
          <div className="container">
            <div className="center-section">
              <div className="row">
                <div className="col-sm-12">
                  <div className="img-wrapper">
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <h2>{t.study.body.title2}</h2>
                  <p>{t.study.body.p2}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Request />
      </div>
    );
  }
}

const mapState = state => ({
  t: getTranslations(state),
});

export default connect(mapState)(Company);
