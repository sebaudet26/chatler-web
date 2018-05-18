import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import { Link } from 'react-router-dom';
import Request from '../../components/Request/';
import './Features.css';

//Img and Icons
import FrictionIcon from '../../lib/icons/frictionless.svg';
import IntuitiveIcon from '../../lib/icons/intuitive.svg';
import ChatUx from '../../lib/img/chat_ux_w.png';
import VarietyIcon from '../../lib/icons/variety.svg';
import AddCart from '../../lib/img/Add_to_cart.png';
import ProductGroup from '../../lib/img/Product_group.png';
import ManageIcon from '../../lib/icons/gears.svg';
import OrderManager from '../../lib/img/order_manager.png';

class Features extends Component {
  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.menu.features;
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

    return (
      <div>
        <section className="intro intro-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                  <h1>{t.features.intro.title}</h1>
                  <h3>{t.features.intro.subtitle}</h3>
                  <Link className="btn blue" to='/contact'>{t.button.demo}</Link>
                  <ul className="intro-list">
                    <li className="intro-list-item">
                      <div className="img-icon blue"><img alt="" src={FrictionIcon}/></div>
                      <div className="intro-list-item-title">{t.features.intro.feature1Title}</div>
                      <div className="intro-list-item-subtitle">{t.features.intro.feature1Subtitle}</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="img-icon white"><img alt="" src={IntuitiveIcon}/></div>
                      <div className="intro-list-item-title">{t.features.intro.feature2Title}</div>
                      <div className="intro-list-item-subtitle">{t.features.intro.feature2Subtitle}</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="img-icon green"><img alt="" src={VarietyIcon}/></div>
                      <div className="intro-list-item-title">{t.features.intro.feature3Title}</div>
                      <div className="intro-list-item-subtitle">{t.features.intro.feature3Subtitle}</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="img-icon red"><img alt="" src={ManageIcon}/></div>
                      <div className="intro-list-item-title">{t.features.intro.feature4Title}</div>
                      <div className="intro-list-item-subtitle">{t.features.intro.feature4Subtitle}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-overview body-intro">
          <div className="container center-section">
            <h2>{t.features.body.title1}</h2>
            <p>{t.features.body.p1}</p>
          </div>
        </section>
        <section className="feature feature-ordering body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-md-6">
                <div className="img-icon blue">
                  <img alt="" src={FrictionIcon}/>
                </div>
                <div className="features-type dark">{t.features.body.featureType1}</div>
                <h2>{t.features.body.title2}</h2>
                <p>{t.features.body.p2}</p>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-6">
                    <h3>{t.features.body.featureType1}</h3>
                    <div className="bullet-list">
                      <div className="bullet-list-item"><span className="bullet-list-point">1</span>{t.features.body.bulletList1}</div>
                      <div className="bullet-list-item"><span className="bullet-list-point">2</span>{t.features.body.bulletList2}</div>
                      <div className="bullet-list-item"><span className="bullet-list-point">3</span>{t.features.body.bulletList3}</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h3>{t.features.body.tradionalApp}</h3>
                    <div className="bullet-list">
                      <div className="bullet-list-item"><span className="bullet-list-point">1</span>{t.features.body.bulletList4}</div>
                      <div className="bullet-list-item"><span className="bullet-list-point">2</span>{t.features.body.bulletList5}</div>
                      <div className="bullet-list-item"><span className="bullet-list-point">3</span>{t.features.body.bulletList6}</div>
                      <div className="bullet-list-item"><span className="bullet-list-point">4</span>{t.features.body.bulletList7}</div>
                      <div className="bullet-list-item"><span className="bullet-list-point">5</span>{t.features.body.bulletList8}</div>
                      <div className="bullet-list-item"><span className="bullet-list-point">6</span>{t.features.body.bulletList9}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature feature-ux body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img alt="" src={ChatUx}/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="img-icon white">
                  <img alt="" src={IntuitiveIcon}/>
                </div>
                <div className="features-type">{t.features.body.featureType1}</div>
                <h2>{t.features.body.title3}</h2>
                <p>{t.features.body.p3}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="feature feature-commerce body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-icon green">
                  <img alt="" src={VarietyIcon}/>
                </div>
                <div className="features-type">{t.features.body.featureType1}</div>
                <h2>{t.features.body.title4}</h2>
                <p>{t.features.body.p4}</p>
              </div>
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img className="feature-commerce-gear" alt="" src={AddCart}/>
                  <img className="feature-commerce-food" alt="" src={ProductGroup}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature feature-manager body-section">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-7">
                <div className="img-wrapper hidden-xs">
                  <img alt="" src={OrderManager}/>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="img-icon red">
                  <img alt="" src={ManageIcon}/>
                </div>
                <div className="features-type dark">{t.features.body.featureType2}</div>
                <h2>{t.features.body.title5}</h2>
                <p>{t.features.body.p5}</p>
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

export default connect(mapState)(Features);
