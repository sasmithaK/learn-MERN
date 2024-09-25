const mongoose = require('mongoose');
const dbConfig = require('./dbConfig.json');

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConnections = {};

Object.keys(dbConfig.databases).forEach((key) => {
  const dbDetails = dbConfig.databases[key];
  
  const connection = mongoose.createConnection(dbDetails.url, connectionOptions);

  connection.once('open', () => {
    console.log(`${dbDetails.name} connection success!`);
  });

  connection.on('error', (err) => {
    console.error(`${dbDetails.name} connection error:`, err);
    process.exit(1); // Exit the process if there’s an error connecting to the database
  });

  dbConnections[key] = connection;
});

module.exports = dbConnections;
