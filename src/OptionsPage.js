import React, { Component } from 'react';
import './OptionsPage.css';
import Options from './Options';

class OptionsPage extends Component {
  render() {
    return (
      <section className="options-page">
        <h1>Should I Shred</h1>
        <p>Local surf reports</p>
        <Options />
        <p>About Should I Shred</p>
      </section>
    );
  }
}

export default OptionsPage;
