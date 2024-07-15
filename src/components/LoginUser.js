import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginUser.css';

const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://day41-task01-backend.onrender.com/api/users/login', { email, password });
            setMessage('Login successful');
            toast.success('Login successful');
        } catch (error) {
            setMessage(error.response.data.message);
            toast.error('Login failed: ' + error.response.data.message);
        }
    };

    return (
        <div className="login-container">
            <ToastContainer />
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Your email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block login-btn">Login</button>
                </form>
                <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                <p className="register-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
                
            </div>
        </div>
    );
};

export default LoginUser;
