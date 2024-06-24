import React,{useState} from "react";

export default function AddStudent() {



    return(

        <div className="container">
            <form>
                <div class="form-group">
                    <label for="name">Student Name :</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter student name"></input>
                </div>

                <div class="form-group">
                    <label for="name">Student Age :</label>
                    <input type="text" class="form-control" id="age" placeholder="Enter student age"></input>
                </div>

                <div class="form-group">
                    <label for="name">Student Grade :</label>
                    <input type="text" class="form-control" id="grade" placeholder="Enter student grade"></input>
                </div>

                <div class="form-group">
                    <label for="name">Student Gender</label>
                    <input type="text" class="form-control" id="gemder" placeholder="Enter student gender"></input>
                </div>

                <div class="form-group">
                    <label for="name">Student Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Enter student address"></input>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}