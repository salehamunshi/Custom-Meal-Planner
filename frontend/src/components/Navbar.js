import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='logo'>Meal Planner</div>
            <div className='nav-links'>
                <Link to='/login' className='nav-item'>Login</Link>
                <Link to='/register' className='nav-item'>Register</Link>
            </div>
        </nav>
    );
};

export default Navbar;