import React from 'react'
import {Link} from  "react-scroll";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <h2 className='logo'>PaT-KaJim</h2>

        <div className="navlinks">
            <ul className='links' id='links'>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100} className='nav'><li>Home</li></Link>
                <Link to="howItWorks"  spy={true} smooth={true} offset={-100} duration={100} className='nav'><li>How It works</li></Link>
                <Link to="menu" spy={true} smooth={true} offset={-50} duration={100} className='nav'><li>Menu</li></Link>
            
            </ul>
        </div>

        <Link to="contact" spy={true} smooth={true} offset={100} duration={100} className='nav'><button className='contactBtn'><li>Contact</li></button></Link>

    </div>
  )
}

export default Navbar