import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9au4m5r', 'template_w1talps', form.current, {
        publicKey: 'rUfriVxjUtZlSxzE1',
      })

      .then(
        (response) => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div id='contact' className='contactContainer'>
      <h1 className='contactSectionTitle'>Contact Me</h1>

      <p className='contactDesc'>
        Please fill out the form if you would like to connect
      </p>
      <form className='contactForm' ref={form} onSubmit={sendEmail}>
        <input
          type='text'
          className='name'
          placeholder='Your name'
          name='your_name'
        />
        <input
          type='email'
          className='email'
          placeholder='Your email'
          name='your_email'
        />
        <textarea
          className='msg'
          name='message'
          row='5'
          placeholder='Your message'
        ></textarea>
        <button type='submit' value='Send' className='submitBtn'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
