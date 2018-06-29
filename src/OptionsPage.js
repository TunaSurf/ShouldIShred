import React, { Component } from 'react';
import './OptionsPage.css';
import Options from './Options';

class OptionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAbout: false
    }
    this.handleAboutClick = this.handleAboutClick.bind(this);
  }

  handleAboutClick() {
    this.setState(prevState => ({ showAbout: !prevState.showAbout }));
  }

  render() {
    let about = this.state.showAbout ? <div className="about">Swell height and weather data gathered from the nearest <a href="https://www.ndbc.noaa.gov">NOAA</a> provided buoy. Created by <a href="https://ChaseBurgess.com">Chase Burgess</a></div> : null;

    return (
      <section className="options-page">
        <h1 className="logo-font">Should I Shred</h1>
        <p className="option-hint">Local surf reports</p>
        <Options />
        <p className="about-click" onClick={this.handleAboutClick}>About Should I Shred</p>
        {about}
      </section>
    );
  }
}

export default OptionsPage;
