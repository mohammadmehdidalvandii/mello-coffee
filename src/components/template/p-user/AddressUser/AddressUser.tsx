import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddressUser:React.FC = ()=>{
  return (
    <section className="block">
        <div className="block">
            <p className="block font-iranBold text-text">آدرس‌های زیر برای ارسال فاکتور و صورت حساب استفاده خواهند شد.</p>
        </div>
        <div className="block">
            <h5 className="block font-iranBold text-xl mt-8">آدرس صورتحساب</h5>
            <Link href='/PanelUser/add-address' className='flex items-center gap-3 font-iranMedium text-lg mt-4 text-blue-500 duration-300 ease-linear hover:text-black'>
                <FaPlus/>
                آدرس جدید
            </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-8">
        <div className="block p-3 border border-secondary-200 rounded-lg">
            <span className="block">محمد رضا محمدی</span>
            <span className="block">لرستان</span>
            <span className="block">بروجرد</span>
            <span className="block">تختی کوچه نور پلاک 19</span>
            <span className="block">73.71</span>
            <span className="block">69145785566</span>
        </div>
        <div className="block p-3 border border-secondary-200 rounded-lg">
            <span className="block">محمد رضا محمدی</span>
            <span className="block">لرستان</span>
            <span className="block">بروجرد</span>
            <span className="block">تختی کوچه نور پلاک 19</span>
            <span className="block">73.71</span>
            <span className="block">69145785566</span>
        </div>
        <div className="block p-3 border border-secondary-200 rounded-lg">
            <span className="block">محمد رضا محمدی</span>
            <span className="block">لرستان</span>
            <span className="block">بروجرد</span>
            <span className="block">تختی کوچه نور پلاک 19</span>
            <span className="block">73.71</span>
            <span className="block">69145785566</span>
        </div>

        </div>
    </section>
  )
}

export default AddressUser