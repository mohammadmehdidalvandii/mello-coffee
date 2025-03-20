import Link from 'next/link'
import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

const Orders:React.FC = ()=>{
  return (
    <section className="block">
        <div className="block">
            <div className="flex items-center gap-2 p-5 rounded-lg bg-danger text-white font-iranBold">
                <span className="block">
                    <FaExclamationCircle/> 
                </span>
                <p className="block">هیچ سفارشی در اینجا یافت نشد.</p>
                <Link href='/shop' className='block underline duration-300 ease-linear hover:text-black'>رفتن به فروشگاه</Link>
            </div>
        </div>
    </section>
  )
}

export default Orders