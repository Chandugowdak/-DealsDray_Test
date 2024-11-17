import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeList = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        designation: '',
        gender: '',
        course: [],
        img: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                course: checked
                    ? [...prevData.course, value]
                    : prevData.course.filter(item => item !== value),
            }));
        } else if (type === 'file') {
            setFormData((prevData) => ({ ...prevData, img: files[0] }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/employe',formData)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    };

    return (
        <div className="container mt-4 p-3" style={{ backgroundColor: '#f0f4f8', borderRadius: '10px' }}>
            <Link to="/hom" className="btn btn-secondary mb-3">
                Go to Home
            </Link>
            <h2 className="text-center mb-4">Employee Form</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Designation</label>
                    <select
                        name="designation"
                        className="form-select"
                        value={formData.designation}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Designation</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Gender</label><br />
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            name="gender"
                            value="M"
                            checked={formData.gender === 'M'}
                            onChange={handleChange}
                            className="form-check-input"
                            required
                        />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            name="gender"
                            value="F"
                            checked={formData.gender === 'F'}
                            onChange={handleChange}
                            className="form-check-input"
                            required
                        />
                        <label className="form-check-label">Female</label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Courses</label><br />
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            name="course"
                            value="MCA"
                            onChange={handleChange}
                            className="form-check-input"
                            required
                        />
                        <label className="form-check-label">MCA</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            name="course"
                            value="BCA"
                            onChange={handleChange}
                            className="form-check-input"
                            required
                        />
                        <label className="form-check-label">MCA</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            name="course"
                            value="BSC"
                            onChange={handleChange}
                            className="form-check-input"
                            required
                        />
                        <label className="form-check-label">MCA</label>
                    </div>
                   
                </div>
                <div className="mb-3">
                    <label className="form-label">Image Upload</label>
                    <input
                        type="file"
                        name="img"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    );
};

export default EmployeeList;
