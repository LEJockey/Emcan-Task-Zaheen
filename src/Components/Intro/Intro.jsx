import React from "react";
import "./Intro.css";
import image from  '../../assets/sincerely-media.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Intro = () => {

  return (
    <main className=" position-relative">
      
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <div className="layer">
            <h1>
              Start your learning journey with us
            </h1>

            <h2>
              Grab The Chances & Invest in your future
            </h2>

            <button className="Btn">
              Get Started

            </button>
            
          </div>
          <img src={image} alt="" /></SwiperSlide>
        <SwiperSlide>
          <div className="layer">

          </div>
          <img src={image} alt="" /></SwiperSlide>
        <SwiperSlide>
          <div className="layer">

          </div>
          <img src={image} alt="" /></SwiperSlide>
        
      </Swiper>


    </main>
  );
};
