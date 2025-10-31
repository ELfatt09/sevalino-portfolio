
import SectionLayout from '../../layout/SectionLayout'
import { experiencesData } from '../../data/experiences'
import ExperienceListItem from '../../components/ExperienceListItem'
import { motion } from 'motion/react'

function Experiences() {
  return (
      <SectionLayout id="experiences">
      <div className='w-full flex flex-col space-y-15 justify-center' >
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className='flex flex-col space-y-1 md:space-y-3 w-fit mx-auto'>
                    <h2 className='text-2xl md:text-4xl '>All My Experiences</h2>
                    <div className='w-1/3 h-1 bg-primary mx-auto rounded-full' />
              </motion.div>
              <div className='w-full flex flex-col space-y-9 justify-center'>
                  {experiencesData.map((experience) => (
                      <ExperienceListItem key={experience.id} experience={experience} />
                  ))}
              </div>
            </div>
    </SectionLayout>
  )
}

export default Experiences