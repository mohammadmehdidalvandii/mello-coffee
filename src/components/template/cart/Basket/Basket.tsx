import Image from 'next/image'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Basket:React.FC = ()=>{
  return (
    <section className="block">
        <div className="container">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                <div className="block md:col-span-2">
                    <div className="hidden  md:flex justify-end ">
                        <span className="block font-iranBold text-lg ml-2 ">قیمت کل</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-3 items-center justify-between border  p-3 rounded-lg mb-2 mt-2">
                        <span className="block text-text cursor-pointer"><FaTimes/></span>
                        <Image src='/assets/images/p-1.webp' alt='product' width={70} height={70}/>
                        <span className="block font-iranMedium text-md text-text">	کپسول قهوه نسپرسو مدل Mexico Espresso</span>
                        <span className="block font-iranMedium text-md text-text">	1000,000 تومان  </span>
                        <div className="flex items-center justify-center gap-2">
                            <button className="btn_primary w-4 h-6">+</button>
                            <span>1</span>
                            <button className="btn_primary w-4 h-6">-</button>
                        </div>
                        <span className="block font-iranMedium text-md text-primary-100">	1000,000 تومان  </span>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-3 items-center justify-between border  p-3 rounded-lg mb-2 mt-2">
                        <span className="block text-text cursor-pointer"><FaTimes/></span>
                        <Image src='/assets/images/p-1.webp' alt='product' width={70} height={70}/>
                        <span className="block font-iranMedium text-md text-text">	کپسول قهوه نسپرسو مدل Mexico Espresso</span>
                        <span className="block font-iranMedium text-md text-text">	1000,000 تومان  </span>
                        <div className="flex items-center justify-center gap-2">
                            <button className="btn_primary w-4 h-6">+</button>
                            <span>1</span>
                            <button className="btn_primary w-4 h-6">-</button>
                        </div>
                        <span className="block font-iranMedium text-md text-primary-100">	1000,000 تومان  </span>
                    </div>
                </div>
                <div className="block">
                    <ul className="block border border-secondary-100 p-3 rounded-lg">
                        <li className="flex items-center justify-between mb-3">
                            <span className="block font-iranBold text-md ">قیمت کل </span>
                            <span className="block font-iranMedium text-md text-text">1,000,000 تومان</span>
                        </li>
                        <li className="flex items-center justify-between mb-3">
                            <span className="block font-iranBold text-md ">هزنیه ارسال </span>
                            <span className="block font-iranMedium text-md text-text">50,000 تومان</span>
                        </li>
                        <li className="flex items-center justify-between mb-3">
                            <span className="block font-iranBold text-md ">مجموع</span>
                            <span className="block font-iranMedium text-md text-text">1,050,000 تومان</span>
                        </li>
                        <button className='btn_primary w-full h-10'>اقدام به پرداخت</button>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket