import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslations } from '../../redux/selectors/translations';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
        CompanyValue: '',
    };
  }
  render() {
    const { t } = this.props;

    return (
      <div>
        <form action="https://facebook.us17.list-manage.com/subscribe/post?u=1d51f0c628203e7a9dc8f5441&amp;id=62b626aaef" method="POST" noValidate>
          <label htmlFor="mce-EMAIL">{t.form.email}</label>
          <input placeholder="abc@example.com" className="form-element" type="email" name="EMAIL" id="mce-EMAIL" value={this.state.emailValue} onChange={ (e)=>{this.setState({emailValue: e.target.value});} } autoCapitalize="off" autoCorrect="off"/>
          <label htmlFor="mce-FNAME">{t.form.fName}</label>
          <input placeholder="John" className="form-element" type="text" name="FNAME" id="mce-FNAME" value={this.state.fNameValue} onChange={ (e)=>{this.setState({fNameValue: e.target.value});} } autoCapitalize="off" autoCorrect="off"/>
          <label htmlFor="mce-LNAME">{t.form.lName}</label>
          <input placeholder="Doe" className="form-element" type="text" name="LNAME" id="mce-LNAME" value={this.state.lNameValue} onChange={ (e)=>{this.setState({lNameValue: e.target.value});} } autoCapitalize="off" autoCorrect="off"/>
          <label htmlFor="mce-MMERGE4">{t.form.company}</label>
        	<input placeholder="ABC Inc." className="form-element" type="text" name="MMERGE4" id="mce-MMERGE4" value={this.state.CompanyValue} onChange={ (e)=>{this.setState({CompanyValue: e.target.value});} } autoCapitalize="off" autoCorrect="off"/>
          <input type="submit" value={t.button.demo} name="subscribe" id="mc-embedded-subscribe" className="btn"/>

          <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            <input type="text" name="b_1d51f0c628203e7a9dc8f5441_62b626aaef" tabIndex="-1" value="" />
          </div>
        </form>
      </div>
    );
  }
}

const mapState = state => ({
  t: getTranslations(state),
});

export default connect(mapState)(Form);
