import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from "../components/Footer"
import ProjectCards from "../components/ProjectCards"

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