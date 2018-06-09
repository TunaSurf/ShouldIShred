import React, { Component } from 'react';
import './Sidebar.css';
import Options from './Options';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('pointerdown', this.handleClickOutside);
    document.addEventListener('touchstart', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('pointerdown', this.handleClickOutside);
    document.removeEventListener('touchstart', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.showSidebar) {
      this.props.closeSidebar();
    }
  }

  render() {
    return (
      <section 
        className={this.props.showSidebar ? "sidebar show-sidebar" : "sidebar"} 
        ref={this.setWrapperRef}
      >
        <Options setLocation={this.props.setLocation} />
      </section>
    );
  }
}

export default Sidebar;
