import React, { Component } from 'react';
import './OptionsPage.css';
import Options from './Options';

class OptionsPage extends Component {
  render() {
    return (
      <section className="options-page">
        <h1>Should I Shred</h1>
        <h2>Local surf reports</h2>
        <Options />
        <span>About Should I Shred</span>
      </section>
    );
  }
}

export default OptionsPage;
