import Link from 'next/link'
import React from 'react'

const MainHeader:React.FC = ()=>{
  return (
    <section className="hidden lg:block bg-white py-3 shadow shadow-secondary-100">
        <div className="container">
            <ul className="flex justify-center items-center gap-6">
                <li className="block">
                    <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>خانه</Link>
                </li>
                <li className="block">
                    <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>قهوه های ملو</Link>
                </li>
                <li className="block">
                    <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>قهوه های خارجی</Link>
                </li>
                <li className="block">
                    <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>قهوه های فوری</Link>
                </li>
                <li className="block">
                    <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>چای و محصولات پودری</Link>
                </li>
                <li className="block">
                    <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>قهوه ساز</Link>
                </li>
                <li className="block">
                    <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>لوازم جانبی</Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default MainHeader