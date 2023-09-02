import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {RiCustomerServiceLine} from 'react-icons/ri'
import {IoIosContact} from 'react-icons/io'

import { useState } from 'react'


const Navbar = () => {

  const[activeNav, setActiveNav] = useState('#')

  return(
    <nav>
    <a href='#' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
    <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <BiUserPin/> </a>
    <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <FaLaptopCode/> </a>
    <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiCustomerServiceLine/> </a>
    <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <IoIosContact/></a>
    </nav>
    )
  }

export default Navbar