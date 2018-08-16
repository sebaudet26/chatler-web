import React, { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import { changeLocale } from '../../redux/actions/app';


const mapState = () => ({});

const mapActions = dispatch => ({
  changeLocale: (language, country) => (
    dispatch(changeLocale(language, country))
  ),
});

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      const parsed = queryString.parse(window.location.href.split('?')[1]);

      if (parsed.locale) {
        const split = parsed.locale.split('_');

        if (split.length >= 2) {
          this.props.changeLocale(split[0].toLowerCase(), split[1].toLowerCase());
        }
      }

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return connect(mapState, mapActions)(AsyncComponent);
}
