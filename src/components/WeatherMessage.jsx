import React, { Component } from 'react';

const WeatherMessage = props => {

  let {temp, location} = props;

  return (
    <h3>It is {temp} in {location}.</h3>
  )
}
 export default WeatherMessage;
