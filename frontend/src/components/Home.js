import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Welcome to Meal Planner</h1>
            <p>Plan your meals, stay healthy, and save time</p>
            <div className='btn-container'>
                <Link to='/login' className='btn'>Login</Link>
                <Link to='/register' className='btn'>Register</Link>
            </div>
        </div>
    );
};

export default Home;