import React from 'react'
import './Header.css'
import CTA from './CTA.js'
import profile from '../../Assets/Mine.jpg'
import HeaderSocials from './HeaderSocials'



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