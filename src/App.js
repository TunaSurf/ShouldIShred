import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import CardList from './CardList';
import OptionsPage from './OptionsPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      showSidebar: false
    }
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/locations');
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
      <div className="App">
        <Navbar handleOpenSidebar={this.handleOpenSidebar} />
        <Sidebar showSidebar={this.state.showSidebar} closeSidebar={this.handleCloseSidebar} />
        <CardList />
        {this.state.response}
      </div>
    );
  }
}

export default App;
