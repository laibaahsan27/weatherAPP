import React from 'react';
import navLOGO from '../images/logo.png';
import navICON from '../images/Menu.png';
import { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const navRef = useRef();
  const overlayRef = useRef();

  const showNavbar = useCallback((event) => {
    event.stopPropagation();
    navRef.current.classList.toggle('responsive_nav');
    overlayRef.current.classList.toggle('show');
  }, []);

  const handleBackgroundClick = useCallback((event) => {
    if (!navRef.current.contains(event.target)) {
      navRef.current.classList.remove('responsive_nav');
      overlayRef.current.classList.remove('show');
    }
  }, []);

  const handleMenuOptionClick = useCallback(() => {
    navRef.current.classList.remove('responsive_nav');
    overlayRef.current.classList.remove('show');
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleBackgroundClick);
    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, [handleBackgroundClick]);

  return (
    <div>
    
      <div className="navCON">
        <img className="navbarLogo" src={navLOGO} alt="LOGO" />
        <nav className="navLinks" ref={navRef}>

            <Link
              to="about"
              className="navButt navButtActive"
              spy={true}
              smooth={true}
              duration={200}
              onClick={handleMenuOptionClick}
            >
              Home
            </Link>

            {/* <Link
              to="Services"
              className="navButt"
              spy={true}
              smooth={true}
              duration={200}
              onClick={handleMenuOptionClick}
            >
              Get Weather
            </Link>

            <Link
              to="Services"
              className="navButt"
              spy={true}
              smooth={true}
              duration={200}
              onClick={handleMenuOptionClick}
            >
              Maps
            </Link> */}

            <Link
              to='Cities'
              className="navButt"
              spy={true}
              smooth={true}
              duration={200}
              onClick={handleMenuOptionClick}
            >
              Cities
            </Link>

            <Link
              to='About'
              className="navButt"
              spy={true}
              smooth={true}
              duration={200}
              onClick={handleMenuOptionClick}
            >
              About
            </Link>
          
            <Link
              to="FAQ"
              className="navButt navButtS"
              spy={true}
              smooth={true}
              duration={200}
              onClick={handleMenuOptionClick}
            >
              Get Weather
            </Link>
          
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <img style={{ objectFit: 'contain' }} src={navICON} alt="" />
        </button>
      </div>
      <div className="overlay" ref={overlayRef}></div>
      {/* <div style={{position:'absolute'}}>
        <div>
            <div>
                <p>THE DAILY WEATHER</p>
            </div>
            <div></div>
            <div></div>
        </div>
        <div></div>
      </div> */}
    </div>
  );
}