import React from 'react'
import './header.css'
import CTA from './cta.js'
import profile from '../../assets/blackking.jpg'
import HeaderSocials from './headerSocials'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amankwah Ernest</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={profile} alt='Profile'/>
        </div>


      </div>
    </header>
  )
}

export default Header;