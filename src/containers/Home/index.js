import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import { Link } from 'react-router-dom';
import './Home.css';

//Img and Icons
import PicklesLogo from '../../lib/img/Pickles_Logo.svg';
import StadiumImg from '../../lib/img/stadium.svg';
import Cloud1Img from '../../lib/img/cloud-1.svg';
import Cloud2Img from '../../lib/img/cloud-2.svg';
import waitingLine from '../../lib/img/waitingLine.svg';
import salesChannel from '../../lib/img/salesChannel.svg';
import fanExperience from '../../lib/img/fanExperience.svg';


class Home extends Component {

  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.home.intro.title;
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

    return (
      <div>
        <section className="intro intro-home">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="intro-block">
                  <h1>{t.home.intro.title}</h1>
                  <h3>{t.home.intro.subtitle}</h3>
                  <a className="btn green" target="_blank" rel="noopener noreferrer" href='http://m.me/478723295874005'>{t.button.demo}</a>
                  <Link className="btn-link" to='/features'>{t.home.intro.learnMore}</Link>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 hidden-xs">
                <img className="cloud-1" src={Cloud1Img} alt=""/>
                <img className="cloud-2" src={Cloud2Img} alt=""/>
                <img src={StadiumImg} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="home-study">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="card-header-type">
                      {t.home.body.study.cardType}
                    </div>
                    <h2>{t.home.body.study.cardTitle}</h2>
                    <Link className="btn white" to='/case-study'>{t.home.body.study.cardBtn}</Link>
                  </div>
                  <div className="col-sm-4">
                    <img className="hidden-xs" alt="" src={PicklesLogo}/>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="row">
                  <div className="col-xs-6 col-sm-3">
                    <div className="stats-title">15<span className="home-study-ind">%</span></div>
                    <div className="stats-subtitle">{t.home.body.study.subtitle0}</div>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                    <div className="stats-title">60<span className="home-study-ind">%</span></div>
                    <div className="stats-subtitle">{t.home.body.study.subtitle1}</div>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                    <div className="stats-title">44<span className="home-study-ind">%</span></div>
                    <div className="stats-subtitle">{t.home.body.study.subtitle2}</div>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                    <div className="stats-title">30.1<span className="home-study-ind">%</span></div>
                    <div className="stats-subtitle">{t.home.body.study.subtitle3}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-venues body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-xs-12 col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img alt="" src={salesChannel}/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="section-type dark">{t.home.body.type}<span className="section-type-highlight">{t.home.body.type1}</span></div>
                <h2>{t.home.body.title1}</h2>
                <p>{t.home.body.p1}</p>
                <div className="stats-title">30.1<span className="home-study-ind">%</span></div>
                <div className="stats-subtitle">{t.home.body.study.subtitle3}</div>

              </div>
            </div>
          </div>
        </section>
        <section className="home-lines body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-xs-12 col-sm-6">
                <div className="section-type">{t.home.body.type}<span className="section-type-highlight">{t.home.body.type2}</span></div>
                <h2>{t.home.body.title2}</h2>
                <p>{t.home.body.p2}</p>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img alt="" src={waitingLine}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-fans body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-xs-12 col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img alt="" src={fanExperience}/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="section-type dark">{t.home.body.type}<span className="section-type-highlight">{t.home.body.type3}</span></div>
                <h2>{t.home.body.title3}</h2>
                <p>{t.home.body.p3}</p>
                <div className="stats-title">87<span className="home-study-ind"></span></div>
                <div className="stats-subtitle">NPS Recommendation Score (Industry Avg. 28)</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapState = state => ({
  t: getTranslations(state),
});

export default connect(mapState)(Home);
