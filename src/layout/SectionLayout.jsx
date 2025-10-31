import React from 'react'

function SectionLayout({id, children}) {
  return (
      <section id={id} className='px-5 md:px-10 lg:px-30'>
        {children}
    </section>
  )
}

export default SectionLayout