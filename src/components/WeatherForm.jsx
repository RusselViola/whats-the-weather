import React, { Component } from 'react';

export default class WeatherForm extends Component {

  render() {
    return (
      <div>
        <form>
          <input type="text"/>
          <button>Get Weather</button>
        </form>
      </div>
    )
  }
}
