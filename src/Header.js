import React from 'react'
import Logo from './logo.svg'
import Sidebar from './Sidebar'
import Home from './Home'
import About from './about-us'
import Skills from './skills'
import Experts from './expert'
import Service from './Service'
import Contact from './Contact'
import { Link as ScrollLink } from 'react-scroll';


export default function Header() {
  return (
    <div className='header-section'>
      <div className='row'>
        <div className='col-md-3'>
        <Sidebar />
        </div>
        <div className='col-md-9'>
        {/* <img src={Logo} alt="" /> */}
        <div className='main_menu'>
        <ul className='menus'>
        <li><ScrollLink to="home-section" smooth={true} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="about-section" smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to="service-section" smooth={true} duration={500}>Services</ScrollLink></li>
        <li><ScrollLink to="project-section" smooth={true} duration={500}>Project</ScrollLink></li>
        <li><ScrollLink to="contact-section" smooth={true} duration={500}>Contact</ScrollLink></li>
        </ul>
        </div>
        <Home />
        <About />
        <Skills />
        <Experts />
        <Service />
        <Contact />
      </div>
      </div>
      </div>
  )
}
