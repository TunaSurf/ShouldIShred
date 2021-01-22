import React, { Component } from 'react';
import './CardList.css';
import Card from './Card';
import Swell from './Swell';
import Wind from './Conditions';
import Tide from './Tide';

class CardList extends Component {
  render() {
    return (
      <div className="card-container">
        <Card  
          cardName="Swell"
          locationName={this.props.locationName}
        >
          <Swell
            swellHeight={this.props.swellHeight}
            swellDirection={this.props.swellDirection}
            swellCompass={this.props.swellCompass}
            swellPeriod={this.props.swellPeriod}
          />
        </Card>
        <Card 
          cardName="Conditions"
          locationName={this.props.locationName}
        >
          <Wind
            windSpeed={this.props.windSpeed}
            windDirection={this.props.windDirection}
            windCompass={this.props.windCompass}
            texture={this.props.texture}
            airTemp={this.props.airTemp}
            waterTemp={this.props.waterTemp}
          />
        </Card>
        <Card 
          cardName="Tide"
          locationName={this.props.locationName}
        >
          <Tide
            locationName={this.props.locationName}
            previousTide={this.props.prevTide}
            nextTide={this.props.nextTide} 
          />
        </Card>
      </div>
    );
  }
}

export default CardList;