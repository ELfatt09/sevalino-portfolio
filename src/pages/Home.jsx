import React from 'react'
import Hero from '../sections/Home/Hero'
import AboutUs from '../sections/Home/AboutUs'
import Experiences from '../sections/Home/Experiences'
import Projects from '../sections/Home/Projects'
import Contacts from '../sections/Home/Contacts'
import Footer from '../sections/Home/Footer'

function Home() {
    return (
      <>
        <Hero />
        <AboutUs />
        <Experiences />
        <Projects />
        <Contacts />
        <Footer />
      </>
  )
}

export default Home