const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  UserName: String,
  Designation: String,
  date: Date,
  checkin: Date,
  checkout: Date,
  checkinStatus: {
    required: false,
    type: Boolean,
  },
  // workingHours: {
  // //   hours: {
  // //     type: Number,
  // //     default: 0,
  // //   },
  // //   minutes: {
  // //     type: Number,
  // //     default: 0,
  // //   },
  // // },
  // startTime: Date, // New field for start time
  // endTime: Date,   // New field for end time
  created_at: {
    type: Date,
    default: Date.now,
  },
// },
});

var Signup = (module.exports = mongoose.model('Entry', Schema));
module.exports.get = function (callback, limit) {
  Signup.find(callback).limit(limit);
};
