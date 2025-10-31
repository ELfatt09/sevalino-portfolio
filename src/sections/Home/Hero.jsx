import React from 'react'
import SectionLayout from '../../layout/SectionLayout'
import TypingEffectText from '../../components/TypingEffectText'
import cv from '../../assets/docments/cv_programmer_sevalino.pdf'
import Scene from '../../components/Scene'

function Hero() {
    return (
        <SectionLayout id="hero">
            <div className='flex flex-col-reverse lg:flex-row items-center justify-start'>
                <div className='w-full lg:w-3/5 flex flex-col space-y-10 md:space-y-15 bg-transparent'>
                    <h1 className='text-4xl md:text-7xl leading-[1.2] '>
                        In Need of a 
                        <br />
                        <span className='text-primary whitespace-nowrap font-medium'><TypingEffectText textArray={['Software Engineer', 'Backend Developer', 'Website Developer', 'Web Designer']} lastTextFormat={"?"} /></span>
                        <br />
                        You’ve Just Found One.
                    </h1>
                    <div className='flex flex-row space-x-3 justify-start items-center text-sm md:text-xl'>
                        <a href="#contacts" className='bg-primary text-background hover:bg-primary/70 transition duration-300 py-3 px-5 md:py-4 md:px-6  font-semibold rounded'>My Contact</a>
                        <p className='text-sm md:text-base font-semibold text-text/60' >or</p>
                        <a target='_blank' href={cv} className='bg-background text-text hover:text-primary transition duration-300 border-text hover:border-primary border-2 py-3 px-5 md:py-4 md:px-6 rounded'>Come Check My CV</a>
                    </div>
                </div>
                <div className='w-full lg:w-2/5 h-60 md:h-[480px] z-20 overflow-clip'>
                    <Scene />
                </div>
            </div>
        </SectionLayout>
    )
}

export default Hero