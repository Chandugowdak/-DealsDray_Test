import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory} from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   const history = useHistory();
    
   

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from refreshing the page
      axios.post('http://localhost:3000/register', {username,email,password,confirmPassword})
      .then((data)=>{
        console.log(data);
       history.push('/Log')
      })
      .catch((err)=>{
        console.log(err);
      })
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
            <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '10px' }}>
                    <div className="text-center mb-4">
                        <img
                            src="https://img.freepik.com/premium-vector/hand-drawn-simple-vector-cloud-icon-brush-drawing-meteorology-sign-original-hand-painted-weather-forecast-symbol-isolated-white-background_570429-61720.jpg"
                            title="𝓦𝓮𝓪𝓽𝓱𝓮𝓻 𝓗𝓾𝓫"
                            alt="Logo"
                            className="mb-3 border rounded-circle"
                            width="150px" height="100px"
                        />
                        <h2 className="mb-3 text-primary">Registration</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
                        <div className="text-center">
                            <Link to="/Log" className="text-decoration-none">Already have an account? Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registration;
