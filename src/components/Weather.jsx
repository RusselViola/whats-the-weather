import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

export default class Weather extends Component {
  handleSearch(location) {
    alert(location);
  }
  
  render() {
    return (
      <div>
        <h3>What's the Weather?</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage/>
      </div>
    )
  }
}
