import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import OptionsPage from './OptionsPage';
import LocationPage from './LocationPage';

class App extends Component {
  componentWillMount() {
    document.title = "Should I Shred | Local Surf Reports";
  }

  render() {
    return (
      <div className="App">
        <Route exact={true} path="/" component={OptionsPage} />
        <Route path="/:name" component={LocationPage} />
      </div>
    );
  }
}

export default App;