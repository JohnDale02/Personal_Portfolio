import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import AboutHero from "../components/AboutHero"
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <AboutHero></AboutHero>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  )
}

export default About