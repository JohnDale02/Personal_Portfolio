
import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'
import About1 from "../images/Headshot.png"
import About2 from "../images/Funny.PNG"

const AboutContent = () => {
  return (
    <div className="about">
       <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a savage student and creator</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
       </div>
       <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={About1} className="img" alt="true">
                    </img>
                </div>
                <div className="img-stack bottom">
                    <img src={About2} className="img" alt="true">
                    </img>
                </div>
            </div>
       </div>
    </div>
  )
}

export default AboutContent