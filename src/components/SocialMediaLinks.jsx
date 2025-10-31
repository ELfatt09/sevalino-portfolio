import React from 'react'

import { motion } from 'motion/react'
import { contactsData } from '../data/contacts'

function SocialMediaLinks() {
    return (
        <div className='flex flex-row space-x-6'>
                        {contactsData.map((contact) => (
                            <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut", delay: contact.id * (0.5 / contactsData.length) } }}
                            key={contact.id}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img
                                src={contact.icon}
                                alt={contact.name}
                                className='w-10 h-10 hover:scale-110 transition-transform'
                            />
                            </motion.a>
                        ))}
                        </div>
    )
}

export default SocialMediaLinks