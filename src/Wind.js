import React, { Component } from 'react';
import './Wind.css';

class Wind extends Component {
  render() {    
    return (
      <div className="card-contents">
        <p>Conditions: {this.props.texture}</p>
        <p>{this.props.windSpeed}mph {this.props.windDirection}° {this.props.windCompass} <i className="fas fa-location-arrow" style={{ transform: `rotate(${this.props.windDirection + 135}deg)` }}></i></p>
      </div>
    );
  }
}

export default Wind;
