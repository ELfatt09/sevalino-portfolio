import { useEffect} from 'react'
import SectionLayout from '../../layout/SectionLayout'
import { skillsData } from '../../data/skills'
import { motion, useAnimation} from 'motion/react'
import { useInView } from 'react-intersection-observer'
import SocialMediaLinks from '../../components/SocialMediaLinks'

function AboutUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // biar cuma animasi sekali
    threshold: 0.2, // 20% dari parent keliatan
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // jeda antar skill
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
      <SectionLayout id="about">
          <div className='w-full flex flex-col space-y-10 md:space-y-12 justify-center' >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className='flex flex-col space-y-1 md:space-y-3 w-fit mx-auto'>
                    <h2 className='text-2xl md:text-4xl mx-5 md:mx-10'>About My Self</h2>
                    <div className='w-full h-1 bg-primary mx-auto rounded-full' />
              </motion.div>
              <div className='w-fit mx-auto space-y-10 space-x-24 flex flex-col lg:flex-row justify-center'>
                  <div className='w-full flex flex-col space-y-8'>
                      <div className='w-full flex flex-col space-y-6'>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                        className='text-xl md:text-3xl font-medium'
                        
              >Get To Know About My Self
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                className='text-sm md:text-lg text-text/70 leading-[1.3]'>
                        I'm Sevalino Elfata, a Software Engineering student at IDN Boarding School, passionate about crafting clean, efficient, and user-focused applications.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                className='text-sm md:text-lg text-text/70 leading-[1.3]'>
                        I enjoy transforming ideas into functional, scalable solutions - and continuously improving through hands-on learning and real-world projects.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                className='text-sm md:text-lg text-text/70 leading-[1.3]'>
                        I'm currently open for internship opportunities to grow in a professional environment, while also available for freelance projects, helping individuals and businesses bring their digital ideas to life.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
                className='text-sm md:text-lg text-text/70 leading-[1.3]'>
                Let's connect and build something impactful together.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className='w-full'>
              <SocialMediaLinks />
            </motion.div>
                  </div>
                  <div className='w-full flex flex-col space-y-6'>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
              className='text-xl md:text-3xl font-medium'>And these are what i can do</motion.h3>
                       <motion.div
      ref={ref}
      className="flex flex-wrap gap-3"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {skillsData.map((skill, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="w-fit y-fit"
        >
          <SkillCard skill={skill} />
        </motion.div>
      ))}
    </motion.div>
                  </div>
              </div>
          </div>
      </SectionLayout>
  )
}

function SkillCard({ skill }) { 
    return (
        <p className='px-3 py-1 md:px-5 md:py-2 bg-background text-base md:text-xl text-text hover:text-primary rounded-sm border-2 border-text hover:border-primary transition duration-300 ease-in-out'>{ skill }</p>
    )
}

export default AboutUs