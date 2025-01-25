import React from 'react'
import './header.css'
import CTA from './cta.js'
import profile from '../../assets/passport_pic.jpg'
import HeaderSocials from './headerSocials'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amankwah Ernest K.K</h1>
        <h5 className="text-light">a SOFTWARE ENGINEER</h5>
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