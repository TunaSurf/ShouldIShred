import React, { Component } from 'react';
import './Wind.css';

class Wind extends Component {
  render() {
    return (
      <div className="card-contents">
        <p>Clean</p>
        <p>{this.props.windSpeed}mph @ {this.props.windDirection}°ESE</p>
      </div>
    );
  }
}

export default Wind;
