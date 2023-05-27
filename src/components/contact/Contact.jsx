import React, {useState, onSubmit} from 'react'
import "./contact.css"
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://sheet.best/api/sheets/f8b17ece-26f3-4600-b92d-815857edc06a', formData) // Change the endpoint to match your backend setup
      .then((response) => {
        console.log('Data saved successfully:', response);
        // Reset the form if needed
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email. 👋</p>
          <p className='contact__details'><button className='btn' onClick={() => window.location = 'mailto:rajendrasubedi2002@gmail.com'}>info@rajendra2002.com.np</button></p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">

              <input 
                type="text"
                className="contact__form-input"
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder='Insert your name' />
            </div>

            <div className="contact__form-div">

              <input 
                type="email"
                name='email'
                className="contact__form-input" 
                value={formData.email}
                onChange={handleChange}
                placeholder='Insert your email' />
            </div>

          </div>
          
            <div className="contact__form-div">

              <input
                type="text" 
                name="subject"
                value={formData.subject}
                className="contact__form-input" 
                onChange={handleChange}
                placeholder='Insert your subject' />
            </div>

            <div className="contact__form-div contact__form-area">

              <textarea
                name="message" 
                cols="30" 
                rows="10" 
                value={formData.message}
                className='contact__form-input' 
                onChange={handleChange}
                placeholder='Write your message...'>
                </textarea>

            </div>

            <button className='btn' type='submit' onClick={onSubmit}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
