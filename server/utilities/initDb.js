const Location = require('../models/location.js');
const LOCATIONS = require('./constants/locationList.js');

function initDb() {

  LOCATIONS.forEach(function(location) {
    new Location({
      time: new Date().toISOString(),
      key: location.name.replace(/\s+/g, '-').toLowerCase(),
      waveId: location.waveId,
      windId: location.windId,
      locationName: location.name,
      swellHeight: 3,
      swellDirection: 3,
      swellCompass: 'ESE',
      swellPeriod: 3,
      windSpeed: 3,
      windDirection: 3,
      windCompass: 'NW',
      airTemp: 75,
      waterTemp: 65,
      previousTide: new Date().toISOString(),
      nextTide: new Date().toISOString(),
      shoreDirection: location.shoreDirection
    })
    .save(function(err, location) {
      if(err) {
        console.log(err);
      } else {
        console.log('location added to db:', location);
      }
    })
  });
}

module.exports = initDb;