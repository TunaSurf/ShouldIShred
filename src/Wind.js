import React, { Component } from 'react';
import './Wind.css';

class Wind extends Component {
  render() {    
    return (
      <div className="card-contents">
        <p>Conditions: {this.props.texture}</p>
        <p>{this.props.windCompass} @ {this.props.windSpeed}mph {this.props.windDirection}°<i className="fas fa-location-arrow" style={{ transform: `rotate(${this.props.windDirection + 135}deg)` }}></i></p>
      </div>
    );
  }
}

export default Wind;
