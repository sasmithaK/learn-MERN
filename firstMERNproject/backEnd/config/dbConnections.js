// Import the mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Import database configuration from the JSON file
const dbConfig = require('./dbConfig.json');

// Define connection options for mongoose to handle deprecation warnings
const connectionOptions = {
  useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
  useUnifiedTopology: true, // Use the unified topology layer for server discovery and monitoring
};

// Object to store all active database connections
const dbConnections = {};

// Loop through each database configuration defined in dbConfig
Object.keys(dbConfig.databases).forEach((key) => {
  // Get the details of the current database
  const dbDetails = dbConfig.databases[key];
  
  // Create a connection for the current database using mongoose
  const connection = mongoose.createConnection(dbDetails.url, connectionOptions);

  // Event listener for a successful connection
  connection.once('open', () => {
    console.log(`${dbDetails.name} connection success!`); // Log a success message to the console
  });

  // Event listener for connection errors
  connection.on('error', (err) => {
    console.error(`${dbDetails.name} connection error:`, err); // Log the error message to the console
    process.exit(1); // Exit the process if there’s an error connecting to the database
  });

  // Store the connection in the dbConnections object using the database key
  dbConnections[key] = connection;
});

// Export the dbConnections object for use in other parts of the application
module.exports = dbConnections;
