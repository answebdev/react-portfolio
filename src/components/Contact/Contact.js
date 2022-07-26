import React from 'react';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import './Contact.css';

const Contact = () => {
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
          <form>
            <input type='text' placeholder='Name' name='user_name' />
            <input type='text' placeholder='Subject' name='user_subject' />
            <input type='text' placeholder='Email' name='user_email' />
            <textarea rows='5' placeholder='Message' name='message' />
            <button>Submit</button>
          </form>
          {/* <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
