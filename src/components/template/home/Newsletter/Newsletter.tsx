import React from 'react'

const Newsletter:React.FC = ()=>{
  return (
    <section className="block mt-12">
        <div className="container">
            <div className="block bg-white shadow shadow-secondary-200 p-4 rounded-lg">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                    <div className="block">
                        <h4 className="block font-iranBlack text-2xl text-primary-300">خبر نامه ملو کافی</h4>
                        <p className="block font-iranMedium text-xl text-secondary-100 mt-3">با عضویت در خبرنامه وودمارت در سریع ترین زمان از ملو کافی و حراج های ماه آگاه شوید.</p>
                    </div>
                    <div className="block ">
                        <input type="text" className="block w-full h-10 border pr-2 rounded-sm border-primary-100 outline-none   placeholder:font-iranMedium placeholder:text-xl" placeholder='ایمیل'/>
                        <button className="btn_primary h-10 mt-4 w-full cursor-pointer">ارسال </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter