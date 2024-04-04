import React, { useState } from 'react';
import './Slider.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

const SliderData = [
    {
      image: '/pexels-aleksandar-pasaric-2411688.jpg',
      description: 'ƒ/8.0, ISO 200, 1/200s Alley'
    },
    {
      image: '/pexels-irina-iriser-1381679.jpg',
      description: 'ƒ/1.8, ISO 200, 1/1000s Nature'
    },
    {
      image: '/pexels-lil-artsy-3166841.jpg',
      description: 'ƒ/8.0, ISO 400, 1/60s Books'
    },
    {
      image: '/pexels-mariia-ivanova-17725290.jpg',
      description: 'ƒ/4.5, ISO 200, 1/320s Camera'
    },
    {
      image: '/pexels-vandana-vankhede-17595150.jpg',
      description: 'ƒ/5.6, ISO 320, 1/100s Camera'
    }
];

function Slider() {
  return (
    <Swiper
      scrollbar={{
      hide: false,
      }}
      modules={[Scrollbar]}
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}     
    >
    {SliderData.map((slide, idx) => (
    <SwiperSlide key={idx}>
      <div className='slide'>
          <img src={slide.image} alt={slide.description} />
          <p>{slide.description}</p>
      </div>
    </SwiperSlide>
      ))}
    </Swiper>
    
  );
}

  export { SliderData };
  export default Slider;