// src/Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
    };
    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };
   

    const handleEqual = () => {
        try {
            setInput(eval(input).toString());
        } catch {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <div className='mamul'>
            <div className="display">{input}</div>
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={handleEqual}>%</button>
                <button onClick={() => handleClick('/')}>/</button>
                <button onClick={handleClear}>CE</button>
                <button onClick={handleClear}>C</button>
               <button className='equal' onClick={handleEqual}>=</button> 
               <button onClick={handleBackspace}>←</button>
                
            </div>
            </div>
        </div>
    );
};

export default Calculator;
