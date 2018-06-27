import React, { Component } from 'react';
import './Wind.css';

class Wind extends Component {
  render() {
    function toDegF(c) {
      return Math.round(c * 1.8 + 32) + "°F";
    }
    
    return (
      <div className="card-contents">
        <span className="conditions">{this.props.texture}</span>
        <p>Wind: {this.props.windSpeed}mph {this.props.windDirection}° {this.props.windCompass} <i className="fas fa-location-arrow" style={{ transform: `rotate(${this.props.windDirection + 135}deg)` }}></i></p>
        <p>Air Temp: {toDegF(this.props.airTemp)}</p>
        <p>Water Temp: {toDegF(this.props.waterTemp)}</p>
      </div>
    );
  }
}

export default Wind;
