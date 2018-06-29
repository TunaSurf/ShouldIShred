import React, { Component } from 'react';
import moment from 'moment';
import './Tide.css';

class Tide extends Component {
  render() {
    const timeBetweenTides = 374;
    let timeSincePrevTide = Math.random() * (timeBetweenTides - 1);
    let timeTilNextTide = timeBetweenTides - timeSincePrevTide;
    let prevTideTime = moment().subtract(timeSincePrevTide, 'minutes').format('h:mm a');
    let nextTideTime = moment().add(timeTilNextTide, 'minutes').format('h:mm a');
    let ratioSincePrevTide = timeSincePrevTide / timeBetweenTides;
    let timelineDistance = (ratioSincePrevTide * 325) + " 0";
    let highDepth = Math.round(10 * (Math.random() * .8 + 3.1)) / 10;
    let lowDepth = Math.round(10 * (Math.random() * .5 + 0.1)) / 10;
    const nextHighCurve = "M0,105c162.794,0 162.75,-103 325,-103";
    const nextLowCurve = "M0,2c162.794,0 162.75,103 325,103";
    let nextHighLabels = (
      <g className="next-high">
        <g className="tide-label-right" fontFamily="'Overpass-Light','Overpass'" fontSize="10">
          <text className="tide-graph-label" x="289.959" y="29.09" transform="translate(-6.01 -6.728)">
            {nextTideTime}
          </text>
          <text className="tide-graph-label tide-depth" x="306.28" y="39.09" transform="translate(-6.01 -6.728)">
            {highDepth}ft
          </text>
          <path className="triangle" d="M325,12.155l-6,0l3,-5.155l3,5.155Z" />
        </g>
        <g className="tide-label-left" fontFamily="'Overpass-Light','Overpass'" fontSize="10">
          <text className="tide-graph-label" x="288.959" y="29.09" transform="translate(-289.418 52.657)">
            {prevTideTime}
          </text>
          <text className="tide-graph-label tide-depth" x="288.959" y="39.09" transform="translate(-289.418 52.657)">
            {lowDepth}ft
          </text>
          <path className="triangle" d="M0,94.845l6,0l-3,5.155l-3,-5.155Z" />
        </g>
      </g>
    );
    let nextLowLabels = (
      <g className="next-low">
        <g className="tide-label-right" fontFamily="'Overpass-Light','Overpass'" fontSize="10">
          <text className="tide-graph-label" x="288.959" y="29.09" transform="translate(-289.418 -6.728)">
            {prevTideTime}
          </text>
          <text className="tide-graph-label tide-depth" x="288.959" y="39.09" transform="translate(-289.418 -6.728)">
            {highDepth}ft
          </text>
          <path className="triangle" d="M319,94.845l6,0l-3,5.155l-3,-5.155Z" />
        </g>
        <g className="tide-label-left" fontFamily="'Overpass-Light','Overpass'" fontSize="10">
          <text className="tide-graph-label" x="288.959" y="29.09" transform="translate(-6.01 52.657)">
            {nextTideTime}
          </text>
          <text className="tide-graph-label tide-depth" x="308.28" y="39.09" transform="translate(-6.01 52.657)">
            {lowDepth}ft
          </text>
          <path className="triangle" d="M6,12.155l-6,0l3,-5.155l3,5.155Z" />
        </g>
      </g>
    );

    let highOrLow = Math.round(Math.random());
    let curve = highOrLow ? nextHighCurve : nextLowCurve;
    let labels = highOrLow ? nextHighLabels : nextLowLabels;
    
    

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
              to={timelineDistance} 
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
