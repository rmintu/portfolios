import React from 'react'
import Profile from './profile.jpg'
import './Sidebar.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Sidebar() {
  return (
    <div className='sidebar-section'>
    <div className='row'>
     <div className='col-md-3'>
      <div className='profile-img'>
        <img src={Profile} alt="/" />
      </div>
      <h3 className='profile-titl'><b>Mintu Roy</b></h3>
      <p className='designation'>Shopify & React-js Developer</p>
      <div className='social-icons'>
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
      <LinkedInIcon />
      </div>
      <p className='mails'>Email: rmintu106@gmail.com</p>
      <p className='phone'>Phone: 9123011769</p>
      <p className='residence'>Residence: India</p>
      <p className='city'>City: Siliguri</p>
      <p className='age'>Age: 29</p>
      <p className='language'>Language: Bengali, English, Hindi</p>
      <hr />
      <div className='skills'>
        <h6>Top Skills: </h6>
      </div>
      </div>
      <div className='col-md-9'>

      </div>
      </div>
    </div>
  )
}
