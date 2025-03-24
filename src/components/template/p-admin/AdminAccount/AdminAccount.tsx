import React from 'react'

const AdminAccount:React.FC = ()=>{
  return (
    <section className="block">
    <form action="" className="block">
        <div className="block mb-6">
            <label htmlFor="" className='block mb-3 font-bold text-sm text-text'>شماره موبایل</label>
            <input type="text" className="block w-full h-10 outline-none border border-secondary-200 px-3 rounded-lg" />
        </div>
        <div className="grid mt-6 gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="block">
            <label htmlFor="" className='block mb-3 font-bold text-sm text-text'>نام </label>
            <input type="text" className="block w-full h-10 outline-none border border-secondary-200 px-3 rounded-lg" />
        </div>
        <div className="block">
            <label htmlFor="" className='block mb-3 font-bold text-sm text-text'>نام خانوادگی</label>
            <input type="text" className="block w-full h-10 outline-none border border-secondary-200 px-3 rounded-lg" />
        </div>
        </div>
        <div className="block mb-6">
            <label htmlFor="" className='block mb-3 font-bold text-sm text-text'>نام نمایشی </label>
            <input type="text" className="block w-full h-10 outline-none border border-secondary-200 px-3 rounded-lg" placeholder='' />
        </div>
        <div className="block mb-6">
            <label htmlFor="" className='block mb-3 font-bold text-sm text-text'>آدرس ایمیل </label>
            <input type="text" className="block w-full h-10 outline-none border border-secondary-200 px-3 rounded-lg" placeholder='' />
        </div>
        <div className="block p-3 border border-secondary-200 rounded-lg relative">
            <h6 className="block bg-white font-iranBold absolute -top-4 px-3">تغییر رمز عبور</h6>
        <div className="block mb-6 mt-2">
            <label htmlFor="" className='block mb-3 font-bold text-sm text-text'>رمز عبور پیشین (در صورتی که قصد تغییر ندارید خالی بگذارید)</label>
            <input type="text" className="block w-full h-10 outline-none border border-secondary-200 px-3 rounded-lg" placeholder='' />
        </div>
        <div className="block mb-6">
            <label htmlFor="" className='block mb-3 font-bold text-sm text-text'>رمز عبور جدید (در صورتی که قصد تغییر ندارید خالی بگذارید)</label>
            <input type="text" className="block w-full h-10 outline-none border border-secondary-200 px-3 rounded-lg" placeholder='' />
        </div>
        <div className="block mb-6">
            <label htmlFor="" className='block mb-3 font-bold text-sm text-text'>تکرار رمز عبور</label>
            <input type="text" className="block w-full h-10 outline-none border border-secondary-200 px-3 rounded-lg" placeholder='' />
        </div>
        </div>
        <button className='btn_primary my-6 '>ذخیره تغییرات</button>
    </form>
</section>
  )
}

export default AdminAccount