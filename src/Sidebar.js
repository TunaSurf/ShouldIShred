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
            <Options setLocation={this.props.setLocation} />
          </div>  
        </section>
      </div>  
    );
  }
}

export default Sidebar;
