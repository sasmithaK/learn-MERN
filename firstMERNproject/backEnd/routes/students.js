const router = require('express').Router();
let Student = require('../models/Student');

//create - add student...............................................
//http://localhost:8070/student/add
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);
    const grade = Number(req.body.grade);
    const gender = req.body.gender;
    const address = req.body.address; 

    const newStudent = new Student({
        name,
        age,
        grade,
        gender,
        address
})

//then -> is a js promise
newStudent.save().then(() => {
    res.json('Student added!');
    }).catch((err) => {
        console.log(err);
    });
});


//read - get all students..............................................
//http://localhost:8070/student/
router.route('/').get((req, res) => {
    Student.find().then((students) => {
        res.json(students);
    }).catch((err) => {
        console.log(err);
    });
});

//update - edit student details.........................................
//put is used to update data
//async is used to make the function asynchronous also known as a promise
//await is used with the async function to wait for the promise to be resolved
//http://localhost:8070/student/update/:id
router.route('/update/:id').put(async (req, res) => {
    let userId = req.params.id;
    //d structure -- new feature in js for extracting data from objects
    const {name, age, grade, gender, address} = req.body;

    const updateStudent = {
        name,
        age,
        grade,
        gender,
        address
    }
    //findOneAndUpdate is used when a custom ID is used
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then (() => {
        res.status(200).send({status: "User updated"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    });
});

//delete - remove student...............................................
//http://localhost:8070/student/delete/:id
router.route('/delete/:id').delete(async (req, res) => {
    let userId = req.params.id;

    await Student.findByIdAndDelete(userId).then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting user", error: err.message});
    });
});

//get one student's details...............................................
//http://localhost:8070/student/get/:id
router.route('/get/:id').get(async (req, res) => {
    let userId = req.params.id;

    const user = await Student.findById(userId).then((student) => {
        res.status(200).send({status: "User fetched", student});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with fetching user", error: err.message});
    });
});

module.exports = router;//..
