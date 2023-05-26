
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import ContactHero from "../components/ContactHero"
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ContactHero></ContactHero>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default Contact