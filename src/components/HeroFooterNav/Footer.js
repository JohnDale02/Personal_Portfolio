
import "./Footer.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"


function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left"> 
                <div className="location">
                    <h4>
                        <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        Massachusetts Born and Raised                
                    </h4>
                </div>
                
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} /> 
                        781-XXX-XXXX
                    </h4>
                </div>
                <div className="mail">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} /> 
                        johnkdale02@gmail.com
                    </h4>
                </div>
            </div>  


            <div className="right"> 
                <h4>About Me</h4>
                <p>My name is John Dale. I am a Junior Computer Engineering student at the University of Massachusetts, Amherst. I am a creative thinker who loves pushing boundaries and problem solving.
                </p>
                <div className="socials">
                        <FaLinkedin size={30} style={{color: "#fff", marginRight: "2rem", marginTop: "1rem"}} /> 
                        <FaTwitter size={30} style={{color: "#fff", marginRight: "2rem", marginTop: "1rem"}} /> 
                        <FaInstagram size={30} style={{color: "#fff", marginRight: "2rem", marginTop: "1rem"}} /> 
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer