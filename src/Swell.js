import React, { Component } from 'react';
import './Swell.css';

class Swell extends Component {
  render() {
    return (
      <div className="card-contents">
        <span className="swell-height">{this.props.swellHeight}ft</span>
        <p>{this.props.swellPeriod}sec {this.props.swellDirection}° {this.props.swellCompass}<i className="fas fa-location-arrow" style={{ transform: `rotate(${this.props.swellDirection + 135}deg)` }}></i></p>
      </div>
    );
  }
}

export default Swell;
