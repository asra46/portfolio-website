import React from 'react'
import "./FooterStyle.css"

import {FaFacebook,  FaInstagram, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
 
            <div className='footer-part'>
             
              <div className="social">
              <FaFacebook  size={30} style={{color:"#aa3ba2" , marginRight:"1rem"}}/>

              <FaInstagram  size={30} style={{color:"#aa3ba2" , marginRight:"1rem"}}/>

              <FaLinkedin  size={30} style={{color:"#aa3ba2" , marginRight:"1rem"}}/>

              </div>
            </div>

        </div>

    </div>
  )
}

export default Footer
