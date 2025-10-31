import React from 'react'
import { motion } from 'motion/react'
import SectionLayout from '../../layout/SectionLayout'
import { projectsData } from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

function Projects() {
    return (
        <SectionLayout id="projects">
            <div className='w-full flex flex-col space-y-10 md:space-y-15 justify-center' >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                    className='flex flex-col space-y-1 md:space-y-3 w-fit justify-start '>
                    <h2 className='text-2xl md:text-4xl '>Things I've Built</h2>
                    <div className='w-1/3 h-1 bg-primary rounded-full' />
                </motion.div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </SectionLayout>
    )
}

export default Projects