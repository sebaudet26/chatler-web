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
