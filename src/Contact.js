import React from 'react'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";



export default function Contact() {
  return (
    <div className="contact-section">
      <h2>Get in Touch</h2>
      <div className='contact-forms'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <div className='get_touch_form'>
                <h3>Lets Connect</h3>
                <form>
                <div className='info_div'>
                    <label for="name">name</label>
                    <input type="text" placeholder='name' id="name" name="name"/>
                  </div>
                  <div className='info_div'>
                    <label for="name">email</label>
                    <input type="email" placeholder='Your email' id="email" name="email" />
                  </div>
                  <div className='info_div'>
                    <label for="name">subject</label>
                    <input type="text" placeholder='subject' id="subject" name="subject" />
                  </div>
                  <div className='info_div'>
                    <label for="message">message</label>
                    <input type="textarea" placeholder='write your message here' id="message" name="message" />
                  </div>
                    <button className='sub_btn'>Submit</button>
                </form>
                </div>
                </div>
                <div className='col-md-6'>
                <div className='contact_right_info'>
                  <span><AddLocationAltIcon sx={{ fontSize: 48 }} /></span>
                  <div className='location-items'><p className='texts'>Country:</p> India</div>
                  <div className='location-items'><p className='texts'>City:</p> Siliguri</div>
                  <div className='location-items'><p className='texts'>Street:</p>Siliguri</div>
                </div>
                <div className='contact_right_info'>
                <span><BiSolidMessageSquareDetail /></span>
                <div className='location-items'><p className='texts'>GitHub:</p> https://github.com/rmintu</div>
                <div className='location-items'><p className='texts'>Skype:</p> rmintu</div>
                <div className='location-items'><p className='texts'>Linkedin:</p>mintu-roy-138316197</div>
                </div>
                <div className='contact_right_info'>
                <span><FaPhoneSquareAlt /></span>
                <div className='location-items'><p className='texts'>Email:</p> rmintu106gmail.com</div>
                <div className='location-items'><p className='texts'>Phone:</p> 9123011769</div>
                </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}
