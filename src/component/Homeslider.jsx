import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Homeslider=()=>{
    return (
        <>
        <Swiper 
        cssMode={true}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper">
          <SwiperSlide>
            <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" className="w-full"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg" className="w-full"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" className="w-full"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" className="w-full"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg" className="w-full"></img>
          </SwiperSlide>
        </Swiper>
      </>
    )
}
export default Homeslider;