import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const res = await axios.post('http://localhost:5000/api/users/login', {
                email: formData.email,
                password: formData.password
            });

            setSuccess('Login successful!');
            setFormData({
                email: '',
                password: ''
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong, please try again');
        }
    };

    return (
        <div className='login-container'>
            <h2>Login to Your Meal Planner Account</h2>
            {error && <p className='error'>{error}</p>}
            {success && <p className='success'>{success}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;