import React from 'react'
import Navbar from '../components/HeroFooterNav/Navbar'
import Footer from "../components/HeroFooterNav/Footer"
import ProjectHero from "../components/Projects/ProjectHero"
import ProjectCards from "../components/Projects/ProjectCards"

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProjectHero></ProjectHero>
      <ProjectCards></ProjectCards>
      <Footer></Footer>
      
    </div>
  )
}

export default Project