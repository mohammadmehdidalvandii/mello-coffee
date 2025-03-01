import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Confidence:React.FC = ()=>{
  return (
    <section className="block mt-12">
        <div className="container">
            <div className="flex items-center justify-center gap-3">
                <span className="block text-2xl text-success">
                    <FaStar/>
                </span>
                <span className="block text-2xl text-primary-100 font-iranBlack">چرا از ملو کافی خرید کنم</span>
            </div>
            <div className="grid mt-8 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center bg-white shadow-md shadow-secondary-100 rounded-2xl p-4 ">
                    <Image src='/assets/images/fast-delivery.png.webp' alt='confidence' width={100} height={100} className='block'/>
                    <span className="block mt-4 font-bold text-base font-iranBold">ارسال  سریع  سفارش</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white shadow-md shadow-secondary-100 rounded-2xl p-4 ">
                    <Image src='/assets/images/retreat.png.webp' alt='confidence' width={100} height={100} className='block'/>
                    <span className="block mt-4 font-bold text-base font-iranBold">جشنوار های فروش</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white shadow-md shadow-secondary-100 rounded-2xl p-4 ">
                    <Image src='/assets/images/quality.png.webp' alt='confidence' width={100} height={100} className='block'/>
                    <span className="block mt-4 font-bold text-base font-iranBold">تضمین کیفیت</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white shadow-md shadow-secondary-100 rounded-2xl p-4 ">
                    <Image src='/assets/images/customer-service.png.webp' alt='confidence' width={100} height={100} className='block'/>
                    <span className="block mt-4 font-bold text-base font-iranBold">پشتیبانی سریع</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white shadow-md shadow-secondary-100 rounded-2xl p-4 ">
                    <Image src='/assets/images/package.png.webp' alt='confidence' width={100} height={100} className='block'/>
                    <span className="block mt-4 font-bold text-base font-iranBold">تنوع محصول</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Confidence