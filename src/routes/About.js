import React from 'react'
import Navbar from '../components/HeroFooterNav/Navbar'
import Footer from "../components/HeroFooterNav/Footer"
import AboutHero from "../components/About/AboutHero"
import AboutContent from '../components/About/AboutContent'

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