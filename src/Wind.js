import React, { Component } from 'react';
import './Wind.css';

class Wind extends Component {
  render() {
    let windSpeed = Math.round(this.props.windSpeed * 1.15);
    let windAngle = this.props.windDirection;
    //adjust shore angle by 180deg to align with wind vector
    let shoreAngle = (this.props.shoreDirection + 180) % 360;
    //get absolute value of the difference between the wind and shore angles
    let angleDiff = Math.abs(shoreAngle - windAngle);
    let texture = "Choppy";
    if(angleDiff <= 20) {
      texture = "Clean";
    } else if(angleDiff <= 90) {
      texture = "Bumpy";
    }
    
    return (
      <div className="card-contents">
        <p>Conditions: {texture}</p>
        <p>{this.props.windCompass} @ {windSpeed}mph {this.props.windDirection}°<i className="fas fa-location-arrow" style={{ transform: `rotate(${this.props.windDirection + 135}deg)` }}></i></p>
      </div>
    );
  }
}

export default Wind;
