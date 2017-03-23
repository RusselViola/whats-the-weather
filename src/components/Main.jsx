import React, { Component } from 'react';
import Nav from 'Nav';

const Main = props => {

  return (
    <div>
      <Nav />
      {props.children}
    </div>
  )
}
 export default Main;
