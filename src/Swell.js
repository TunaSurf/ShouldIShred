import React, { Component } from 'react';
import './Swell.css';

class Swell extends Component {
  render() {
    let arrow = <svg className="arrow" style={{ transform: `rotate(${this.props.swellDirection}deg)` }} viewBox="0 0 30 93" height="16px" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.4142">
                  <path d="M21.847 59.722L30 57.566l-15 35.17-15-35.17 8.153 2.156L15 0l6.847 59.722z" />
                </svg>

    let swellDirection = this.props.swellDirection ? this.props.swellDirection + "°" : "";

    return (
      <div className="card-contents">
        <h2 className="swell-height">{this.props.swellHeight}ft</h2>
        <p>{this.props.swellPeriod}sec {swellDirection} {this.props.swellCompass} <span>{arrow}</span></p>
      </div>
    );
  }
}

export default Swell;
