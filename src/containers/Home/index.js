import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import { Link } from 'react-router-dom';
import './Home.css';
import Request from '../../components/Request/';

//Img and Icons
import StadiumImg from '../../lib/img/stadium.svg';
import ChatUx from '../../lib/img/chat_ux.png';
import Cloud1Img from '../../lib/img/cloud-1.svg';
import Cloud2Img from '../../lib/img/cloud-2.svg';
import LightIcon from '../../lib/icons/lightning.svg';
import ManageIcon from '../../lib/icons/gears.svg';
import OrderManager from '../../lib/img/order_manager.png';
import ChartIcon from '../../lib/icons/pie-chart.svg';

class Home extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <section className="intro intro-home">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="intro-block">
                  <h1>{t.home.intro.title}</h1>
                  <h3>{t.home.intro.subtitle}</h3>
                  <Link className="btn" to='/contact'>{t.button.demo}</Link>
                  <Link className="btn-link" to='/features'>{t.home.intro.learnMore}</Link>
                </div>
              </div>
              <div className="col-md-6 hidden-med">
                <img className="cloud-1" src={Cloud1Img} alt=""/>
                <img className="cloud-2" src={Cloud2Img} alt=""/>
                <img src={StadiumImg} alt="" />
              </div>
            </div>
            <span className="mouse">
        			<span>
        			</span>
        		</span>
          </div>
        </section>
        <section className="home-chatbot body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img alt="" src={ChatUx}/>
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
                <div className="img-icon green">
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
        <div className="container">
          <section>
            <div className="row">
              <div className="col-sm-12">
                <div className="center-section">
                  <div className="img-icon blue">
                    <img src={ChartIcon} alt="" />
                  </div>
                  <h2>{t.home.body.title3}</h2>
                  <p>{t.home.body.p3}</p>
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

export default connect(mapState)(Home);
