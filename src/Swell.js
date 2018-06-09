import React, { Component } from 'react';
import './Swell.css';

class Swell extends Component {
  render() {
    let swellLowRange = Math.floor(this.props.swellHeight);
    let swellUpRange = Math.ceil(this.props.swellHeight);
    return (
      <div className="card-contents">
        <span className="swell-height">{swellLowRange} - {swellUpRange}ft</span>
        <p>{this.props.swellHeight}ft @ {this.props.swellPeriod}sec {this.props.swellDirection}°SE</p>
      </div>
    );
  }
}

export default Swell;
