const mongoose = require('mongoose');

const URL = 'giveyourmongouri';

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongo connection SuccessFull');
});

connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

