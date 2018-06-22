import React, { Component } from 'react';
import './Swell.css';

class Swell extends Component {
  render() {
    let height = Math.round(this.props.swellHeight * 3.28 * 10) / 10;
    let swellLowRange = Math.floor(height);
    let swellUpRange = Math.ceil(height);
    return (
      <div className="card-contents">
        <span className="swell-height">{swellLowRange} - {swellUpRange}ft</span>
        <p>{height}ft @ {this.props.swellPeriod}sec {this.props.swellDirection}° {this.props.swellCompass}<i className="fas fa-location-arrow" style={{ transform: `rotate(${this.props.swellDirection + 135}deg)` }}></i></p>
      </div>
    );
  }
}

export default Swell;
