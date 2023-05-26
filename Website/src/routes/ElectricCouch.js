
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import "../components/EachProjectHero.css"
import "../components/EachProjectDetails.css"
import Couch1 from "../images/Headshot.png"
import Couch2 from "../images/BG.jpg"
import ElectricCouchPreview from "../videos/CouchPreviewLong.mp4"
import MarkdownIt from 'markdown-it';

const ElectricCouch = () => {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/JohnDale02/Remote-Controlled-Couch-Summer22/main/README.md');
        const text = await response.text();
        setReadmeContent(text);
      } catch(error) {
        console.error('Error fetching README file:', error);
      }
    };
    fetchReadme();
  },[]);

  const md = new MarkdownIt();
  const html = md.render(readmeContent);

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero-couch">
        <video src={ElectricCouchPreview} autoPlay muted loop></video>
        <div className="heading">
          <h1>Electric Couch</h1>
          <p>Build from the ground up with my Twin brother</p>
        </div>
      </div>
    {/* Above: Hero section for Couch Project Page*/}
    {/* Bottom: Content for Couch Project Page*/}
      <div className="proj-container">
        <div className="proj-content">
          <div className="left">
            <h1>Who Am I?</h1>
            <div className='markdown'  dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>

          <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src={Couch1} className="img" alt="true">
                </img>
              </div>
                <div className="img-stack bottom">
                  <img src={Couch2} className="img" alt="true">
                  </img>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default ElectricCouch

