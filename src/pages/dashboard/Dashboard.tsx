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

//icons
import { ArrowLeft, ArrowRight } from 'iconsax-react'


//import images
import slider1 from '../../assets/images/slider/Slider1.png'
import slider2 from '../../assets/images/slider/Slider2.png'
import slider3 from '../../assets/images/slider/Slider2.jpg'
import slider4 from '../../assets/images/slider/Slider4.png'
import slider5 from '../../assets/images/slider/Slider5.png'
import slider6 from '../../assets/images/slider/Slider6.png'
import slider8 from '../../assets/images/slider/Slider8.png'
import slider9 from '../../assets/images/slider/council.png'


function Dashb80vh() {
	 //swipe 

      const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	
  return (
	  <>
		<Swiper
			  spaceBetween={30}
			  effect={'fade'}
			modules={[EffectFade,Autoplay,Navigation, Pagination]}
			className="mySwiper -z-20 relative h-80vh mb-20 w-full text-center"
			navigation={{
			  prevEl: navigationPrevRef.current,
			  nextEl: navigationNextRef.current,
			}}
		   onBeforeInit={(swiper) => {
				swiper.params.navigation.prevEl = navigationPrevRef.current;
				swiper.params.navigation.nextEl = navigationNextRef.current;
		   }}
		   autoplay={{
			delay: 4500,
			disableOnInteraction: false,
		  }}
		  >
      <SwiperSlide><img src={slider1} className="w-full h-80vh" /></SwiperSlide>
      <SwiperSlide><img src={slider2} className="w-full h-80vh" /></SwiperSlide>
      <SwiperSlide><img src={slider3} className="w-full h-80vh" /></SwiperSlide>
      <SwiperSlide><img src={slider4} className="w-full h-80vh" /></SwiperSlide>
      <SwiperSlide><img src={slider5} className="w-full h-80vh" /></SwiperSlide>
      <SwiperSlide><img src={slider6} className="w-full h-80vh" /></SwiperSlide>
      <SwiperSlide><img src={slider8} className="w-full h-80vh" /></SwiperSlide>
      <SwiperSlide><img src={slider9} className="w-full h-80vh" /></SwiperSlide>
      <div className='w-full  h-full absolute top-4 px-6 cursor-pointer flex justify-between items-center'>
            <div ref={navigationPrevRef} className='p-2 bg-slate-900/60  z-20 text-slate-200 rounded-md sha80vhmd'>
              <ArrowLeft />
            </div>
            <div ref={navigationNextRef} className='p-2 bg-slate-900/60  z-20 text-slate-200  rounded-md sha80vhmd'>
					  <ArrowRight />
			</div>
        </div>
    </Swiper>
    </>
  );
}

export default Dashb80vh;
