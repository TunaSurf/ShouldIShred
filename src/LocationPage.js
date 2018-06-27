import React, { Component } from 'react';
import './LocationPage.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CardList from './CardList';

class LocationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {
        locationName: '',
        swellHeight: 0,
        swellDirection: 0,
        swellCompass: 'N',
        swellPeriod: 0,
        windSpeed: 0,
        windDirection: 0,
        windCompass: 'N',
        previousTide: 0,
        nextTide: 0,
        shoreDirection: 0,
        airTemp: 0,
        waterTemp: 0,
        timeUpdated: null
      },
      showSidebar: false
    }
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  componentDidMount() {
    this.setFromApi(this.props.match.url);
  }

  componentWillReceiveProps(newProps) {
    this.handleCloseSidebar();
    this.setFromApi(newProps.match.url);
  }

  setFromApi(location) {
    this.callApi(location)
      .then(res => this.setState({ locationData: res }))
      .catch(err => console.log(err));
  }

  callApi = async (location) => {
    const response = await fetch(location);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  handleOpenSidebar() {
    this.setState({ showSidebar: true });
  }

  handleCloseSidebar() {
    this.setState({ showSidebar: false });
  }

  render() {
    let swellHeight = Math.round(this.state.locationData.swellHeight * 3.28 * 10) / 10;
    let windSpeed = Math.round(this.state.locationData.windSpeed * 1.15);
    let windAngle = this.state.locationData.windDirection;
    //adjust shore angle by 180deg to align with wind vector
    let shoreAngle = (this.state.locationData.shoreDirection + 180) % 360;
    //get absolute value of the difference between the wind and shore angles
    let angleDiff = Math.abs(shoreAngle - windAngle);
    let texture = "Choppy";
    if (angleDiff <= 20) {
      texture = "Clean";
    } else if (angleDiff <= 90) {
      texture = "Bumpy";
    }

    return (
      <div>
        <Navbar
          locationName={this.state.locationData.locationName}
          swellHeight={swellHeight}
          texture={texture}
          handleOpenSidebar={this.handleOpenSidebar}
        />
        <Sidebar
          showSidebar={this.state.showSidebar}
          closeSidebar={this.handleCloseSidebar}
        />
        <CardList
          locationName={this.state.locationData.locationName}
          swellHeight={swellHeight}
          swellDirection={this.state.locationData.swellDirection}
          swellCompass={this.state.locationData.swellCompass}
          swellPeriod={this.state.locationData.swellPeriod}
          windSpeed={windSpeed}
          windDirection={this.state.locationData.windDirection}
          windCompass={this.state.locationData.windCompass}
          texture={texture}
          previousTide={this.state.locationData.prevTide}
          nextTide={this.state.locationData.nextTide}
          airTemp={this.state.locationData.airTemp}
          waterTemp={this.state.locationData.waterTemp}
        />
      </div>
    );
  }
}

export default LocationPage;
