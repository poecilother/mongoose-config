const mongoose = require('mongoose');

module.exports = {
  connect: () => {
    mongoose.connect(`mongodb://${ process.env.MONGODB_SERVER }/${ process.env.MONGODB_NAME }`, {
      useNewUrlParser: true,
      useCreateIndex:true,
      useUnifiedTopology: true,
      user: process.env.MONGODB_USER,
      pass: process.env.MONGODB_PASSWORD
    })
    .then(() => {
      // models
      require('../../models/example1');
      require('../../models/example2');

      console.log(`Connection to ${ process.env.MONGODB_NAME } has been established successfully.`);
    })
    .catch(err => {
      console.error('MongoDB connection error: ', err);
    });        
  },
  disconnect: () => {
    mongoose.disconnect();
  },
};