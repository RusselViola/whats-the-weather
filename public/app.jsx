var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter')

var firstName = 'Russel'

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);