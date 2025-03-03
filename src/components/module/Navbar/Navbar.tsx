"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {FaBars, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa'

const Navbar:React.FC =()=>{
    const [activeSearch , setActiveSearch] = useState<boolean>(false);
    const [activeShowMenu , setActiveShowMenu] = useState<boolean>(false)

    const handlerShowMenu:React.ReactEventHandler = ()=>{
        setActiveShowMenu(true)
    }
    const handlerExitMenu:React.ReactEventHandler = ()=>{
        setActiveShowMenu(false)
    }

    const handlerShowSearch:React.ReactEventHandler = ()=>{
        setActiveSearch(!activeSearch)
    }
    const handlerExitSearch:React.ReactEventHandler = ()=>{
        setActiveSearch(false)
    }

  return (
        <>
             <section className="hidden lg:block bg-white py-4 border-b border-b-secondary-100 relative">
        <div className="container">
            <div className="flex items-center justify-between">
                <ul className="flex gap-4">
                    <li className="block">
                        <Link href='/shop' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>خرید قهوه</Link>
                    </li>
                    <li className="block">
                        <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>قهوه ترک</Link>
                    </li>
                    <li className="block">
                        <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>فرنچ پرس</Link>
                    </li>
                    <li className="block">
                        <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>موکاپات</Link>
                    </li>
                    <li className="block">
                        <Link href='' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>قهوه های ملو</Link>
                    </li>
                </ul>
                <Link href='/'>
                    <Image src='/assets/images/logo.png' width={100} height={100} alt='logo image'/>
                </Link>

                <div className="flex items-center gap-4">
                    <Link href='/loginOrRegister' className='block font-iranMedium font-semibold text-sm text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>ورود | ثبت نام</Link>
                    <span className="block cursor-pointer text-text duration-300 ease-linear hover:text-secondary-100"
                    onClick={handlerShowSearch}
                    >
                        {activeSearch ? (
                            <FaTimes/>
                        ) : (
                            <FaSearch/>
                        )}
                    </span>
                    {activeSearch && (
                        <div className="block bg-white shadow-2xl shadow-secondary-100 w-full fixed top-30 right-0 h-[85dvh] p-8 ">
                            <span className="block absolute left-4 text-3xl cursor-pointer"
                            onClick={handlerExitSearch}
                            >
                                <FaTimes/>
                            </span>
                            <input type="text" className="block text-center w-full text-5xl font-iranBold text-text outline-0 border-0" placeholder='جستجوی محصولات'/>
                            <span className="block font-iranMedium text-sm text-center mt-4 text-primary-100">محصول جستجو کرد و منتظر مانده ...</span>
                        </div>
                    )}
                    <Link href='' className="flex items-center justify-between gap-2 relative bg-primary-100 rounded-full w-[100px] h-10 px-3" >
                        <span className="flex items-center justify-center bg-white rounded-full w-8 h-8"
                        >
                            <FaShoppingCart/>
                        </span>
                        <span className="block text-[0.7rem] text-white font-iranMedium text-balance">
                            230,000
                            تومان
                        </span>
                        <span className="flex justify-center items-center bg-white h-4 w-4 rounded-full absolute -top-2 left-0">0</span>
                    </Link>
                </div>
            </div>
        </div>
          
              </section>

              <section className="block lg:hidden bg-white py-4 border-b border-b-secondary-100 relative">
                    <div className="container">
                       <div className="flex items-center justify-between">
                       <span className="block text-3xl text-text duration-300 ease-linear hover:text-secondary-100 cursor-pointer"
                       onClick={handlerShowMenu}
                       >
                            <FaBars/>
                        </span>
                        {activeShowMenu && (
                            <>
                            <div className="bg_shadow text-white"></div>
                                <div className="block fixed top-0 right-0 bg-white w-[300px] h-full z-[90]">
                                    <div className="flex justify-between items-center p-5">
                                    <Link href='/loginOrRegister' className='block font-iranMedium font-semibold text-xl text-text duration-300 ease-linear hover:text-secondary-100 hover:border-b border-b-primary-200'>ورود | ثبت نام</Link>
                                        <span className="block text-2xl text-text duration-300 ease-linear hover:text-secondary-100 cursor-pointer"
                                        onClick={handlerExitMenu}
                                        >
                                            <FaTimes/>
                                        </span>
                                    </div>
                                <div className="flex justify-between items-center px-4 h-12 bg-secondary-300">
                                    <input type="text" placeholder='جستجتو محصول' className='outline-none border-none placeholder:font-iranBold' />
                                    <span className="block cursor-pointer">
                                    <FaSearch/>
                                    </span>
                                </div>
                                <ul className="block mt-8">
                                    <li className="block mb-4">
                                        <Link href='' className='block font-iranMedium font-semibold text-xl text-text duration-300 ease-linear hover:text-secondary-100'>خانه</Link>
                                    </li>
                                    <li className="block mb-4">
                                        <Link href='' className='block font-iranMedium font-semibold text-xl text-text duration-300 ease-linear hover:text-secondary-100'>قهوه ملو</Link>
                                    </li>
                                    <li className="block mb-4">
                                        <Link href='' className='block font-iranMedium font-semibold text-xl text-text duration-300 ease-linear hover:text-secondary-100'>قهوه خارجی</Link>
                                    </li>
                                    <li className="block mb-4">
                                        <Link href='' className='block font-iranMedium font-semibold text-xl text-text duration-300 ease-linear hover:text-secondary-100'>قهوه فوری</Link>
                                    </li>
                                    <li className="block mb-4">
                                        <Link href='' className='block font-iranMedium font-semibold text-xl text-text duration-300 ease-linear hover:text-secondary-100'>قهوه ساز</Link>
                                    </li>
                                    <li className="block">
                                        <Link href='' className='block font-iranMedium font-semibold text-xl text-text duration-300 ease-linear hover:text-secondary-100'>لوازم جانبی</Link>
                                    </li>
                                </ul>
                                </div>
                            </>
                        )}
                        
                        <Link href='/'>
                            <Image src='/assets/images/logo.png' width={100} height={100} alt='logo image'/>
                        </Link>

                        <Link href='' className='flex justify-center items-center text-secondary-100 text-2xl w-12 h-12 rounded-full border border-secondary-100 relative duration-300 ease-linear hover:text-primary-100'>
                            <span className="block">
                                <FaShoppingCart/>
                            </span>
                            <span className="flex justify-center items-center bg-white w-6 h-6  text-sm shadow shadow-secondary-100 rounded-full absolute -top-3 -left-1">0</span>
                        </Link>
                       </div>
                    </div>
              </section>
        </>
  )
}

export default Navbar