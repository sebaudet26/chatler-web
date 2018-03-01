import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
                <Link className="btn" to='/contact'>{t.button.demo}</Link>
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
