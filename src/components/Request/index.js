import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Request.css';
import { getTranslations } from '../../redux/selectors/translations';

class Request extends Component {
  render() {
    const { t } = this.props;

    return (
      <div>
        <section className="request blue">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <h2>{t.request.l1}<br /><span className="accent">{t.request.l2}</span></h2>
              </div>
              <div className="col-sm-4">
                <a className="btn" href={process.env.PUBLIC_URL + '/contact'}>{t.button.demo}</a>
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

export default connect(mapState)(Request);
