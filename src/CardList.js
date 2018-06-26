import React, { Component } from 'react';
import './CardList.css';
import Card from './Card';
import Swell from './Swell';
import Wind from './Wind';
import Tide from './Tide';
import Gear from './Gear';

class CardList extends Component {
  render() {
    return (
      <div className="card-container">
        <Card cardName="Swell">
          <Swell
            swellHeight={this.props.swellHeight}
            swellDirection={this.props.swellDirection}
            swellCompass={this.props.swellCompass}
            swellPeriod={this.props.swellPeriod}
          />
        </Card>
        <Card cardName="Wind">
          <Wind
            windSpeed={this.props.windSpeed}
            windDirection={this.props.windDirection}
            windCompass={this.props.windCompass}
            texture={this.props.texture}
          />
        </Card>
        <Card cardName="Tide">
          <Tide
            previousTide={this.props.prevTide}
            nextTide={this.props.nextTide} 
          />
        </Card>
        <Card cardName="Gear">
          <Gear
            previousTide={this.props.prevTide}
            nextTide={this.props.nextTide}
          />
        </Card>
      </div>
    );
  }
}

export default CardList;