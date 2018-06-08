import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
      locationData: '',
      showSidebar: false
    }
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ locationData: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    let path = window.location.pathname;
    const response = await fetch(path);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log("hello");
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
      <div className="App">
        <Navbar 
          location={this.state.userLocation} 
          handleOpenSidebar={this.handleOpenSidebar} 
        />
        <Sidebar 
          showSidebar={this.state.showSidebar} 
          closeSidebar={this.handleCloseSidebar} 
        />
        <Route exact={true} path="/" component={CardList} />
        <Route path="/:location" component={CardList} />
        {this.state.response}
      </div>
    );
  }
}

export default App;
