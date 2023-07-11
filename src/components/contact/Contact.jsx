import React from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_naprpma', 'template_cp6z94m', form.current, 'PhgvgsCyJAJxrTpJK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail />
            <h4>Email</h4>
            <h5>varyaa2002@gmail.com</h5>
            <a href="mailto:varyaa2002@gmail.com">Send a massega</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+380995610817</h5>
            <a href="https://api.whatsapp.com/send?phone+380995610817">Send a massega</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram />
            <h4>Instagram</h4>
            <h5>varya_2908</h5>
            <a href="https://www.instagram.com/varya_2908/">Send a massega</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact