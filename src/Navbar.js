import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="navbar">
          <div className="nav-left">
            <button type="button" onClick={this.props.handleOpenSidebar}>+</button>
            <span className="site-name">Shred</span>
          </div>

          <div className="nav-right">
            <span>Virginia Beach</span>
          </div>
        </div>
        
        <div className="surf-status">
          <span>It's on! Go Shred</span>
        </div>
      </header>
    );
  }
}

export default Navbar;
