import React from 'react'
import Logo from './logo.svg'
import Sidebar from './Sidebar'
import Home from './Home'
import About from './about-us'
import Skills from './skills'
import Experts from './expert'

export default function Header() {
  return (
    <div className='header-section'>
      <div className='row'>
        <div className='col-md-3'>
        <Sidebar />
        </div>
        <div className='col-md-9'>
        {/* <img src={Logo} alt="" /> */}
        <div>
        <ul className='menus'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
        </div>
        <Home />
        <About />
        <Skills />
        <Experts />
      </div>
      </div>
      </div>
  )
}
