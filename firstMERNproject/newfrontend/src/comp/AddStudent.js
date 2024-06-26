import React, { useState } from "react";

export default function AddStudent() {


    const [name, setName] = useState('');
    const [age, setAge] = useState(''); 
    const [grade, setGrade] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');

    function sendData() {
        alert("Insert");
    }

    return (
        <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter student name" 
                    onChange={(e) => {
                        setName(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter student name" 
                    onChange={(e) => {
                        setAge(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label for="grade">Student Grade</label>
                    <input type="text" className="form-control" id="grade" placeholder="Enter student name" 
                    onChange={(e) => {
                        setGrade(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label for="gender">Student Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter student name"
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label for="address">Student Adress</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter student name"
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}></input>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}