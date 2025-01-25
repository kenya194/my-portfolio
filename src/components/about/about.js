import React from 'react'
import './about.css'
import pic from '../../assets/PIC2.jpeg'
import {FaAward} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {FaFreeCodeCamp} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About me</h2>

      <div className="container about__container">
      <div className='about__me'>
        <div className="about__me-image">
            <img src={pic} alt='pic' />
        </div>
      </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small>3+ years of coding </small>
            </article>

            <article className='about__card'>
              <ImBooks className='about__icon'/>
              <h5> Books</h5>
              <small> Digital fortress by Dan Brown</small>
              <small> Ego is the enemy by Ryan Holiday</small>
              <small> Power of self confidence by Brian tracy</small>
              <small> Ikigai by Hector Garcia</small>
            </article>

            <article className='about__card'>
              <FaFreeCodeCamp className='about__icon'/>
              <h5> Projects</h5>
              <small>15+ projects </small>
            </article>
          </div>

          <p>
          I am proficient software engineer with a three years’ experience in the field of web development, mobile app development, administrative assistantship, managing and implementing software application tools. I am well equipped with efficient problem-solving skills and exposed to Computer Science related concepts. I am passionate about driving technological advancement, committed to improving my skills with the least opportunity to grow and contribute to the tech industry. Artificial intelligence and Machine learning is my next stack to dive deep into.
          </p>

          <a href='#contact'className='btn btn-primary'>Let's talk</a>

        </div>
      </div>
      
    </section>
  )
}

export default About