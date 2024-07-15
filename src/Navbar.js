// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Calculator</Link>
            <Link to="/graphing">Graphing</Link>
            <Link to="/data-collection">Data Collection</Link>
            <Link to="/programmer">Programmer</Link>
        </nav>
    );
};

export default Navbar;
