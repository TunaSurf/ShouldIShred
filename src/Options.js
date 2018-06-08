import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Options.css';
import { default as Locations } from './LocationList';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      location: null
    }
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    // this.postLocation = this.postLocation.bind(this);
  }

  handleRegionChange(e) {
    const region = e.target.value;
    this.setState({ region, location: null});
  };

  handleLocationChange(e) {
    const location = e.target.value;
    this.setState({ location });
  }

  submitHandler(event) {
    event.preventDefault();
    if(this.state.location) this.props.history.push(this.state.location);
  }

  // postLocation() {
  //   if(this.state.location) {
  //     console.log(this.state.location);
  //     fetch('/api/locations', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         userLocation: this.state.location
  //       })
  //     });
  //   };
  // }

  render() {
    let locationSelect = (
      <option value="selectRegion" disabled>Select a region</option>
    )
    if(this.state.region) {
      locationSelect = Locations[this.state.region].map((location, i) => {
        let str = location.replace(/\s+/g, '-').toLowerCase();
        let area = location.startsWith('-');
        let option = area ? <option value="area" key={str} disabled>{location.substr(1)}</option> : <option value={str} key={str}>{location}</option>;
        return option;
      });
    }

    return (
      <form onSubmit={this.submitHandler}>
        <select 
          name="region-select" 
          id="region-select" 
          onChange={this.handleRegionChange} 
          value={this.state.region || ''}
        >
          <option value="" disabled>Region</option>
          <option value="northEast">North East</option>
          <option value="midAtlantic">Mid-Atlantic</option>
          <option value="southEast">South East</option>
          <option value="eastFlorida">East Florida</option>
          <option value="westFlorida">West Florida</option>
          <option value="texas">Texas</option>
          <option value="northWest">North West</option>
          <option value="northernCalifornia">Northern California</option>
          <option value="southernCalifornia">Southern California</option>
          <option value="hawaii">Hawaii</option>
        </select>
        <select 
          name="location-select" 
          id="location-select" 
          onChange={this.handleLocationChange} 
          value={this.state.location || ''}
        >
          <option value="" disabled>Location</option>
          {locationSelect}
        </select>
        <button onClick={this.postLocation}>Go</button>
      </form>
    );
  }
}

export default withRouter(Options);
