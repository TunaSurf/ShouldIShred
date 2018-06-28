import React, { Component } from 'react';
import './Wind.css';

class Wind extends Component {
  render() {
    function toDegF(c) {
      return Math.round(c * 1.8 + 32) + "°F";
    }

    let arrow = <svg className="arrow" style={{ transform: `rotate(${this.props.windDirection}deg)` }} viewBox="0 0 30 93" height="16px" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.4142">
                  <path d="M21.847 59.722L30 57.566l-15 35.17-15-35.17 8.153 2.156L15 0l6.847 59.722z" />
                </svg>

    let windDirection = this.props.windDirection ? this.props.windDirection + "°" : "";
    
    return (
      <div className="card-contents">
        <h2 className="conditions">{this.props.texture}</h2>
        <p>Wind: {this.props.windSpeed}mph {windDirection} {this.props.windCompass} <span>{arrow}</span></p>
        <p>Air Temp: {toDegF(this.props.airTemp)}</p>
        <p>Water Temp: {toDegF(this.props.waterTemp)}</p>
      </div>
    );
  }
}

export default Wind;
