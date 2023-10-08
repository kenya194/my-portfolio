import React from 'react'
import './Footer.css'
import {BsTwitter} from 'react-icons/bs'

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
        </div>

        <div className='footer__copyright'>
          <small>&copy; Ernest's personal site. All rights reserved.</small>
        </div>
      
    </footer>
  )
}

export default Footer