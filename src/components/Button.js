import React, { useState } from 'react';
import './Button.css';

function Button({ text }) {
  return (
    <>
        <button className='portfolio'>{text}</button>
    </>
  );
}


export default Button;
