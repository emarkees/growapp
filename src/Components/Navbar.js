import React, { useState, useEffect } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import  { Button } from './Button'



function Navbar() {
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                        GrowTech
                        <img scr='./Components/icons/logo.svg' alt=''/>
                </Link>
            </div>
                <div className='navbar-header'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' activeClassName="is-active">
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Services' className='nav-links' activeClassName="is-active">
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Bag' className='nav-links'>
                            Bag
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Dashboard' className='nav-links'>
                        Dashboard
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Login' className='nav-links'>
                            Login
                        </Link>
                    </li>
                    
                 {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}           
                </div>
           
        </nav>

    </>
  )
}

export default Navbar