import React from 'react'
import {Link} from  "react-scroll";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <h1 className='logo'>PaT-KaJim</h1>

        <div className="navlinks">
            <ul className='links' id='links'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} className='nav'><li>Home</li></Link>
                <Link to="About"  spy={true} smooth={true} offset={-100} duration={100} className='nav'><li>About</li></Link>
                <Link to="services" spy={true} smooth={true} offset={-50} duration={100} className='nav'><li>Services</li></Link>
                <Link to="works" spy={true} smooth={true} offset={-50} duration={100} className='nav'><li>Works</li></Link>
                <Link to="contact" spy={true} smooth={true} offset={100} duration={100} className='nav'><li>Contact</li></Link>
            </ul>
        </div>

    </div>
  )
}

export default Navbar