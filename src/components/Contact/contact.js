import React from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaSnapchat} from 'react-icons/fa'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>eamankwah698@gmail.com</h5>
            <a href='mailto:eamankwah698@gmail.com' target='__blank'>send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icons'/>
            <h4>Whatsapp</h4>
            <a href='https://api.whatsapp.com/send?phone=+233554184099'target='__blank'>send a text</a>
          </article>

          <article className="contact__option">
            <FaSnapchat className='contact__option-icons'/>
            <h4>Snapchat</h4>
            <h5>Join the fun on snapchat &#x1F4F7;  </h5>
            <a href='https://t.snapchat.com/3vGiEXeQ' target='__blank'>Add up </a>
          </article>
        </div>

        <form action=''>
          <input type="text" name='name' placeholder='Your full name'  className='placeHolder-text' required />
          <input type="email" name='email' placeholder='Your Email' className='placeHolder-text' required />
          <textarea name='message' rows='7' placeholder='Your Message' className='placeHolder-text' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact