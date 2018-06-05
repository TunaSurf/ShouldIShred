const express     = require('express'),
      bodyParser  = require('body-parser'),
      mongoose    = require('mongoose'),
      Location    = require('./models/location.js'),
      url         = 'mongodb://*****:*****@ds249530.mlab.com:49530/shred_locations';

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

app.get('/', function (req, res) {
  res.json('you did it');
});

app.get('/api/locations', function (req, res) {
  Location.find({}).then(eachOne => {
    res.json(eachOne);
  })
})

app.post('/api/locations', function (req, res) {
  // Location.create({
  //   location: req.body.location
  // }).then(location => {
  //   res.json(location)
  // });
  console.log(req.body);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Server has started");
});