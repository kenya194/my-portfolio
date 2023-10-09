import React from 'react'
import resume from '../../Assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        < a href= {resume} download className='btn'>Download CV</a>
        < a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA