import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import Slide1 from "../{slider1}ng";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade,Autoplay } from 'swiper/modules';

import 'swiper/css/effect-fade';

//import images
import slider1 from '../../assets/images/slider/Slider1.png'
import slider2 from '../../assets/images/slider/Slider2.png'
import slider3 from '../../assets/images/slider/Slider2.jpg'
import slider4 from '../../assets/images/slider/Slider4.png'
import slider5 from '../../assets/images/slider/Slider5.png'
import slider6 from '../../assets/images/slider/Slider6.png'
import slider8 from '../../assets/images/slider/Slider8.png'
import slider9 from '../../assets/images/slider/council.png'


function Dashboard() {
  return (
	  <>
		<Swiper
			spaceBetween={30}
			effect={'fade'}
			// pagination={{
			//   clickable: true,
			// }}
			modules={[Autoplay,EffectFade]}
			className="mySwiper mx-auto max-w-7xl mb-10"
			autoplay={{
			delay: 4500,
			disableOnInteraction: false,
			}}    >
      <SwiperSlide><img src={slider1} className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider2} className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider3} className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider4} className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider5} className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider6} className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider8} className="w-full" /></SwiperSlide>
      <SwiperSlide><img src={slider9} className="w-full" /></SwiperSlide>
      
    </Swiper>
    </>
  );
}

export default Dashboard;
