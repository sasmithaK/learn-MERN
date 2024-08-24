// usering nodemon npm package to restart the server every time the server.js is changed/updated
//import packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('dotenv').config();


//server configuration
const PORT = process.env.PORT || 3000; //use an available port or use 8070 on the local server

app.use(cors());
app.use(bodyParser.json());

//connect to the database
const URL = process.env.MONGODB_URL;
mongoose.connect(URL);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection success!');
}); //() => arrow function is used to define a function();

const studentRoute = require('./routes/students.js');
app.use('/student', studentRoute);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

