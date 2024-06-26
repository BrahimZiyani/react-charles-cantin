import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';


// Define a React functional component named Navbar
// This component represents a navigation bar with a responsive menu for different links
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    <img className={styles.navlogo} src='/logo.png' alt="logo"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/prices' className='nav-links' onClick={closeMobileMenu}>
                            Prices
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>  
        </nav>   
    </>
  );
}

export default Navbar;
