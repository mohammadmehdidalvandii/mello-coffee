"use client"
import Link from 'next/link'
import React from 'react'
import swal from 'sweetalert'

const Sidebar:React.FC =({users})=>{

    const handlerExitUser = ()=>{
        swal({
            title:"ایا میخواهید از سایت خارج شوید !",
            icon:"error",
            buttons:["نه","بله"]
        }).then(async (result)=>{
            if(result){
                const res = await fetch('/api/auth/signout',{
                    method:"POST"
                })
                if(res.status === 200){
                    swal({
                        title:"شما با موفقیت خارج شدید",
                        icon:"success",
                        buttons:"متوجه شدم"
                    }).then(()=>{
                        window.location.href = "/"
                    })
                }
            }
        })
    }

  return (
    <section className="black">
        <div className="block border-l border-l-secondary-100 pl-2">
            <h6 className="block font-iranBold text-xl border-b border-b-secondary-100 pb-4">حساب کاربری من</h6>
            {users === "ADMIN" ? (
                  <ul className="block mt-4">
                  <li className="block mb-4">
                      <Link href='/PanelAdmin' className='block font-iranMedium text-lg bg-secondary-400 p-2 rounded-full'>پیشخوان</Link>
                  </li>
                  <li className="block mb-4">
                      <Link href='/PanelAdmin/Orders' className='block font-iranMedium text-lg'>سفارش ها</Link>
                  </li>
                  <li className="block mb-4">
                      <Link href='/PanelAdmin/AddressUser' className='block font-iranMedium text-lg'>آدرس</Link>
                  </li>
                  <li className="block mb-4">
                      <Link href='/PanelAdmin/MyWallet' className='block font-iranMedium text-lg'>کیف پول من</Link>
                  </li>
                  <li className="block mb-4">
                      <Link href='/PanelAdmin/Account' className='block font-iranMedium text-lg'>اطلاعات حساب کاربری</Link>
                  </li>
                  <li className="block mb-4">
                      <button className='black font-iranMedium text-lg duration-300 ease-linear hover:text-danger cursor-pointer' 
                      onClick={handlerExitUser}
                      >خروج</button>
                  </li>
              </ul>
            ):(
                <ul className="block mt-4">
                    <li className="block mb-4">
                        <Link href='/PanelUser' className='block font-iranMedium text-lg bg-secondary-400 p-2 rounded-full'>پیشخوان</Link>
                    </li>
                    <li className="block mb-4">
                        <Link href='/PanelUser/Order' className='block font-iranMedium text-lg'>سفارش ها</Link>
                    </li>
                    <li className="block mb-4">
                        <Link href='/PanelUser/AddressUser' className='block font-iranMedium text-lg'>آدرس</Link>
                    </li>
                    <li className="block mb-4">
                        <Link href='/PanelUser/MyWallet' className='block font-iranMedium text-lg'>کیف پول من</Link>
                    </li>
                    <li className="block mb-4">
                        <Link href='/PanelUser/Account' className='block font-iranMedium text-lg'>اطلاعات حساب کاربری</Link>
                    </li>
                    <li className="block mb-4">
                        <button className='black font-iranMedium text-lg duration-300 ease-linear hover:text-danger cursor-pointer' 
                        onClick={handlerExitUser}
                        >خروج</button>
                    </li>
                </ul>
            )}
        </div>
    </section>
  )
}

export default Sidebar