import React from 'react'
import Progress from 'react-progressbar';
import Profile from './profile.jpg'
import './Sidebar.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ExampleDoc from './your-file.pdf'


export default function Sidebar() {
  return (
    <div className='sidebar-section'>

      <div className='profile-img'>
        <img src={Profile} alt="/" />
      </div>
      <h3 className='profile-titl'><b>Mintu Roy</b></h3>
      <p className='designation'>Shopify & Mern Stack Developer</p>
      <div className='social-icons'>
      <FacebookIcon />
      <InstagramIcon />
      <TwitterIcon />
      <LinkedInIcon />
      </div>
      <div className='flex-items'><p className='text-content'>Email:</p> rmintu106@gmail.com</div>
      <div className='flex-items'><p className='text-content'>Phone:</p> 9123011769</div>
      <div className='flex-items'><p className='text-content'>Residence:</p> India</div>
      <div className='flex-items'><p className='text-content'>City:</p> Siliguri</div>
      <div className='flex-items'><p className='text-content'>Age:</p> 29</div>
      <div className='flex-items'><p className='text-content'>Language:</p> Bengali, English, Hindi</div>
      <hr />
      <div className='skills'>
        <h6>Top Skills: </h6>
        <div class="skills-details">
          <span>React js</span>
          <span className='percentage'>75%</span>
        <Progress completed={75} />
      </div>
      <div class="skills-details">
          <span>Shopify</span>
          <span className='percentage'>90%</span>
        <Progress completed={90} />
      </div>
      <div class="skills-details">
          <span>Node js</span>
          <span className='percentage'>60%</span>
        <Progress completed={60} />
      </div>
      <div class="skills-details">
          <span>Javascript</span>
          <span className='percentage'>90%</span>
        <Progress completed={90} />
      </div>
      <a href={ExampleDoc} download="MyExampleDoc" target='_blank' rel="noreferrer"><button className='cv {classes.navLink}' >DOWNLOAD MY CV</button></a>
      </div>
      <div className='col-md-9'>

      </div>
      </div>
  )
}