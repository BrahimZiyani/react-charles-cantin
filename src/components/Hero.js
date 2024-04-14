import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'
import Button from './Button';


// Define a React functional component named Hero
// This component represents a hero section with a title, subtitle, and buttons for Portfolio and Contact Me
function Hero() {
return (
<div className="centeredText">
  <h1>Charles Cantin</h1>
  <p>Photographe</p>
  <div className='buttons'>
    <Button text='Portfolio' to='/portfolio' style={{ marginRight: '10px' }}></Button>
    <Button text='Contact Me' to='/contact'></Button>
  </div>
</div>
)
}

export default Hero