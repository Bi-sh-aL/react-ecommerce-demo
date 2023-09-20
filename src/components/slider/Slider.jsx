import React from "react";
import { Autoplay,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import ProductData from "../../data/ProductData";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss'
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="s-container container">
      <Swiper
              modules={[Navigation,Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              navigation={true}
              loop={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640:{
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                0:{
                  slidesPerView: 1
                }
              }}
      >
        {ProductData.map((a) => (
          
          <SwiperSlide key={a.id}>
            <Link to={`/collections/product/${a.id}`}> 
            <div className="left-s">
              <div className="name">
                <span>{a.name}</span>
                <span>{a.detail}</span>
              </div>
              <span>{a.price}$</span>
              <a href="#">Add to bag</a>
            </div>
            <img src={a.img} alt="products" className="img-p" />
            </Link>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
