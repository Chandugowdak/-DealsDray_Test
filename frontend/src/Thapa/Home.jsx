import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure you have custom CSS for styling

const Home = () => {
    // Custom styles for the navigation bar and buttons
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#343a40',
        padding: '10px 20px',
        color: 'white',
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '10px 15px',
        fontSize: '16px',
        borderRadius: '5px',
        margin: '0 10px',
    };

    const containerStyle = {
        textAlign: 'center',
        marginTop: '20px',
    };

    const statsCardStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        margin: '10px',
        color: '#4facfe',
    };

    return (
        <div>
            {/* Custom Navbar */}
            <div style={navbarStyle}>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Company Portal</div>
                <div>
                    <Link to="/employee-list" style={linkStyle} className="hover-style btn p-3">Employee List</Link>
                    <Link to="/employee-data" style={linkStyle} className="hover-style btn p-3">Employee Data</Link>
                    <Link to="/log" style={{ ...linkStyle, backgroundColor: '#dc3545' }} className="hover-style btn ps-3 pe-3">Logout</Link>
                </div>
            </div>

            {/* Main Content */}
            <div style={containerStyle}>
                <h1 className="display-3">Welcome to the Home Page</h1>
                <p className="lead">Navigate to the various sections using the menu above.</p>

                {/* Stats Cards */}
                <div className="stats-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
                    <div style={statsCardStyle}>
                        <h3>Visitors</h3>
                        <p>1,234</p>
                    </div>
                    <div style={statsCardStyle}>
                        <h3>Courses</h3>
                        <p>56</p>
                    </div>
                    <div style={statsCardStyle}>
                        <h3>Projects</h3>
                        <p>112</p>
                    </div>
                    <div style={statsCardStyle}>
                        <h3>Members</h3>
                        <p>450</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div style={{ marginTop: '50px' }}>
                    <h2>Get Started!</h2>
                    <p>Explore the platform, take a course, and start learning now.</p>
                    <button className="btn btn-primary btn-lg" style={{ padding: '15px 30px', fontSize: '1.2rem' }}>Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
