const router = require('express').Router();
const Student = require('../models/Student');

// Create - add student
// POST http://localhost:3000/student/add
router.post('/add', async (req, res) => {
  const { name, age, grade, gender, address } = req.body;

  const newStudent = new Student({
    name,
    age,
    grade,
    gender,
    address,
  });

  try {
    await newStudent.save();
    res.json('Student added!');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add student' });
  }
});

// Read - get all students
// GET http://localhost:3000/student/
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Update - edit student details
// PUT http://localhost:3000/student/update/:id
router.put('/update/:id', async (req, res) => {
  const userId = req.params.id;
  const { name, age, grade, gender, address } = req.body;

  const updateStudent = {
    name,
    age,
    grade,
    gender,
    address,
  };

  try {
    await Student.findByIdAndUpdate(userId, updateStudent);
    res.status(200).json({ status: 'User updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'Error updating data', error: err.message });
  }
});

// Delete - remove student
// DELETE http://localhost:3000/student/delete/:id
router.delete('/delete/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    await Student.findByIdAndDelete(userId);
    res.status(200).json({ status: 'User deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'Error deleting user', error: err.message });
  }
});

// Get one student's details
// GET http://localhost:3000/student/get/:id
router.get('/get/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const student = await Student.findById(userId);
    res.status(200).json({ status: 'User fetched', student });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'Error fetching user', error: err.message });
  }
});

module.exports = router;
