import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserPin} from 'react-icons/bi'
import {FaLaptopCode} from 'react-icons/fa'
import {RiCustomerServiceLine} from 'react-icons/ri'
import {IoIosContact} from 'react-icons/io'


const Navbar = () => (
  <nav>
    <a href='#'> <AiOutlineHome/> </a>
    <a href='#about'> <BiUserPin/> </a>
    <a href='#experience'> <FaLaptopCode/> </a>
    <a href='#services'> <RiCustomerServiceLine/> </a>
    <a href='#contact'> <IoIosContact/></a>
  </nav>
)

export default Navbar