import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://day41-task01-backend.onrender.com/api/users/forgot-password', { email });
            toast.success('Password reset link sent');
        } catch (error) {
            toast.error('Failed to send password reset link: ' + error.response.data.message);
        }
    };

    return (
        <div className="forgot-password-container">
            <ToastContainer />
            <div className="forgot-password-box">
                <h2>Forgot Password</h2>
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
                    <button type="submit" className="btn btn-primary btn-block forgot-password-btn">Send Reset Link</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
