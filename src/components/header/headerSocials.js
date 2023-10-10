import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ernest-amankwah-41746320b' target='__blank'> <BsLinkedin/> </a>
        <a href='https://github.com/kenya194' target='__blank'> <BsGithub/> </a>
        <a href='https://instagram.com/black_mirth?igshid=OGQ5ZDc2ODk2ZA==' target='__blank'> <BsInstagram/> </a>
    </div>
  )
}

export default HeaderSocials