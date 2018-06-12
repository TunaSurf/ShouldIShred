import React, { Component } from 'react';
import './LocationPage.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CardList from './CardList';

class LocationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlPath: window.location.pathname,
      userLocation: '',
      locationName: '',
      swellHeight: 0,
      swellDirection: 0,
      swellPeriod: 0,
      windSpeed: 0,
      windDirection: 0,
      previousTide: 0,
      nextTide: 0,
      showSidebar: false
    }
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
    this.handleSetLocation = this.handleSetLocation.bind(this);
  }

  componentDidMount() {
    this.setFromApi();
  }

  setFromApi() {
    this.callApi()
      .then(res => this.setState({
        locationName: res.locationName,
        swellHeight: res.swellHeight,
        swellDirection: res.swellDirection,
        swellPeriod: res.swellPeriod,
        windSpeed: res.windSpeed,
        windDirection: res.windDirection,
        previousTide: res.prevTide,
        nextTide: res.nextTide
      }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch(this.state.urlPath);
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

  handleSetLocation() {
    this.handleCloseSidebar();
    this.setState({ urlPath: window.location.pathname });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.urlPath !== prevProps.location.pathname) {
  //     this.setFromApi();
  //     console.log(prevProps.location.pathname);
  //   }
  // }

  render() {
    return (
      <div>
        <Navbar
          locationName={this.state.locationName}
          handleOpenSidebar={this.handleOpenSidebar}
        />
        <Sidebar
          showSidebar={this.state.showSidebar}
          closeSidebar={this.handleCloseSidebar}
          setLocation={this.handleSetLocation}
        />
        <CardList
          swellHeight={this.state.swellHeight}
          swellDirection={this.state.swellDirection}
          swellPeriod={this.state.swellPeriod}
          windSpeed={this.state.windSpeed}
          windDirection={this.state.windDirection}
          previousTide={this.state.prevTide}
          nextTide={this.state.nextTide}
        />
      </div>
    );
  }
}

export default LocationPage;
