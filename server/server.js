const express     = require('express'),
      bodyParser  = require('body-parser');
      mongoose    = require('mongoose'),
      url = 'mongodb://localhost/shred_db',
      Location    = require('./models/location.js');

const app         = express();

// const locationData = {
//   locationName: "Virginia Beach",
//   swellHeight: 3.8,
//   swellDirection: 185,
//   swellPeriod: 11.2,
//   windSpeed: 8,
//   windDirection: 65,
//   prevTide: 1200,
//   nextTide: 1800 
// }

// const elizabethData = {
//   locationName: "Cape Elizabeth",
//   swellHeight: 1.2,
//   swellDirection: 185,
//   swellPeriod: 11.2,
//   windSpeed: 8,
//   windDirection: 65,
//   prevTide: 1200,
//   nextTide: 1800
// }

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


app.get('/', function (req, res) {
  res.json(locationData);
});

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

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Server has started");
});