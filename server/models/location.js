const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const locationSchema = new Schema({
  time: Date,
  key: String,
  waveId: Number,
  windId: Mixed,
  locationName: String,
  swellHeight: Number,
  swellDirection: Number,
  swellCompass: String,
  swellPeriod: Number,
  windSpeed: Number,
  windDirection: Number,
  previousTide: Date,
  nextTide: Date,
  shoreDirection: Number
})

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;