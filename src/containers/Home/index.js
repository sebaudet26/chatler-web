import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import './Home.css';
import Request from '../../components/Request/';
import StadiumImg from '../../lib/img/stadium.svg';
import PhoneScreenImg from '../../lib/img/screen.svg';
import TabletScreenImg from '../../lib/img/tablet_screen.svg';
import Cloud1Img from '../../lib/img/cloud-1.svg';
import Cloud2Img from '../../lib/img/cloud-2.svg';
import LightIcon from '../../lib/icons/lightning.svg';
import GearsIcon from '../../lib/icons/gears.svg';
import ChartIcon from '../../lib/icons/pie-chart.svg';

class Home extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="intro-block">
                  <h1>{t.home.intro.title}</h1>
                  <h3>{t.home.intro.subtitle}</h3>
                  <a className="btn" href="/contact">{t.button.demo}</a>
                  <a className="btn-link" href="/company">{t.home.intro.learnMore}</a>
                </div>
              </div>
              <div className="col-md-6 hidden-md">
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
        <div className="container">
          <section>
            <div className="row">
              <div className="col-md-7">
                <div className="bubble-container left">
                  <div className="img-icon blue">
                    <img src={LightIcon} alt="" />
                  </div>
                  <h2>{t.home.body.title1}</h2>
                  <p>{t.home.body.p1}</p>
                  <div className="bubble left"></div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="img-wrapper hidden-md">
                  <div className="phone">
                    <img src={PhoneScreenImg} alt="" />
                    <div className="phone-home"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-sm-5">
                <div className="img-wrapper hidden-md">
                  <div className="tablet">
                    <img src={TabletScreenImg} alt="" />
                    <div className="tablet-home"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="bubble-container right">
                  <div className="img-icon green">
                    <img src={GearsIcon} alt="" />
                  </div>
                  <h2>{t.home.body.title2}</h2>
                  <p>{t.home.body.p2}</p>
                  <div className="bubble right"></div>
                </div>
              </div>
            </div>
          </section>
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
