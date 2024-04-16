
import './Hero.css'
import Button from './Button';
import { useEffect } from 'react';


// Define a React functional component named Hero
// This component represents a hero section with a title, subtitle, and buttons for Portfolio and Contact Me
function Hero() {
  useEffect(() => {
    // Add the specific CSS class to the body element when the component mounts
    document.body.classList.add('hero-background');

    // Remove the specific CSS class from the body element when the component unmounts
    return () => {
        document.body.classList.remove('hero-background');
    };
}, []); // Empty dependency array ensures this effect runs only once
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