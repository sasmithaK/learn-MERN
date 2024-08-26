import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MakePayment() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        university: '',
        name: '',
        studentNumber: '',
        course: '',
        purpose: '',
        email: '',
        phone: '',
        amount: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        navigate('/payment-options');
    };

    return (
        <div className="container py-5" style={{maxWidth: '800px', margin: 'auto'}}>
            <h1 className="text-center mb-5">Make payments</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col-md-8">
                        <label htmlFor="university" className="form-label text-primary">University / Institute</label>
                        <input
                            type="text"
                            className="form-control"
                            id="university"
                            value={formData.university}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-end">
                        <button type="button" className="btn btn-primary w-100" onClick={() => navigate('/add-account')}>
                            + Add account
                        </button>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label text-primary">Student Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="studentNumber" className="form-label text-primary">Student Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="studentNumber"
                            value={formData.studentNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label htmlFor="course" className="form-label text-primary">Course</label>
                        <input
                            type="text"
                            className="form-control"
                            id="course"
                            value={formData.course}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="purpose" className="form-label text-primary">Purpose of payment</label>
                        <input
                            type="text"
                            className="form-control"
                            id="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label text-primary">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label text-primary">Phone number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="amount" className="form-label text-primary">Payment amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Next</button>
                </div>
            </form>
        </div>
    );
}

export default MakePayment;