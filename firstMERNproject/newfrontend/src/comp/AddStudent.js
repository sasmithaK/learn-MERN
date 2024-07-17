import React, { useState } from "react";
import axios from "axios"; //use axios to send data to the backend

export default function AddStudent() {

    //get the data from the form
    const [name, setName] = useState('');
    const [age, setAge] = useState(''); 
    const [grade, setGrade] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');

    //send the data to the backend
    function sendData(e) {
        e.preventDefault();
        const newStudent = {
            name,
            age, 
            grade, 
            gender,
            address
        }

        axios.post('http://localhost:3000/student/add', newStudent).then(() => {
            alert('Student added');
            setName("");
            setAge("");
            setGrade("");
            setGender("");
            setAddress("");
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="name">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter student name" 
                    onChange={(e) => {
                        setName(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="age">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter student name" 
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="grade">Student Grade</label>
                    <input type="text" className="form-control" id="grade" placeholder="Enter student name" 
                    onChange={(e) => {
                        setGrade(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter student name"
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label htmlFor="address">Student Adress</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter student name"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}></input>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}