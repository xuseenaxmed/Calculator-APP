// src/Programmer.js

import React from 'react';
import images from './images/1.jpeg'
import hexedecimal from './hexedecimal/2.png'
import octol from './octol/3.png'

import './Programmer.css';

const Programmer = () => {
    return (
        <div className="programmer">
            <h1>Programmer Component</h1>
            <ul className="programmer-list">
                <li>
                    <img src={hexedecimal} alt="Hexadecimal" className="icon" />
                    Hexadecimal
                </li>
                <li>
                    <img src={octol} alt="Octal" className="icon" />
                    Octal
                </li>
                <li>
                    <img src={images} alt="Binary" className="icon" />
                    Binary
                </li>
                <li>
                    <img src={images} alt="Algebra" className="icon" />
                    Algebra
                </li>
                <li>
                    <img src={images} alt="More" className="icon" />
                    ...
                </li>
            </ul>
        </div>
    );
};

export default Programmer;
