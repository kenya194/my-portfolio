import React from 'react'
import './service.css'
import{BsFillClipboard2CheckFill} from 'react-icons/bs'
import{BsFillFileCodeFill} from 'react-icons/bs'
import{BsVectorPen} from 'react-icons/bs'

const Service = () => {
  return (
    <section id='services'>
        <h5>What i can offer</h5>
        <h2>Services</h2>

        <div className="container services__container">
          <div className="services">
            <div className="services__head">
            <h3>Sales Marketing</h3>
            </div>
              <div className="services__content">
                <article className="services__details">
                  <BsFillClipboard2CheckFill />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsFillClipboard2CheckFill />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsFillClipboard2CheckFill />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsFillClipboard2CheckFill />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                
              </div>
          </div>

          <div className="services">
            <div className="services__head">
            <h3>Web Development</h3>
            </div>
              <div className="services__content">
                <article className="services__details">
                  <BsFillFileCodeFill />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsFillFileCodeFill />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsFillFileCodeFill />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsFillFileCodeFill />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                
              </div>
          </div>

          <div className="services">
            <div className="services__head">
            <h3>Writing</h3>
            </div>
              <div className="services__content">
                <article className="services__details">
                  <BsVectorPen />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsVectorPen />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsVectorPen />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                <article className="services__details">
                  <BsVectorPen />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, architecto?</p>
                </article>
                
              </div>
          </div>

        </div>
    </section>
  )
}

export default Service