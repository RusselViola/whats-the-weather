import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

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
    this.setState({
      location: location,
      temp: 23
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
