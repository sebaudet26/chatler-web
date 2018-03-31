import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import { Link } from 'react-router-dom';
import Request from '../../components/Request/';
import './Features.css';

//Img and Icons
import FrictionIcon from '../../lib/icons/frictionless.svg';
import IntuitiveIcon from '../../lib/icons/intuitive.svg';
import ChatUx from '../../lib/img/chat_ux.png';
import VarietyIcon from '../../lib/icons/variety.svg';
import AddCart from '../../lib/img/Add_to_cart.png';
import ProductGroup from '../../lib/img/Product_group.png';
import ManageIcon from '../../lib/icons/gears.svg';
import OrderManager from '../../lib/img/order_manager.png';

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
        <section className="feature-overview ">
          <div className="container center-section">
            <h2>A full suite of tools powering the ultimate venue experience.</h2>
            <p>For your customers, we have our chatbot that will make it easy for anyone to order and for your concessions, we have our an app for your concessions to manage, dispatch and deliver their orders.</p>
          </div>
        </section>
        <section className="feature feature-ordering">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-icon blue">
                  <img alt="" src={FrictionIcon}/>
                </div>
                <div className="features-type dark">Chatbot</div>
                <h2>Frictionless Ordering</h2>
                <p>Nothing to download, no account to create and seat location to enter. Your customer can focus on what really matters.</p>
              </div>
              <div className="col-sm-3">
                <h3>Chatbot</h3>
                <div className="bullet-list">
                  <div className="bullet-list-item"><span className="bullet-list-point">1</span>Scan Code</div>
                  <div className="bullet-list-item"><span className="bullet-list-point">2</span>Order Food</div>
                  <div className="bullet-list-item"><span className="bullet-list-point">3</span>Pay</div>
                </div>
              </div>
              <div className="col-sm-3">
                <h3>Traditional App</h3>
                <div className="bullet-list">
                  <div className="bullet-list-item"><span className="bullet-list-point">1</span>Download App</div>
                  <div className="bullet-list-item"><span className="bullet-list-point">2</span>Figure Out How to Use it</div>
                  <div className="bullet-list-item"><span className="bullet-list-point">3</span>Create Account</div>
                  <div className="bullet-list-item"><span className="bullet-list-point">4</span>Order Food</div>
                  <div className="bullet-list-item"><span className="bullet-list-point">5</span>Enter Seat Location</div>
                  <div className="bullet-list-item"><span className="bullet-list-point">6</span>Pay</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature feature-ux">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-wrapper hidden-xs">
                  <img width="375px" alt="" src={ChatUx}/>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="img-icon white">
                  <img alt="" src={IntuitiveIcon}/>
                </div>
                <div className="features-type">Chatbot</div>
                <h2>Intuitive Experience</h2>
                <p>There is nothing easier to use than a conversational interface. Everyone knows how to send a text, even my grandma can do it.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="feature feature-commerce">
          <div className="container">
            <div className="row flex">
              <div className="col-sm-6">
                <div className="img-icon green">
                  <img alt="" src={VarietyIcon}/>
                </div>
                <div className="features-type">Chatbot</div>
                <h2>Sell a wide variety of products</h2>
                <p>There is nothing easier to use than a conversational interface. Everyone knows how to send a text, even my grandma can do it.</p>
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
        <section className="feature feature-manager">
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
                <div className="features-type dark">Order Manager</div>
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
