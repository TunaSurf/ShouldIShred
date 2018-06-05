const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const locationSchema = new Schema({
  location: String,
  swellHeight: Number,
  swellDirection: Number,
  swellPeriod: Number,
  windSpeed: Number,
  windDirection: Number,
  previousTide: Date,
  nextTide: Date
})

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;