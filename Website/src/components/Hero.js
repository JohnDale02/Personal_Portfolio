import "./Hero.css"
import React from 'react'
import BackgroundVideo from "../videos/Wakefoil.MOV"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask"> 
        <video src={BackgroundVideo} muted loop autoPlay></video>
        </div>
        <div className="content">
        <h1>John Dale's Porfolio</h1>
          <p>COMPUTER ENGINEER. VIDEOMAKER. TWIN.</p>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg



