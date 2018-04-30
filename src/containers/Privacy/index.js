import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import { Link } from 'react-router-dom';


class Privacy extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <section className="intro intro-company">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                  <h1>{t.privacy.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section>
            <div className="row">
              <div className="col-md-12">
                <p>{t.privacy.statement}</p>
                <h2>{t.privacy.h1}</h2>
                <p>{t.privacy.p1}</p>
                <h2>{t.privacy.h2}</h2>
                <p>{t.privacy.p2}</p>
                <ul className="bullet-list">
                  <li>{t.privacy.l1}</li>
                  <li>{t.privacy.l2}</li>
                  <li>{t.privacy.l3}</li>
                  <li>{t.privacy.l4}</li>
                </ul>
                <h2>{t.privacy.h3}</h2>
                <p>{t.privacy.p3}</p>
                <h2>{t.privacy.h4}</h2>
                <p>{t.privacy.p4}</p>
                <h2>{t.privacy.h5}</h2>
                <p>{t.privacy.p5}</p>
                <h2>{t.privacy.h6}</h2>
                <p>{t.privacy.p6}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  t: getTranslations(state),
});

export default connect(mapState)(Privacy);
