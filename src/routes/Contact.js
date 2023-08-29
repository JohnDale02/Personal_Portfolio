
import React from 'react'
import Navbar from '../components/HeroFooterNav/Navbar'
import Footer from "../components/HeroFooterNav/Footer"
import ContactHero from "../components/Contact/ContactHero"
import ContactForm from '../components/Contact/ContactForm'

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