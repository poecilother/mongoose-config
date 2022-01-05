const mongoose = require('mongoose');

const example2Schema = new mongoose.Schema({
  example: {
      type: String,
      required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Example2', example2Schema);
