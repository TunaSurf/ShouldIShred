import React, { Component } from 'react';
import './Tide.css';

class Tide extends Component {
  render() {
    return (
      <div className="card-contents">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325 150" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <g fill="none">
            <path id="line" stroke="#5EA8FF" strokeWidth="3" d="M0 75 L 325 75"/>
            <path stroke="#5EA8FF" strokeWidth="2.81" d="M0 3.841c43.623 0 105.278 9.234 162.5 71.159 51.156 55.361 119.578 70.747 162.5 70.747" />
            <path stroke="#00000054" strokeWidth=".92" d="M114.712 145.747V3.841" strokeDasharray="3.167" />
          </g>
        </svg >
      </div>
    );
  }
}

export default Tide;
