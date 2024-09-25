// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();  // Load environment variables

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Server configuration
const PORT = process.env.PORT || 3000;

// Connect to multiple databases

// Database - FinancialMng
const connectionFin = mongoose.createConnection(process.env.MONGODB_URL_Fin, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connectionFin.once('open', () => {
    console.log('Connected to the FinancialMng database (URL_Fin) successfully!');
});

// Database - VisaMng
const connectionVisa = mongoose.createConnection(process.env.MONGODB_URL_Visa, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connectionVisa.once('open', () => {
    console.log('Connected to the VisaMng database (URL_Visa) successfully!');
});

// Database - StudentMng
const connectionStud = mongoose.createConnection(process.env.MONGODB_URL_Stud, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connectionStud.once('open', () => {
    console.log('Connected to the StudentMng database (URL_Stud) successfully!');
});

// Database - UniversityMng
const connectionUni = mongoose.createConnection(process.env.MONGODB_URL_Uni, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connectionUni.once('open', () => {
    console.log('Connected to the UniversityMng database (URL_Uni) successfully!');
});

// Database - ApplicationMng
const connectionApply = mongoose.createConnection(process.env.MONGODB_URL_Apply, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connectionApply.once('open', () => {
    console.log('Connected to the ApplicationMng database (URL_Apply) successfully!');
});

// Database - ExaminationMng
const connectionExam = mongoose.createConnection(process.env.MONGODB_URL_Exam, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connectionExam.once('open', () => {
    console.log('Connected to the ExaminationMng database (URL_Exam) successfully!');
});

// Database - CourseMng
const connectionCourse = mongoose.createConnection(process.env.MONGODB_URL_Course, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
connectionCourse.once('open', () => {
    console.log('Connected to the CourseMng database (URL_Course) successfully!');
});

// Add routes
const studentRoute = require('./routes/students.js');
app.use('/student', studentRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
