"use client"
import TitleCenter from '@/components/module/TitleCenter/TitleCenter'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCart from '@/components/module/ProductCart/ProductCart';

const SuggestProducts:React.FC = ()=>{
  return (
    <section className="block mt-12">
        <div className="container">
        <TitleCenter 
            title='محصولات پیشنهادی'
            />
        <div className="block mt-8">
                <Swiper 
                loop={true}
                 slidesPerView={5}
                 spaceBetween={30}
                 breakpoints={{
                    1024:{
                        slidesPerView:5,
                        spaceBetween:30
                    },
                    768:{
                        slidesPerView:3,
                        spaceBetween:20
                    }, 
                    640:{
                        slidesPerView:2,
                        spaceBetween:10
                    },
                    520:{
                        slidesPerView:2,
                        spaceBetween:10
                    },
                    320:{
                        slidesPerView:1,
                    },
                    
                 }}
                className="mySwiper select-none">
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCart/>
                    </SwiperSlide>
                 </Swiper>
                </div>
        </div>
    </section>
  )
}

export default SuggestProducts