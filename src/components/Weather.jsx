import React, { Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap'

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(location) {
    let _this = this;

    this.setState({isLoading: true});
    
    openWeatherMap.getTemp(location).then(function (temp) {
      _this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      _this.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  }

  render() {
    let {temp, location, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return  <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>What's the Weather?</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
}
