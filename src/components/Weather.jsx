import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';

export default class Weather extends Component {

  render() {
    return (
      <div>
        <h3>What's the Weather?</h3>
        <WeatherForm/>
      </div>
    )
  }
}
