import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCart:React.FC = ()=>{
  return (
    <Link href='/' className='group block text-center'>
    <Image src='/assets/images/p-1.webp' alt='products' width={250} height={300} className='group-hover:scale-110 duration-300 ease-linear'/>
    <div className="block mt-2">
        <span className="block font-iranMedium text-sm mb-3 group-text-primary-200:">کپسول قهوه نسپرسو mexico</span>
        <span className="block font-iranMedium text-sm mb-3 text-secondary-100">موجود در انبار</span>
        <span className="block font-iranMedium text-sm  mb-3">470,000 تومان</span>
        <button className="group flex justify-center items-center rounded-2xl cursor-pointer flex-col w-full h-8 font-iranMedium font-bold text-sm text-white bg-primary-400 duration-300 ease-linear hover:bg-primary-100 ">
            <span className="block group-hover:hidden duration-300 ease-linear">افزودن به سبد خرید</span>
            <span className="hidden group-hover:block duration-300 ease-linear">
                <FaShoppingCart/>
            </span>
        </button>
    </div>
</Link>
  )
}

export default ProductCart