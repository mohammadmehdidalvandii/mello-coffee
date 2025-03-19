import Link from 'next/link'
import React from 'react'

const Sidebar:React.FC =()=>{
  return (
    <section className="black">
        <div className="block border-l border-l-secondary-100 pl-2">
            <h6 className="block font-iranBold text-xl border-b border-b-secondary-100 pb-4">حساب کاربری من</h6>
            <ul className="block mt-4">
                <li className="block mb-4">
                    <Link href='' className='block font-iranMedium text-lg bg-secondary-400 p-2 rounded-full'>پیشخوان</Link>
                </li>
                <li className="block mb-4">
                    <Link href='' className='block font-iranMedium text-lg'>سفارش ها</Link>
                </li>
                <li className="block mb-4">
                    <Link href='' className='block font-iranMedium text-lg'>آدرس</Link>
                </li>
                <li className="block mb-4">
                    <Link href='' className='block font-iranMedium text-lg'>روش های پرداخت</Link>
                </li>
                <li className="block mb-4">
                    <Link href='' className='block font-iranMedium text-lg'>کیف پول من</Link>
                </li>
                <li className="block mb-4">
                    <Link href='' className='block font-iranMedium text-lg'>اطلاعات حساب کاربری</Link>
                </li>
                <li className="block mb-4">
                    <button className='black font-iranMedium text-lg duration-300 ease-linear hover:text-danger cursor-pointer'>خروج</button>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Sidebar