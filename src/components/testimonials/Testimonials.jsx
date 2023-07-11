import React from 'react'
import './Testimonials.css';
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';


const data = [
  {
    avatar: AVATAR1,
    name: "Shahier Nashaat",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem hic qui similique porro reprehenderit sit, cumque nesciunt quae est vel vitae aliquam ab delectus dicta sunt quaerat voluptas ullam neque.",
  },
  {
    avatar: AVATAR2,
    name: "Chimwewme Sinyinza",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem hic qui similique porro reprehenderit sit, cumque nesciunt quae est vel vitae aliquam ab delectus dicta sunt quaerat voluptas ullam neque.",
  },
  {
    avatar: AVATAR3,
    name: "Chimwewme Sinyinza",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem hic qui similique porro reprehenderit sit, cumque nesciunt quae est vel vitae aliquam ab delectus dicta sunt quaerat voluptas ullam neque.",
  },
  {
    avatar: AVATAR4,
    name: "Chimwewme Sinyinza",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem hic qui similique porro reprehenderit sit, cumque nesciunt quae est vel vitae aliquam ab delectus dicta sunt quaerat voluptas ullam neque.",
  },
  
];


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Revie From Clients</h5>
      <h2>Testemonia</h2>

      <Swiper className="container testimonials_container">
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__review'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials