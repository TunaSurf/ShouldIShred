import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <section className="card">
        <div className="card-name">{this.props.cardName}</div>
        {this.props.children}
      </section>
    );
  }
}

export default Card;
