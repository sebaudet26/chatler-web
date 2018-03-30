import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import { Link } from 'react-router-dom';
import Request from '../../components/Request/';
import './Features.css';

//Img and Icons
import FrictionIcon from '../../lib/icons/frictionless.svg';
import IntuitiveIcon from '../../lib/icons/intuitive.svg';
import VarietyIcon from '../../lib/icons/variety.svg';
import ManageIcon from '../../lib/icons/gears.svg';


class Features extends Component {
  render() {
    const { t } = this.props;

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
                      <div className="intro-list-item-title">Frictionless</div>
                      <div className="intro-list-item-subtitle">Beats traditional apps. Just order and pay.</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="img-icon white"><img alt="" src={IntuitiveIcon}/></div>
                      <div className="intro-list-item-title">Intuitive</div>
                      <div className="intro-list-item-subtitle">Nothing easier to use than a conversational interface.</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="img-icon green"><img alt="" src={VarietyIcon}/></div>
                      <div className="intro-list-item-title">Adaptable</div>
                      <div className="intro-list-item-subtitle">Sell wide variety of products</div>
                    </li>
                    <li className="intro-list-item">
                      <div className="img-icon red"><img alt="" src={ManageIcon}/></div>
                      <div className="intro-list-item-title">Easy to Manage</div>
                      <div className="intro-list-item-subtitle">Prepare, dispatch and deliver orders</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-overview ">
          <div className="container center-section">
            <h2>A full suite of tools powering the ultimate venue experience.</h2>
            <p>For your customers, we have our chatbot that will make it easy for anyone to order and for your concessions, we have our an app for your concessions to manage, dispatch and deliver their orders.</p>
          </div>
        </section>
        <section className="features-ordering">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-icon blue">
                  <img alt="" src={FrictionIcon}/>
                </div>
                <h2>Frictionless Ordering</h2>
                <p>Nothing to download, no account to create and location to enter. Your customer can focus on what really matters.</p>
              </div>
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-ux">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                </div>
              </div>
              <div className="col-sm-6">
                <div className="img-icon white">
                  <img alt="" src={IntuitiveIcon}/>
                </div>
                <h2>Intuitive Experience</h2>
                <p>There is nothing easier to use than a conversational interface. Everyone knows how to send a text, even my grandma can do it.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="features-commerce">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-icon green">
                  <img alt="" src={VarietyIcon}/>
                </div>
                <h2>Sell a wide variety of products</h2>
                <p>There is nothing easier to use than a conversational interface. Everyone knows how to send a text, even my grandma can do it.</p>
              </div>
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-manager">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                </div>
              </div>
              <div className="col-sm-6">
                <div className="img-icon red">
                  <img alt="" src={ManageIcon}/>
                </div>
                <h2>Prepare, dispatch and deliver your orders</h2>
                <p>There is nothing easier to use than a conversational interface. Everyone knows how to send a text, even my grandma can do it.</p>
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
