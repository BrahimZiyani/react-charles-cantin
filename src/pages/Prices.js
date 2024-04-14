import React, { useState } from 'react';
import {Slider, ImageGallery} from '../components/Slider';
import './Prices.css'


// Define a React functional component named Prices
// This component renders different pricing options with images and descriptions
function Prices() {
  return (
      <div className='prices'>
          <div className='card'>
              <img src="/Prices/JustMe.jpg" alt="Just Me" />
              <div className='cardText'>
                  <h1>Just Me</h1>
                  <p><strong>130 euros</strong> - Session for one person, outdoors or in the studio</p>
              </div>
          </div>
          <div className='card'>
              <div className='cardText'>
                  <h1>For Two</h1>
                  <p><strong>195 euros</strong> - Session for two people, outdoors or in the studio</p>
              </div>
              <img src="/Prices/For2.jpg" alt="For Two" />
          </div>
          <div className='card'>
              <img src="/Prices/Family.jpg" alt="Family" />
              <div className='cardText'>
                  <h1>Family</h1>
                  <p><strong>220 euros</strong> - Session for family or friends up to 4 people, outdoors or in the studio</p>
                  <p>30 euros per additional person beyond 4 (excluding children up to 2 years old)</p>
              </div>
          </div>
          <div className='card'>
              <div className='cardText'>
                  <h1>Once Upon a Time</h1>
                  <p><strong>160 euros</strong> - Maternity photo (At your home, outdoors, or in the studio)</p>
              </div>
              <img src="/Prices/Maternity.jpg" alt="Once Upon a Time" />
          </div>
          <div className='card'>
              <img src="/Prices/Baby.jpg" alt="My Baby" />
              <div className='cardText'>
                  <h1>My Baby</h1>
                  <p><strong>100 euros</strong> - Child photo up to 3 years old (at home)</p>
              </div>
          </div>
          <div className='card'>
              <div className='cardText'>
                  <h1>I Capture the Event</h1>
                  <p>Custom wedding or baptism service - Price on request</p>
              </div>
              <img src="/Prices/event.jpg" alt="I Capture the Event" />
          </div>
      </div>
  );
}

export default Prices;