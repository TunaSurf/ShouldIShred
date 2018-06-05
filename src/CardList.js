import React, { Component } from 'react';
import './CardList.css';
import Card from './Card';
import Swell from './Swell';
import Wind from './Wind';
import Tide from './Tide';

class CardList extends Component {
  render() {
    return (
      <div className="card-container">
        <Card cardName="Swell">
          <Swell />
        </Card>
        <Card cardName="Wind">
          <Wind />
        </Card>
        <Card cardName="Tide">
          <Tide />
        </Card>
      </div>
    );
  }
}

export default CardList;