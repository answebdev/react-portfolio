import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email.js:
    emailjs
      .sendForm(
        'service_467yj2v',
        'template_0kqk8fo',
        formRef.current,
        'NpHrEQUXTPUl67U11'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact'>
      <div className='contact-bg'></div>
      <div className='contact-wrapper'>
        <div className='contact-left'>
          <h1 className='contact-title'>Let's discuss your project</h1>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img src={Phone} alt='' className='contact-icon' />
              +1 1234 556 75
            </div>
            <div className='contact-info-item'>
              <img className='contact-icon' src={Email} alt='' />
              contact@lama.dev
            </div>
            <div className='contact-info-item'>
              <img className='contact-icon' src={Address} alt='' />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <p className='contact-description'>
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='user_name' />
            <input type='text' placeholder='Subject' name='user_subject' />
            <input type='text' placeholder='Email' name='user_email' />
            <textarea rows='5' placeholder='Message' name='message' />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
