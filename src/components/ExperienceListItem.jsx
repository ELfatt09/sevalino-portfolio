import React from 'react'
import { motion } from 'motion/react'

function ExperienceListItem({experience}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className='w-fit flex flex-col lg:flex-row px-5 py-3 gap-8 justify-center mx-auto'>
            <div className='w-full lg:w-[300px] h-auto  aspect-video max-h-[200px] rounded-lg overflow-hidden'>
                <img src={experience.image} alt={experience.title} className='w-full h-full object-cover object-center'/>
            </div>
      <div className='w-full max-w-[700px] flex flex-col space-y-2 md:space-y-4 '>
        <div className='flex flex-col space-y-0'>
          <h3 className='text-xl md:text-2xl '>{experience.title}</h3>
          <p className='text-xs md:text-sm text-text/60 font-medium md:font-bold'>at { experience.company }</p>
        </div>


        <p className='text-sm md:text-lg text-text/60 text-medium'>{experience.description}</p>
        <p className='text-sm text-text'>{ experience.start } {experience.end ? '-' : ''} { experience.end }</p>
        </div>
    </motion.div>
  )
}

export default ExperienceListItem