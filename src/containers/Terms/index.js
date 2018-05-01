import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';

class Terms extends Component {
  render() {
    const { t } = this.props;
    document.title = "Chatler - "+t.footer.terms;
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

    return (
      <div>
        <div className="container">
          <section>
            <div className="row">
              <div className="col-md-12">
                <h1>{t.terms.title}</h1>
                <h2>{t.terms.h1}</h2>
                <p>{t.terms.p1p1}</p>
                <p>{t.terms.p1p2}</p>
                <p>{t.terms.p1p3}</p>
                <p>{t.terms.p1p4}</p>
                <p>{t.terms.p1p5}</p>
                <h2>{t.terms.h2}</h2>
                <p>{t.terms.p2}</p>
                <h2>{t.terms.h3}</h2>
                <p>{t.terms.p3}</p>
                <h2>{t.terms.h4}</h2>
                <p>{t.terms.p4}</p>
                <h2>{t.terms.h5}</h2>
                <p>{t.terms.p5}</p>
                <h2>{t.terms.h6}</h2>
                <p>{t.terms.p6}</p>
                <h2>{t.terms.h7}</h2>
                <p>{t.terms.p7p1}</p>
                <p>{t.terms.p7p2}</p>
                <h2>{t.terms.h8}</h2>
                <p>{t.terms.p8}</p>
                <h2>{t.terms.h9}</h2>
                <p>{t.terms.p9p1}</p>
                <p>{t.terms.p9p2}</p>
                <h2>{t.terms.h10}</h2>
                <p>{t.terms.p10}</p>
                <h2>{t.terms.h11}</h2>
                <p>{t.terms.p11}</p>
                <h2>{t.terms.h12}</h2>
                <p>{t.terms.p12p1}</p>
                <p>{t.terms.p12p2}</p>
                <h2>{t.terms.h13}</h2>
                <p>{t.terms.p13}</p>
                <h2>{t.terms.h14}</h2>
                <p>{t.terms.p14p1}</p>
                <p>{t.terms.p14p2}</p>
                <h2>{t.terms.h15}</h2>
                <p>{t.terms.p15}</p>
                <h2>{t.terms.h16}</h2>
                <p>{t.terms.p16}</p>
                <h2>{t.terms.h17}</h2>
                <p>{t.terms.p17}</p>
                <h2>{t.terms.h18}</h2>
                <p>{t.terms.p18}</p>
                <h2>{t.terms.h19}</h2>
                <p>{t.terms.p19}</p>
                <h2>{t.terms.h20}</h2>
                <p>{t.terms.p20}</p>
                <h2>{t.terms.h21}</h2>
                <p>{t.terms.p21}</p>
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

export default connect(mapState)(Terms);
