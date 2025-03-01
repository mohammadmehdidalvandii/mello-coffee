"use client"
import ProductCart from '@/components/module/ProductCart/ProductCart'
import TitleCenter from '@/components/module/TitleCenter/TitleCenter'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Products:React.FC = ()=>{
  return (
    <section className="block mt-12">
        <div className="container">
            <TitleCenter 
            title='محصولات '
            />
            <div className="block mt-8 shadow-md shadow-secondary-100 p-4 rounded-lg">
                <div className="flex gap-4 pb-3 border-b border-b-secondary-200 overflow-x-scroll xs:overflow-auto">
                    <button className="block outline-none border-none font-iranBold text-sm text-black cursor-pointer duration-300 ease-linear hover:text-primary-100 ">محصولات</button>
                    <button className="block outline-none border-none font-iranBold text-sm text-black cursor-pointer duration-300 ease-linear hover:text-primary-100 ">جدیدترین محصولات</button>
                    <button className="block outline-none border-none font-iranBold text-sm text-black cursor-pointer duration-300 ease-linear hover:text-primary-100 ">پروفروش ترین محصولات</button>
                    <button className="block outline-none border-none font-iranBold text-sm text-black cursor-pointer duration-300 ease-linear hover:text-primary-100 ">قهوه های ملو </button>
                    <button className="block outline-none border-none font-iranBold text-sm text-black cursor-pointer duration-300 ease-linear hover:text-primary-100 ">قهوه سازها</button>
                    <button className="block outline-none border-none font-iranBold text-sm text-black cursor-pointer duration-300 ease-linear hover:text-primary-100 ">لوازم جانبی</button>
                </div>
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
        </div>
    </section>
  )
}

export default Products