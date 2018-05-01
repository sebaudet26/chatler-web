import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import Form from '../../components/Form/';
import './Contact.css';


class Contact extends Component {
  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.contact.title;
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

    return (
      <div>
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="intro-block center-section">
                  <h1>{t.contact.title}</h1>
                  <h3>{t.contact.subtitle}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container content">
          <section>
            <div className="row">
              <div className="col-sm-12">
                <Form />
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

export default connect(mapState)(Contact);
