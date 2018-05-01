import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';

class Privacy extends Component {
  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.footer.privacy;
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

    return (
      <div>
        <div className="container">
          <section>
            <div className="row">
              <div className="col-md-12">
                <h1>{t.privacy.title}</h1>
                <h2>{t.privacy.h1}</h2>
                <p>{t.privacy.p1}</p>
                <ul className="bullet-list">
                  <li>{t.privacy.l1}</li>
                  <li>{t.privacy.l2}</li>
                  <li>{t.privacy.l3}</li>
                  <li>{t.privacy.l4}</li>
                </ul>
                <h2>{t.privacy.h2}</h2>
                <h3>{t.privacy.s2p1}</h3>
                <p>{t.privacy.p2p1}</p>
                <h3>{t.privacy.s2p2}</h3>
                <p>{t.privacy.p2p2}</p>
                <h2>{t.privacy.h3}</h2>
                <p>{t.privacy.p3p1}</p>
                <p>{t.privacy.p3p2}</p>
                <p>{t.privacy.p3p3}</p>
                <p>{t.privacy.p3p4}</p>
                <h2>{t.privacy.h4}</h2>
                <p>{t.privacy.p4}</p>
                <h2>{t.privacy.h5}</h2>
                <p>{t.privacy.p5}</p>
                <h2>{t.privacy.h6}</h2>
                <p>{t.privacy.p6}</p>
                <h2>{t.privacy.h7}</h2>
                <p>{t.privacy.p7}</p>
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
