import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from "react-icons/fi"

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo'>Black Mirth</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

        <div className='footer__socials'>
          <a href='https://twitter.com'><BsTwitter/></a>
          <a href='https://www.linkedin.com/in/ernest-amankwah-41746320b' target='__blank'> <BsLinkedin/> </a>
        <a href='https://github.com/kenya194' target='__blank'> <BsGithub/> </a>
        <a href='https://instagram.com/black_mirth?igshid=OGQ5ZDc2ODk2ZA==' target='__blank'> <FiInstagram/> </a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; Ernest's personal site. All rights reserved.</small>
        </div>
      
    </footer>
  )
}

export default Footer