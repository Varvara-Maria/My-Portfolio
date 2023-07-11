import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import './Header.css'


const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/varya_2908/" target='_blank'><BsInstagram /></a>
        <a href="https://github.com/Varvara-Maria" target='_blank'><BsGithub /></a>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
    </div>
  )
}

export default Headersocials