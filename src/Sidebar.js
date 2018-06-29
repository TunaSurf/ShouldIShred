import React, { Component } from 'react';
import './Sidebar.css';
import Options from './Options';

class Sidebar extends Component {
  handleClickInside(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div 
        className={this.props.showSidebar ? "sidebar-overlay show-sidebar" : "sidebar-overlay"}
        onClick={this.props.closeSidebar}
      >
        <section 
          className={this.props.showSidebar ? "sidebar show-sidebar" : "sidebar"} 
          onClick={this.handleClickInside}
        >
          <div className={this.props.showSidebar ? "sidebar-options show-sidebar" : "sidebar-options"} >
            <h3 className="logo-font">Shred</h3>
            <p className="option-hint">Choose Location</p>
            <Options setLocation={this.props.setLocation} />
          </div>  
        </section>
      </div>  
    );
  }
}

export default Sidebar;
