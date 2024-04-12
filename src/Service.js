import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { BiSolidTachometer } from "react-icons/bi";
import { FaArchway } from "react-icons/fa";




export default function Service() {
  return (
    <div className='service-section'>
      <h2>Service</h2>
      <div className='servise-sec'>
        <div className='row'>
        <div className="col-md-4">
        <div className="service_grid_list">
        <CgWebsite />
        <h2><b>Website Development</b></h2>
        <p>Can build custom websites and admin panels from scratch or using Figma to ReactJS, Figma to NextJS, and PSD to HTML, etc. Develop responsive, visually appealing, and user-friendly interfaces.</p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="service_grid_list">
        <BiSolidTachometer />
        <h2><b>Website Consultancy & Technical Advice</b></h2>
        <p>Offer guidance and expertise to clients on frontend technologies, best practices, and industry trends. Help clients make informed decisions about their web development projects.</p>
      </div>
      </div>
      <div className="col-md-4">
      <div className="service_grid_list">
        <FaArchway />
        <h2><b>Website Maintenance And Support</b></h2>
        <p>Provide ongoing maintenance and support services, including bug fixes, security updates, content updates, and regular backups.</p>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}
