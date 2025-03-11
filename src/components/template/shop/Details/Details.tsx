import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Details:React.FC = ()=>{
  return (
    <section className="block bg-white border border-secondary-200 p-4 rounded-lg ">
        <div className="block">
            <h5 className="block font-iranBold text-xl text-primary-200">کپسول قهوه نسپرسو مدل Mexico Espresso</h5>
            <p className="block my-4 font-iranMedium font-bold text-lg text-primary-300">470,000 تومان</p>
            <p className="block font-iranMedium font-medium text-md text-primary-100">
                <b>کپسول قهوه نسپرسو مدل Mexico Espresso </b>
                با طعمی قدرتمند و عطر دل‌نشین، از دانه‌های 100% ارگانیک عربیکا و روبوستا تهیه شده است. مناسب برای دوستداران قهوه‌ای با نت‌های تلخ و تند.
            </p>
            <div className="flex items-center gap-2 text-md text-primary-100 my-4">
                <span className=""><FaCheck/></span>
                <span className="font-iranMedium font-medium">موجود در انبار</span>
            </div>
            <div className="flex items-center gap-4 border-b border-secondary-200 pb-4">
                <div className="flex items-center">
                    <button className='btn_primary w-6 h-6 '>+</button>
                    <span className='font-iranMedium font-medium text-md text-primary-100 w-6 h-6 flex items-center justify-center'>1</span>
                    <button className='btn_primary w-6 h-6 '>-</button>
                </div>
                <button className="btn_primary w-[130px]">افزودن به سبد خرید</button>
            </div>
        </div>
        <div className="block mt-4">
            <ul className="block">
                <li className="flex items-center gap-3  ">
                    <span className="block font-iranBold text-md text-secondary-100">شناسه محصول</span>
                    <span className="block font-iranBold text-md text-primary-100">شناسه محصول</span>
                </li>
                <li className="flex items-center gap-3  ">
                    <span className="block font-iranBold text-md text-secondary-100"> دسته :</span>
                    <span className="block font-iranBold text-md text-primary-100">دسته</span>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Details