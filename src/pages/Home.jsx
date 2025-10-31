import React from 'react'
import Hero from '../sections/Home/Hero'
import AboutUs from '../sections/Home/AboutUs'
import Experiences from '../sections/Home/Experiences'
import Projects from '../sections/Home/Projects'
import Contacts from '../sections/Home/Contacts'
import Footer from '../sections/Home/Footer'
import SEO from '../components/SEO'
import icon from '../assets/favicon.svg'

function Home() {
    return (
      <main className='flex flex-col space-y-30'>
        <SEO  image={icon} type="website" url="https://sevalino.netlify.app/" name="Sevalino Elfata" title="Sevalino Elfata | Software Engineer" description="I'm Sevalino Elfata, a Software Engineering student at IDN Boarding School, passionate about crafting clean, efficient, and user-focused applications." />
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