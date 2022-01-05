const mongoose = require('mongoose');

const example1Schema = new mongoose.Schema({
  example: {
      type: String,
      required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Example1', example1Schema);
