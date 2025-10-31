import React from 'react'
import {motion} from 'motion/react'
import SectionLayout from '../../layout/SectionLayout'
import emailSvg from '../../assets/graphics/email.svg'
import phoneSvg from '../../assets/graphics/phone.svg'
import SocialMediaLinks from '../../components/SocialMediaLinks'
import { ContactForm } from '../../components/ContactForm'

function Contacts() {
    return (
        <SectionLayout id="contacts">
            <div className='w-full flex flex-col lg:flex-row gap-15 justify-center' >
                <div className='w-full flex flex-col space-y-7'>
                    <div className='flex flex-col space-y-5'>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                            className='text-4xl md:text-6xl leading-normal'>
                            Get In Touch
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                            className='text-base md:text-lg text-text/70 leading-normal'>
                            I’m always open to discussing new projects, collaboration opportunities, or internship roles. If you think I’d be a good fit for your team or project, feel free to reach out, I’d love to connect!
                        </motion.p>
                    </div>
                    <div className='flex flex-col space-y-10'>
                        <div className='flex flex-col space-y-3'>
                            <motion.a
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                                href='mailto:sevalinoelfata8@gmail.com' className='flex flex-row space-x-3 items-center'>
                                <img src={emailSvg} alt="email icon" className='w-8 h-8' />
                                <p className='text-lg md:text-xl underline'>sevalinoelfata8@gmail.com</p>
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
                                href='https://api.whatsapp.com/send/?phone=%2B6281381593080&text&type=phone_number' className='flex flex-row space-x-3 items-center'>
                                <img src={phoneSvg} alt="phone icon" className='w-8 h-8' />
                                <p className='text-lg md:text-xl'>+62 813-8159-3080</p>
                            </motion.a>
                        </div>
                        <SocialMediaLinks />
                    </div>
                </div>
                <ContactForm />

            </div>
        </SectionLayout>
    )
}

export default Contacts