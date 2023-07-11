import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Logo</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimanials">Testimanials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/varya_2908/"><BsInstagram /></a>
        <a href="https://github.com/Varvara-Maria/"><BsGithub /></a>
        <a href="https://facebook.com"><BsFacebook /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Varvara-Mariia Honchariuk</small>
      </div>
    </footer>
  )
}

export default Footer