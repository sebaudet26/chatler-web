import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';

class FAQ extends Component {
  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.footer.faq;
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

    return (
      <div>
        <div className="container">
          <section>
            <div className="row">
              <div className="col-md-12">
                <h1>{t.faq.title}</h1>
                <h2>{t.faq.h1}</h2>
                <h3>{t.faq.s1}</h3>
                <p>{t.faq.p1}</p>
                <h3>{t.faq.s2}</h3>
                <p>{t.faq.p2}</p>
                <h3>{t.faq.s3}</h3>
                <p>{t.faq.p3}</p>
                <h3>{t.faq.s4}</h3>
                <p>{t.faq.p4}</p>
                <h3>{t.faq.s5}</h3>
                <p>{t.faq.p5}</p>
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

export default connect(mapState)(FAQ);
