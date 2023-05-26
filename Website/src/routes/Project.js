import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import ProjectHero from "../components/ProjectHero"
import PricingCard from "../components/PricingCard"
import ProjectCards from "../components/ProjectCards"

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ProjectHero></ProjectHero>
      <ProjectCards></ProjectCards>
      <PricingCard></PricingCard>
      <Footer></Footer>
      
    </div>
  )
}

export default Project