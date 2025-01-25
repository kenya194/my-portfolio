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
            <h3> Consultation Offers</h3>
            </div>
              <div className="services__content">
                <article className="services__details">
                  <BsFillClipboard2CheckFill />
                  <p>Developing standard websites including E-commence and portfolio sites.( Freelancing)</p>
                </article>
                <article className="services__details">
                  <BsFillClipboard2CheckFill />
                  <p>Building standard progressive web applications and mobile applications </p>
                </article>
                <article className="services__details">
                  <BsFillClipboard2CheckFill />
                  <p>Building AI agents to simplify tasks using LLM models and algorithms</p>
                </article>
                <article className="services__details">
                  <BsFillClipboard2CheckFill />
                  <p>Advice in the tech space, and choosing career paths </p>
                </article>
                
              </div>
          </div>

          {/* <div className="services">
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
          </div> */}

          {/* <div className="services">
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
          </div> */}

        </div>
    </section>
  )
}

export default Service