import React, { Component } from 'react';

export default class WeatherMessage extends Component {

  render() {
    let {temp, location} = this.props;

    return (
      <h3>It is {temp} in {location}.</h3>
    )
  }
}
