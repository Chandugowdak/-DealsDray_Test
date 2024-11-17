import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [User_Name, SetUser_Name] = useState('');
    const [User_Password, SetUser_Password] = useState('');
    
    // Correctly call useHistory as a hook
    const history = useHistory(); // Use parentheses to call the hook correctly


    const handelsubmit = (Event) => {
        Event.preventDefault();
        axios.post('http://localhost:3000/register', { usename: User_Name, password: User_Password })
        .then(res => {
             // Check the actual response received
            if (res.data !== "Wrong Password") {
                alert("Login Success");
                console.log(res.data);
                history.push('/Hom'); // Correctly routes to home page
            } else {
                alert("Login Failed");
               
            }
        })
        .catch((err) => {
            console.error('Error during login request:', err); // Enhanced error logging
        });
    };
    
  

    return (
        <>
            <div className='p-3 w-100 position-fixed'>
                <img
                    src="https://img.freepik.com/premium-vector/hand-drawn-simple-vector-cloud-icon-brush-drawing-meteorology-sign-original-hand-painted-weather-forecast-symbol-isolated-white-background_570429-61720.jpg"
                    width="50px" height="50px" alt="Logo"
                    title="𝓦𝓮𝓪𝓽𝓱𝓮𝓻 𝓗𝓾𝓫"
                    className="rounded-circle border border-white p-1"
                />
            </div>

            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '10px' }}>
                    <div className="text-center mb-4">
                        <img
                            src="https://img.freepik.com/premium-vector/hand-drawn-simple-vector-cloud-icon-brush-drawing-meteorology-sign-original-hand-painted-weather-forecast-symbol-isolated-white-background_570429-61720.jpg"
                            title="𝓦𝓮𝓪𝓽𝓱𝓮𝓻 𝓗𝓾𝓫"
                            alt="Logo"
                            className="mb-3 border rounded-circle"
                            width="150px" height="100px"
                        />
                        <h2 className="mb-3 text-primary">Login</h2>
                    </div>
                    <form onSubmit={handelsubmit}>
                        <div className="form-group mb-3">
                            <label className='text-dark' htmlFor="User_Name">E-mail</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your E-mail"
                                onChange={(e) => SetUser_Name(e.target.value)}
                                name="Name"
                                id="User_Name"
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className='text-dark' htmlFor="User_Password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your password"
                                onChange={(e) => SetUser_Password(e.target.value)}
                                name="Password"
                                id="User_Password"
                                required
                            />
                        </div>
                        <button className="btn btn-primary w-100 mb-3" type='submit'>Login</button>
                        <div className="text-center">
                            <Link className="text-decoration-none" to="/Reg">Don't have an account? Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
