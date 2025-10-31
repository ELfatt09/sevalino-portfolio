import React from 'react'
import { motion } from 'motion/react'
import diagonalArrow from '../assets/graphics/diagonal-arrow.svg'

function ProjectCard({ project }) {
    return (
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className='flex flex-col space-y-7 p-3 w-full max-w-[400px]'>
            <img src={project.image} alt={project.title} className='w-auto h-full max-h-[270px] object-cover rounded-lg' />
            <div className='flex flex-col space-y-3'>
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='flex flex-row space-x-3 w-fit items-center group'>
                    <h3 className='text-xl md:text-2xl font-semibold group-hover:text-primary transition duration-300 ease-in-out'>{project.title} </h3>
                    <img src={diagonalArrow} alt="external link" className='w-5 h-5 mt-1 group-hover:scale-125 transition duration-300 ease-in-out' />
                </a>
                <p className='text-base md:text-lg text-text/60'>{project.description}</p>
          </div>
    </motion.div>
  )
}

export default ProjectCard