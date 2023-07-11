import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from  'react-icons/fa';
import {FiUsers} from  'react-icons/fi';
import {BsFolder} from  'react-icons/bs';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image"><img src={ME} alt="About Image" /></div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>30 Worldwide</small>
            </article>
            <article className='about__card'>
              <BsFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>15 Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure molestias repudiandae doloribus quae excepturi! Dicta deleniti eos qui ipsam maiores, iste vel ducimus rerum numquam.
          </p>

          <a href="#contact" className='btn btn-pr'>Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About