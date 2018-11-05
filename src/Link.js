import React, { Component } from 'react';

const $ = window.$;

export default class Link extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    $(this.buttonRef.current).tooltip();
  }

  componentWillUnmount() {
    $(this.buttonRef.current).tooltip('dispose');
  }

  render() {
    return <a href={this.props.href} ref={this.buttonRef} title={this.props.title} {...this.props}>{ this.props.caption }</a>
  }
}
