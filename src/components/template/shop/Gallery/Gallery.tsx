"use client"
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

const Gallery:React.FC = ()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState<null>(null);

  return (
    <section className="block">
        <div className="block select-none">
        <Swiper
     
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image src='/assets/images/p-1.webp' alt="image"  width={100} height={100} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/images/p-1.webp' alt="image"  width={100} height={100} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/images/p-1.webp' alt="image"  width={100} height={100} className='w-full'/>
        </SwiperSlide>
    
      
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper-gallery mt-4"
      >
        <SwiperSlide>
          <Image src='/assets/images/p-1.webp' alt="image"  width={100} height={100} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/images/p-1.webp' alt="image"  width={100} height={100} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/assets/images/p-1.webp' alt="image"  width={100} height={100} className='w-full'/>
        </SwiperSlide>
      </Swiper>
        </div>
    </section>
  )
}

export default Gallery