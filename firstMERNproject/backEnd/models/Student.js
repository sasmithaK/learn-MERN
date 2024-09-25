const mongoose = require('mongoose');
const dbConnections = require('../config/dbConnections'); // Import database connections

const Schema = mongoose.Schema;

// Define the student schema
const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Use the student database connection to create the model
const Student = dbConnections['student'].model('Student', studentSchema);

module.exports = Student;
