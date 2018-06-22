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
    return (
      <div>
        <Navbar
          locationName={this.state.locationData.locationName}
          handleOpenSidebar={this.handleOpenSidebar}
        />
        <Sidebar
          showSidebar={this.state.showSidebar}
          closeSidebar={this.handleCloseSidebar}
        />
        <CardList
          swellHeight={this.state.locationData.swellHeight}
          swellDirection={this.state.locationData.swellDirection}
          swellCompass={this.state.locationData.swellCompass}
          swellPeriod={this.state.locationData.swellPeriod}
          windSpeed={this.state.locationData.windSpeed}
          windDirection={this.state.locationData.windDirection}
          previousTide={this.state.locationData.prevTide}
          nextTide={this.state.locationData.nextTide}
          shoreDirection={this.state.locationData.shoreDirection}
        />
      </div>
    );
  }
}

export default LocationPage;
