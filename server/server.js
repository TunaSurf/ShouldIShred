const express     = require('express'),
      bodyParser  = require('body-parser');
      mongoose    = require('mongoose'),
      fetch       = require('node-fetch'),
      buoy        = require('buoy-js'),
      url         = 'mongodb://localhost/shred_db',
      Location    = require('./models/location.js');

// import Buoy from 'buoy-js';
// import Tide from 'buoy-js';

const app         = express();

mongoose.Promise = global.Promise;
mongoose.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
  }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

function setFromApi(buoysURL) {
  this.callApi(buoysURL)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

callApi = async (buoys) => {
  const response = await fetch(buoys);
  const body = await response.text();

  if (response.status !== 200) throw Error(body.message);
  return body;
}

app.get('/:location', function (req, res) {
  const buoysURL = 'http://www.ndbc.noaa.gov/data/latest_obs/latest_obs.txt';
  
  setFromApi(buoysURL);

  


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