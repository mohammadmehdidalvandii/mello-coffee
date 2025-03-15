import Image from 'next/image'
import React from 'react'
import { FaCalendar, FaRegClock, FaRegCommentDots, FaRegUserCircle } from 'react-icons/fa'

const SingleArticles:React.FC =()=>{
  return (
    <section className="block">
        <div className="container">
            <div className="block mx-auto text-center">
                <h5 className="block font-iranBlack text-2xl text-text">راهنمای کامل دم‌آوری قهوه با کمکس: تکنیک‌ها و نکات طلایی</h5>
                <Image src='/assets/images/sa-1.jpg' alt="image" width={600} height={400}  className='mx-auto mt-4 rounded-lg'/>
                <ul className="flex justify-center items-center lg:gap-8 gap-2  mt-3">
                    <li className="flex items-center gap-2">
                        <span className="block text-green-600"><FaRegUserCircle/></span>
                        <span className="block font-iranMedium text-sm ">فرشته نوری</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="block text-green-600"><FaCalendar/></span>
                        <span className="block font-iranMedium text-sm ">اسفند 3,1403</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="block text-green-600"><FaRegClock/></span>
                        <span className="block font-iranMedium text-sm ">2 ب.ظ</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="block text-green-600"><FaRegCommentDots/></span>
                        <span className="block font-iranMedium text-sm ">بدون نظر</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default SingleArticles