const express     = require('express'),
      mongoose    = require('mongoose'),
      fetch       = require('node-fetch'),
      buoy        = require('buoy-js'),
      url         = 'mongodb://localhost/shred_db',
      Location    = require('./models/location.js');

const app         = express();

mongoose.Promise = global.Promise;
mongoose.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
  }
});
app.use(express.static(__dirname + "/public"));


async function getBuoyData() {
  const buoysURL = 'http://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt';
  let buoyData = await fetch(buoysURL)
    .then(res => res.text())
    .then(body => buoy.default.Buoy.lastestObservation(body))
    .catch(err => console.error(err));

  return buoyData
}

function updateDB() {
  getBuoyData()
    .then(res => {
      Location.find({}, function (err, locations) {
        locations.forEach(location => {
          let waveId = location.waveId;
          let windId = location.windId;
          let waveBuoyMatch = res.find(buoy => buoy.stationID == waveId);
          let windBuoyMatch = res.find(buoy => buoy.stationID == windId);
          console.log(waveBuoyMatch);
          Location.updateMany({ waveId: waveId }, { $set: { 
            time: new Date().toISOString(),
            swellHeight: waveBuoyMatch ? waveBuoyMatch.waveHeight : 0,
            swellDirection: waveBuoyMatch ? waveBuoyMatch.dominantPeriodWaveDirection : 0,
            swellCompass: waveBuoyMatch ? waveBuoyMatch.dominantPeriodWaveDirectionCompass : "N",
            swellPeriod: waveBuoyMatch ? waveBuoyMatch.wavePeriod : 0,
            windSpeed: waveBuoyMatch ? windBuoyMatch.windSpeed : 0,
            windDirection: waveBuoyMatch ? windBuoyMatch.windDirection : 0,
            windCompass: waveBuoyMatch ? windBuoyMatch.windDirectionCompass : "N",
            airTemp: waveBuoyMatch ? windBuoyMatch.airTemp : 0,
            waterTemp: waveBuoyMatch ? waveBuoyMatch.waterTemp : 0
          } }, function(err) {
            if(err) console.log(err);
          });
        })
      })
    })
}

updateDB();
setInterval(updateDB, (5 * 60 * 1000));


app.get('/:location', function (req, res) {
  Location.find({"key": req.params.location}, function(err, location) {
    if(err) {
      console.log(err);
    } else {
      console.log(location[0]);
      res.json(location[0]);
    }
  });
});

// app.update('/:location', function(req, res) {

// })

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Server has started");
});