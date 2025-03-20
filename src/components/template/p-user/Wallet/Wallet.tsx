"use client"
import Link from 'next/link';
import React, { ReactEventHandler, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { TiDocumentText } from "react-icons/ti";


const Wallet:React.FC = ()=>{
    const [changeMenu , setChangeMenu] = useState("menu")

    const handlerChangeMenu = ()=>{
        setChangeMenu("Add-money")
    }

   return (
    <section className="block">
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="block bg-secondary-400 p-3 text-center mx-auto">
                <p className="black font-iranBlack ">کیف پول من </p>
                <button
                onClick={()=>handlerChangeMenu("Add-money")}
                 className="flex justify-center items-center flex-col mt-4 p-4 rounded-lg cursor-pointer  bg-white w-[200px] duration-300 ease-linear hover:text-green-500 font-iranMedium ">
                    <span className="block">
                        <FaPlus/>
                    </span>
                    <span className="block">
                        شارژکیف پول
                    </span>
                </button>
                <Link href='' className="flex justify-center items-center flex-col mt-4 p-4 rounded-lg cursor-pointer  bg-white w-[200px] duration-300 ease-linear hover:text-green-500 font-iranMedium ">
                    <span className="block">
                        <TiDocumentText/>
                    </span>
                    <span className="block">
                        لیست تراکنش
                    </span>
                </Link>
            </div>
            <div className="block col-span-2">
                {changeMenu === "menu" && (
                    <div className="flex items-center gap-4">
                        <p className="block font-iranMedium ">موجودی :</p>
                        <p className="block font-iranMedium text=text">2000 تومان</p>
                    </div>
                )}
                {
                    changeMenu === "Add-money" &&(
                        <>
                               <div className="flex items-center gap-4">
                        <p className="block font-iranMedium ">موجودی :</p>
                        <p className="block font-iranMedium text=text">2000 تومان</p>
                    </div>
                        <input type="text" placeholder='مبلغ مورد نظر'  className='mt-4 w-full border border-secondary-100 h-10 rounded-lg px-2 font-iranMedium outline-none'/>
                        <button className="btn_primary mt-8">پرداخت</button>
                        </>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Wallet