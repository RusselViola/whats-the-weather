import React, { Component } from 'react';

export default class ErrorModal extends Component {

  static defaultProps() {
    return {
      title: 'Error'
    }
  }

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  }

  componentDidMount() {
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    let {title, message} = this.props;
    debugger;
    return (

        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{title}</h4>
          <p>{message}</p>
          <p>
            <button className="button hollow" data-close="">
              OK
            </button>
          </p>
        </div>
    )
  }
}
