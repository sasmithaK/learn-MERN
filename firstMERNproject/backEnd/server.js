const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // Use an available port or 3000 on local server

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const studentRoute = require('./routes/students');
const uniRoute = require('./routes/route');

// Use routes
app.use('/student', studentRoute);
app.use('/posts', uniRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Failed to start server:', err);
});
