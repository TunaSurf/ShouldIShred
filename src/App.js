import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CardList from './CardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    //gets stuck if path is at '/'
    let path = window.location.pathname === "/" ? '/placeholder' : window.location.pathname;
    console.log(path);
    const response = await fetch(path);
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
    this.callApi();
  }
  

  render() {
    return (
      <div className="App">
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

export default App;
