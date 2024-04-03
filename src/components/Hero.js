import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'
import Button from './Button';

function Hero() {

return (

<div className="centeredText">
<h1>Charles Cantin</h1>
<p>Photographe</p>
<div className='buttons'>
  <Button text='Portfolio' style={{ marginRight: '10px' }}></Button>
  <Button text='Contact Me'></Button>
</div>
</div>
)
}

export default Hero