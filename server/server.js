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


function getBuoyData() {
  const buoysURL = 'http://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt';
  let buoyData = fetch(buoysURL)
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
          let buoyId = location.buoyId;
          let buoyMatch = res.find(buoy => buoy.stationID == buoyId);
          // console.log(buoyMatch.waveHeight);
          Location.updateMany({ buoyId: buoyId }, { $set: { 
            time: new Date().toISOString(),
            swellHeight: buoyMatch.waveHeight,
            swellDirection: buoyMatch.dominantPeriodWaveDirection,
            swellPeriod: buoyMatch.wavePeriod
          } }, function(err) {
            if(err) console.log(err);
          });
        })
      })
    })
}

updateDB();
setInterval(updateDB, 60000);


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