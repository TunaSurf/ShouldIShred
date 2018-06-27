import React, { Component } from 'react';
import './Tide.css';

class Tide extends Component {
  render() {
    const nextHighCurve = "M0,105c162.794,0 162.75,-103 325,-103";
    const nextLowCurve = "M0,2c162.794,0 162.75,103 325,103";
    let nextHighLabels = (
      <g className="next-high">
        <g className="tide-label-right" fontFamily="'Roboto-Light','Roboto'" fontSize="10">
          <text className="tide-graph-label" x="288.959" y="29.09" transform="translate(-6.01 -6.728)">
            12:00 PM
          </text>
          <text className="tide-graph-label" x="308.28" y="39.09" transform="translate(-6.01 -6.728)">
            3.0 ft
          </text>
          <path className="triangle" d="M325,12.155l-6,0l3,-5.155l3,5.155Z" />
        </g>
        <g className="tide-label-left" fontFamily="'Roboto-Light','Roboto'" fontSize="10">
          <text className="tide-graph-label" x="288.959" y="29.09" transform="translate(-289.418 52.657)">
            12:00 PM
          </text>
          <text className="tide-graph-label" x="288.959" y="39.09" transform="translate(-289.418 52.657)">
            3.0 ft
          </text>
          <path className="triangle" d="M0,94.845l6,0l-3,5.155l-3,-5.155Z" />
        </g>
      </g>
    );
    let nextLowLabels = (
      <g className="next-low">
        <g className="tide-label-right" fontFamily="'Roboto-Light','Roboto'" fontSize="10">
          <text className="tide-graph-label" x="288.959" y="29.09" transform="translate(-289.418 -6.728)">
            12:00 PM
          </text>
          <text className="tide-graph-label" x="288.959" y="39.09" transform="translate(-289.418 -6.728)">
            3.0 ft
          </text>
          <path className="triangle" d="M319,94.845l6,0l-3,5.155l-3,-5.155Z" />
        </g>
        <g className="tide-label-left" fontFamily="'Roboto-Light','Roboto'" fontSize="10">
          <text className="tide-graph-label" x="288.959" y="29.09" transform="translate(-6.01 52.657)">
            12:00 PM
          </text>
          <text className="tide-graph-label" x="308.28" y="39.09" transform="translate(-6.01 52.657)">
            3.0 ft
          </text>
          <path className="triangle" d="M6,12.155l-6,0l3,-5.155l3,5.155Z" />
        </g>
      </g>
    );

    let curve = nextHighCurve;
    let labels = nextHighLabels;
    
    

    return (
      <div className="card-contents">
        <svg key={this.props.locationName} className="tide-graph" viewBox="0 0 325 107" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5">
          <path className="timeline" d="M0,107l0,-107" fill="none" stroke="#ccc" strokeDasharray="2,2,0,0">
            <animateTransform 
              attributeName="transform" 
              type="translate" 
              begin="450ms" 
              dur="400ms" 
              from="0 0" 
              to="200 0" 
              fill="freeze" 
              keyTimes="0;1"
              keySplines=".17 .67 .16 .99"
            />
          </path>
          <path className="flatline" d="M0,53.5c162.794,0 162.75,0 325,0" fill="none" stroke="#5EA8FF" strokeWidth="2">
            <animate 
              attributeName="d" 
              begin="350ms" 
              dur="400ms" 
              from="M0,53.5c162.794,0 162.75,0 325,0" 
              to={curve} 
              fill="freeze" 
              keyTimes="0;1"
              keySplines=".17 .67 .16 .99"
            />
          </path>
          {labels}     
        </svg>
      </div>
    );
  }
}

export default Tide;
