import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <p className='copyright'>Copyright © <br /> Mattern Studios</p>
        <div className='social-icons'>
            <a href='mailto:bethany.a.cable@gmail.com' target="_blank"><AiFillMail size={'2em'} style={{color: '#E5E5E5'}}/></a>
            <a href='https://www.linkedin.com/in/bethany-a-mattern/' target="_blank"><AiFillLinkedin size={'2em'} style={{color: '#E5E5E5'}}/></a>
            <a href='https://github.com/bethanycable' target="_blank"><AiFillGithub size={'2em'} style={{color: '#E5E5E5'}}/></a>
        </div>
    </div>
  )
}

export default Footer
