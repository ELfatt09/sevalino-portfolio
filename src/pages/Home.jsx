import React from 'react'
import Hero from '../sections/Home/Hero'
import AboutUs from '../sections/Home/AboutUs'
import Experiences from '../sections/Home/Experiences'
import Projects from '../sections/Home/Projects'
import Contacts from '../sections/Home/Contacts'
import Footer from '../sections/Home/Footer'

function Home() {
    return (
      <main className='flex flex-col space-y-30'>
        <Hero />
        <AboutUs />
        <Experiences />
        <Projects />
        <Contacts />
        <Footer />
      </main>
  )
}

export default Home