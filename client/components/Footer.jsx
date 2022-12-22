import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <p>Copyright © <br /> Mattern Studios</p>
        <div className='social-icons'>
            <a href='mailto:bethany.a.cable@gmail.com'><AiFillMail /></a>
            <a href='https://www.linkedin.com/in/bethany-a-mattern/'><AiFillLinkedin /></a>
            <a href='https://github.com/bethanycable'><AiFillGithub /></a>
        </div>
    </div>
  )
}

export default Footer
