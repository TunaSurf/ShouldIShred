import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    let swellHeight = this.props.swellHeight;
    let texture = this.props.texture;
    let surfStatus;
    let statusStyle;
    const perfect = { background: "#F7B974" };
    const good = { background: "#56FFA4" };
    const ok = { background: "#80E1FF" };
    const bad = { background: "#F39694" };
    const flat = { background: "#C0B1B1" };

    if(swellHeight < 1) {
      surfStatus = "Flat";
      statusStyle = flat;
    } else if(swellHeight < 3) {
      if(texture === "Clean") {
        surfStatus = "Small but clean, grab the log";
        statusStyle = ok;
      } else if(texture === "Bumpy") {
        surfStatus = "Small with a few extra bumps";
        statusStyle = ok;
      } else if(texture === "Choppy") {
        surfStatus = "No go";
        statusStyle = bad;
      }
    } else if (swellHeight < 5) {
      if (texture === "Clean") {
        surfStatus = "It's on! Go shred";
        statusStyle = good;
      } else if (texture === "Bumpy") {
        surfStatus = "Bit of texture, but get out there";
        statusStyle = ok;
      } else if (texture === "Choppy") {
        surfStatus = "Choppy";
        statusStyle = bad;
      }
    } else {
      if (texture === "Clean") {
        surfStatus = "It's pumping! Go shredd";
        statusStyle = perfect;
      } else if (texture === "Bumpy") {
        surfStatus = "Bit of texture, but get out there";
        statusStyle = good;
      } else if (texture === "Choppy") {
        surfStatus = "Big and messy";
        statusStyle = bad;
      }
    }

    return (
      <header>
        <div className="navbar">
          <div className="nav-left">
            <button type="button" onClick={this.props.handleOpenSidebar}>
              <svg viewBox="0 0 44 23" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.4142">
                <g className="menu">  
                  <path d="M0 20h44v3H0z" />
                  <path d="M0 10h44v3H0z" />
                  <path d="M0 0h44v3H0z" />
                </g>
              </svg>
              <span className="logo-font">Shred</span></button>
          </div>

          <div className="nav-right">
            <span>{this.props.locationName}</span>
          </div>
        </div>
        
        <div key={this.props.locationName} className="surf-status" style={statusStyle}>
          <span>{surfStatus}</span>
        </div>
      </header>
    );
  }
}

export default Navbar;
