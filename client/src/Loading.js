import React, { Component } from 'react';
import './Loading.css';


class Loading extends Component {
  render() {
    return (
      <section className="load-container">
        <svg className="load-icon" viewBox="0 0 81 81" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path className="load-path" d="M2.175 29.118c1.015-.804 40.533-25.746 52.464 7.499 0 0-3.317-5.788-11.129-5.981-7.811-.194-11.208 6.138-11.184 9.441.024 3.303 1.174 22.788 45.127 15.718C71.458 70.291 57.162 80.5 40.5 80.5c-22.077 0-40-17.923-40-40 0-3.925.566-7.718 1.653-11.32l.022-.085C7.073 12.563 22.389.5 40.5.5c22.077 0 40 17.923 40 40 0 4.505-.746 8.837-2.126 12.855" fill="none" stroke="#5ea8ff" />
        </svg>
      </section>
    );
  }
}

export default Loading;
