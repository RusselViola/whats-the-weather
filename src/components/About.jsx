import React, { Component } from 'react';

const About = props => {

  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This Weather Application was created using <a href="https://facebook.github.io/react">React.js</a> and NodeJS</p>
      <p>Powered by <a href="http://openweathermap.org">OpenWeatherMap API</a></p>
      <p>Created by: Russel Viola</p>
    </div>
  )
}

export default About;
