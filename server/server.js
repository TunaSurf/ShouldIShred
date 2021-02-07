const express     = require('express'),
      mongoose    = require('mongoose'),
      fetch       = require('node-fetch'),
      buoy        = require('buoy-js'),
      Location    = require('./models/location.js'),
      initDb      = require('./utilities/initDb.js');
      
const app = express();

const url = `mongodb://mongo:27017/shred`;

mongoose.Promise = global.Promise;
mongoose.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .catch(err => console.log('Unable to connect to the mongoDB server. Error:', err));

app.use(express.static(__dirname + "/public"));


async function getBuoyData() {
  const buoysURL = 'http://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt';
  let buoyData = await fetch(buoysURL)
    .then(res => res.text())
    .then(body => buoy.default.Buoy.lastestObservation(body))
    .catch(err => console.error(err));

  return buoyData
}


//GET TIDE DATA FOR VIRGINIA BEACH (BUOY IS LOCATED AT HRBT)
//
// async function getTideData() {
//   const tideURL = 'https://tidesandcurrents.noaa.gov/api/datagetter?begin_date=20180628&range=48&station=8638901&product=predictions&datum=MLLW&units=english&time_zone=gmt&application=ports_screen&format=csv';
//   let tideData = await fetch(tideURL)
//     .then(res => res.text())
//     .then(body => buoy.default.Tide.parse(body))
//     .catch(err => console.error(err));

//   let testDate = new Date("2018-06-29 03:56 GMT+0000");
//   let tideCurrent = buoy.default.Tide.getNextHighOrLow(tideData, testDate);
//   console.log(tideCurrent);
// }


function updateDB() {
  getBuoyData()
    .then(res => {
      if(res) {
        Location.find({}, function (err, locations) {
          if (locations.length) {
            locations.forEach(location => {
              let waveId = location.waveId;
              let windId = location.windId;
              let waveBuoyMatch = res.find(buoy => buoy.stationID == waveId);
              let windBuoyMatch = res.find(buoy => buoy.stationID == windId);
              //same buoy used for multiple beaches sometimes, therefore must use updateMany
              Location.updateMany({ waveId: waveId }, { $set: { 
                time: new Date().toISOString(),
                swellHeight: waveBuoyMatch ? waveBuoyMatch.waveHeight : 0,
                swellDirection: waveBuoyMatch ? waveBuoyMatch.dominantPeriodWaveDirection : 0,
                swellCompass: waveBuoyMatch ? waveBuoyMatch.dominantPeriodWaveDirectionCompass : "N",
                swellPeriod: waveBuoyMatch ? waveBuoyMatch.wavePeriod : 0,
                windSpeed: windBuoyMatch ? windBuoyMatch.windSpeed : 0,
                windDirection: windBuoyMatch ? windBuoyMatch.windDirection : 0,
                windCompass: windBuoyMatch ? windBuoyMatch.windDirectionCompass : "N",
                airTemp: windBuoyMatch ? windBuoyMatch.airTemp : 0,
                waterTemp: waveBuoyMatch ? waveBuoyMatch.waterTemp : 0
              } }, function(err) {
                if(err) console.log(err);
              });
            }, function (err) {
              if (err) console.log(err);
            });
          } else {
            console.log("Running initDb")
            initDb();
          }
        })
      }
    })
    .catch(err => console.log(err));
}

updateDB();
setInterval(updateDB, (5 * 60 * 1000));


app.get('/:location', function (req, res) {
  Location.find({"key": req.params.location}, function(err, location) {
    if(err) {
      console.log(err);
    } else {
      res.json(location[0]);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server has started");
});