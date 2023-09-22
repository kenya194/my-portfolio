import React from 'react'
import './About.css'
import pic from '../../Assets/pexels-oussama-bergaoui-463684.jpg'
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
              <small>1+ years of coding </small>
            </article>

            <article className='about__card'>
              <ImBooks className='about__icon'/>
              <h5> Books</h5>
              <small> The mountain is you</small>
            </article>

            <article className='about__card'>
              <FaFreeCodeCamp className='about__icon'/>
              <h5> Projects</h5>
              <small>15+ projects </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis eum deserunt magni quo aspernatur dicta adipisci culpa, cupiditate reprehenderit? Repellendus incidunt deserunt debitis totam expedita tempora eius? Rem, error!
          </p>

          <a href='#contact'className='btn btn-primary'>Let's talk</a>

        </div>
      </div>
      
    </section>
  )
}

export default About