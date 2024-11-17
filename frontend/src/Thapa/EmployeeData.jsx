import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialEmployees = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        mobile: '123-456-7890',
        designation: 'Manager',
        gender: 'Male',
        course: ['MCA', 'BCA'],
        img: 'https://via.placeholder.com/50' // Placeholder image URL
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        mobile: '987-654-3210',
        designation: 'Developer',
        gender: 'Female',
        course: ['BSC'],
        img: 'https://via.placeholder.com/50'
    }
];

const EmployeeData = () => {
    const [employees, setEmployees] = useState(initialEmployees);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        designation: '',
        gender: '',
        course: [],
        img: ''
    });

    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(employees[index]);
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                course: checked
                    ? [...prevData.course, value]
                    : prevData.course.filter(item => item !== value)
            }));
        } else if (type === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                img: URL.createObjectURL(files[0])
            }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleUpdate = () => {
        const updatedEmployees = [...employees];
        updatedEmployees[editIndex] = formData;
        setEmployees(updatedEmployees);
        setEditIndex(null);
        setFormData({
            name: '',
            email: '',
            mobile: '',
            designation: '',
            gender: '',
            course: [],
            img: ''
        });
    };

    return (
        <div className="container mt-5">
            {/* Top bar with button on the right */}
            <div className="d-flex justify-content-end m-3">
                <Link to="/hom" className="btn btn-primary">
                    Go to Home
                </Link>
            </div>
            <h2 className="text-center mb-4">Employee Data</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.mobile}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.course.join(', ')}</td>
                            <td><img src={employee.img} alt="Employee" style={{ width: '50px', borderRadius: '50%' }} /></td>
                            <td>
                                <button className="btn btn-warning btn-sm" onClick={() => handleEdit(index)}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editIndex !== null && (
                <div className="mt-4">
                    <h3>Edit Employee</h3>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Mobile No</label>
                            <input type="text" name="mobile" className="form-control" value={formData.mobile} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Designation</label>
                            <input type="text" name="designation" className="form-control" value={formData.designation} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label><br />
                            <div className="form-check form-check-inline">
                                <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="form-check-input" />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="form-check-input" />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Course</label><br />
                            {['MCA', 'BCA', 'BSC'].map(course => (
                                <div className="form-check form-check-inline" key={course}>
                                    <input type="checkbox" name="course" value={course} checked={formData.course.includes(course)} onChange={handleChange} className="form-check-input" />
                                    <label className="form-check-label">{course}</label>
                                </div>
                            ))}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image Upload</label>
                            <input type="file" name="img" className="form-control" onChange={handleChange} />
                        </div>
                        <button type="button" className="btn btn-success" onClick={handleUpdate}>
                            Update
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default EmployeeData;
