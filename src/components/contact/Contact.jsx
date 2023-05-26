import React, {useState} from 'react'
import "./contact.css"
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    axios.post(`https://sheet.best/api/sheets/f8b17ece-26f3-4600-b92d-815857edc06a`, {
      name, email, subject, message
    })
  }

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" onChange={(e)=> setName(e.target.value)} placeholder='Insert your name' />
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input" onChange={(e)=> setEmail(e.target.value)} placeholder='Insert your email' />
            </div>
          </div>
          
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" onChange={(e)=> setSubject(e.target.value)} placeholder='Insert your subject' />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="" id="" cols="30" rows="10" className='contact__form-input' onChange={(e)=> setMessage(e.target.value)} placeholder='Write your message...'></textarea>
            </div>

            <button className='btn' type='submit' onClick={onSubmit}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
