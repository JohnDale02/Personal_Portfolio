import React from 'react'
import Navbar from '../components/HeroFooterNav/Navbar'
import Hero from '../components/HeroFooterNav/Hero'
import Footer from "../components/HeroFooterNav/Footer"
import ProjectCards from "../components/Projects/ProjectCards"

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <ProjectCards></ProjectCards>
      <Footer></Footer>
    </div>
  )
}

export default Home