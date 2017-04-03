import React, { Component } from 'react';

export default class ErrorModal extends Component {

  componentDidMount() {
    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open;
  }

  render() {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal>
        <h4>Modal Message</h4>
        <p>Error message</p>
        <p>
          <button className="button hollow" data-close>
            OK
          </button>
        </p>
      </div>
    )
  }
}
