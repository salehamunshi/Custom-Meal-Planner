import React, {useState} from 'react';
import axios from 'axios';
import '../styles/Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        dietaryPreference: '',
        calorieIntake: '',
        mealsPerDay: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const dietaryOptions = [
        'None', 'Halal', 'Kosher', 'Vegan', 'Vegetarian', 'Keto', 'Pescatarian', 'Gluten Free'
    ];

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

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/api/users/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                dietaryPreference: formData.dietaryPreference,
                calorieIntake: Number(formData.calorieIntake),
                mealsPerDay: Number(formData.mealsPerDay)
            });

            setSuccess('Registration successful! Welcome to Meal Planner');
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                dietaryPreference: '',
                calorieIntake: '',
                mealsPerDay: ''
            });
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong, please try again');
        }
    };

    return (
        <div className='register-container'>
            <h2>Create Your Meal Planner Account</h2>
            {error && <p className='error'>{error}</p>}
            {success && <p className='success'>{success}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

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

                <label>
                    Confirm Password:
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Dietary Preference:
                    <select
                        name="dietaryPreference"
                        value={formData.dietaryPreference}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select your preference:</option>
                        {dietaryOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Daily Calorie Intake (kcal):
                    <input
                        type="number"
                        name="calorieIntake"
                        value={formData.calorieIntake}
                        onChange={handleChange}
                        min="500"
                        max="5000"
                        step="50"
                        required
                    />
                </label>

                <label>
                    Meals Per Day:
                    <input
                        type="number"
                        name="mealsPerDay"
                        value={formData.mealsPerDay}
                        onChange={handleChange}
                        min="1"
                        max="6"
                        required
                    />
                </label>

               <button type="submit">Register</button> 
            </form>
        </div>
    );
};

export default Register;