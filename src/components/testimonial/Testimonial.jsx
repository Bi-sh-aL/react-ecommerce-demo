import React from 'react'
import './testimonial.scss'
import  Hero from '../../assets/testimonialHero.png'
import TestimonialsData from '../../data/TestimonialData'
import { Swiper,SwiperSlide } from 'swiper/react'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Testimonial() {
  return (
    <div className="testimonial-container">
  
      <div className="t-wrapper">
      <div className="test-container">
        <span>Top Rated</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fuga.</span>
        </div>

      <img src={Hero} alt="" />

      <div className="test-container">
        <span>100k</span>
        <span>Happy customer with us</span>
      </div>
      </div>

      <div className="reviews">Reviews</div>
      <div className="carousel">
        <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={33}
        breakpoints={{
          856:{
            slidesPerView: 3
          },
          640:{
            slidesPerView: 2
          },
          0:{
            slidesPerView: 1
          }
        }}
        className="t-carousel"
        >
          {TestimonialsData.map((a)=>(
             <SwiperSlide key={a.id}>
              <div className="testimonial">
                <img src={a.image} alt="" />
                <span>{a.comment}</span>
                <hr />
                <span>{a.name}</span>
              </div>
             </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial