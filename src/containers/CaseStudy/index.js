import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Request from '../../components/Request/';
import { getTranslations } from '../../redux/selectors/translations';
import './CaseStudy.css';
import PicklesLogo from '../../lib/img/Pickles_Blue_Logo.svg';
import Graph from '../../lib/img/Graph.svg';

class Company extends Component {
  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.menu.study;
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

    return (
      <div>
        <section className="intro intro-study">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                <img src={PicklesLogo} alt=""/>
                  <h1>{t.study.intro.title}</h1>
                  <h3>{t.study.intro.subtitle}</h3>
                  <a className="btn blue" target="_blank" rel="noopener noreferrer" href='http://m.me/621034761581515'>{t.study.intro.btn1}</a>
                  <Link className="btn white" to='/features'>{t.study.intro.btn2}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="body-section study-intro">
          <div className="container">
            <div className="row">
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
                <div className="stats-title">57<span className="stats-ind">%</span></div>
                <div className="stats-subtitle">{t.stats.conversion}</div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="stats-title">44<span className="stats-ind">%</span></div>
                <div className="stats-subtitle">{t.stats.retention}</div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="stats-title">3<span className="stats-ind">MIN</span></div>
                <div className="stats-subtitle">{t.stats.deliveryTime}</div>
              </div>
              <div className="col-xs-6 col-sm-3">
                <div className="stats-title">1.71</div>
                <div className="stats-subtitle">{t.stats.orderPerCustomer}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="body-section study-sales">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <h2>{t.study.body.title2}</h2>
                <p>{t.study.body.p2}</p>
                <div className="row">
                  <div className="col-xs-6 col-sm-4">
                    <div className="stats-title">10<span className="stats-ind">%</span></div>
                    <div className="stats-subtitle">{t.stats.salesVolume}</div>
                  </div>
                  <div className="col-xs-6 col-sm-4">
                    <div className="stats-title">30.1<span className="stats-ind">%</span></div>
                    <div className="stats-subtitle">{t.stats.orderTotal}</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={Graph} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="body-section study-lines">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                </div>
              </div>
              <div className="col-sm-6">
                <h2>{t.study.body.title3}</h2>
                <p>{t.study.body.p3}</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-sm-12">
              <div className="center-section">
                <div className="img-icon blue">
                </div>
                <h2>{t.study.body.title4}</h2>
                <p>{t.study.body.p4}</p>
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
