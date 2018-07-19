import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import { Link } from 'react-router-dom';
import './Home.css';
import Request from '../../components/Request/';

//Img and Icons
import PicklesLogo from '../../lib/img/Pickles_Logo.svg';
import StadiumImg from '../../lib/img/stadium.svg';
import ChatUX from '../../lib/img/chat_ux_w.png';
import Cloud1Img from '../../lib/img/cloud-1.svg';
import Cloud2Img from '../../lib/img/cloud-2.svg';
import LightIcon from '../../lib/icons/lightning.svg';
import ManageIcon from '../../lib/icons/gears.svg';
import OrderManager from '../../lib/img/OrderManager.svg';

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
              <div className="col-sm-7 col-md-6">
                <div className="intro-block">
                  <h1>{t.home.intro.title}</h1>
                  <h3>{t.home.intro.subtitle}</h3>
                  <Link className="btn green" to='/contact'>{t.button.demo}</Link>
                  <Link className="btn-link" to='/features'>{t.home.intro.learnMore}</Link>
                </div>
              </div>
              <div className="col-sm-5 col-md-6 hidden-xs">
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
                    <div className="stats-title">12<span className="home-study-ind">%</span></div>
                    <div className="stats-subtitle">{t.home.body.study.subtitle0}</div>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                    <div className="stats-title">57<span className="home-study-ind">%</span></div>
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
        <section className="home-chatbot body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img alt="" src={ChatUX}/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="img-icon blue">
                  <img alt="" src={LightIcon}/>
                </div>
                <h2>{t.home.body.title1}</h2>
                <p>{t.home.body.p1}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-manager body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-icon blue">
                  <img alt="" src={ManageIcon}/>
                </div>
                <h2>{t.home.body.title2}</h2>
                <p>{t.home.body.p2}</p>
              </div>
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img alt="" src={OrderManager}/>
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

export default connect(mapState)(Home);
