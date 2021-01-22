import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    let cardClass = `card ${this.props.cardName}-card`
    return (
      <section key ={this.props.locationName} className={cardClass}>
        <div className="card-name">{this.props.cardName}</div>
        {this.props.children}
      </section>
    );
  }
}

export default Card;
