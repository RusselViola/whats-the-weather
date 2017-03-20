import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap'

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Miami',
      temp: 88
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location) {
    let _this = this;

    openWeatherMap.getTemp(location).then(function (temp) {
      _this.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
  }

  render() {
    let {temp, location} = this.state;

    return (
      <div>
        <h3>What's the Weather?</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage
          temp={temp}
          location={location}
        />
      </div>
    )
  }
}
