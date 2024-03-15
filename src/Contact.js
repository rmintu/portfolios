import React from 'react'

export default function Contact() {
  return (
    <div className="contact-section">
      <h2>Get in Touch</h2>
      <div className='contact-forms'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <h3>Lets Connect</h3>
                <form>
                    <label for="name">name</label>
                    <input type="text" placeholder='name' id="name" name="name" /><br />
                    <label for="name">email</label>
                    <input type="email" placeholder='Your email' id="email" name="email" /> <br />
                    <label for="name">subject</label>
                    <input type="text" placeholder='subject' id="subject" name="subject" /><br />
                    <label for="message">message</label>
                    <input type="textarea" placeholder='write your message here' id="message" name="message" /><br />

                </form>
                </div>
                <div className='col-md-6'>
                    
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
