import React from 'react'

const Comment:React.FC = ()=>{
  return (
    <section className="block">
        <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
            <div className="block">
                <h4 className="block font-iranMedium text-xl text-primary-100">دیدگاه</h4>

                <span className="block text-center mt-4 font-iranBlack text-2xl text-red-600">هیج نظری وجود ندارد</span>
            </div>
            <div className="block">
                <p className="block my-4 font-iranMedium  text-md">
                اولین نفری باشید که دیدگاهی را ارسال می کنید برای 
                  <b>“کپسول قهوه نسپرسو مدل Mexico Espresso”</b>
                </p>
                <form action="#" className="block">
                    <span className="block font-iranMedium text-sm">دیگاه شما</span>
                    <textarea name="" id="" 
                    className='w-full h-[300px] border border-primary-400 rounded-lg my-4 p-2 outline-none font-iranMedium text-sm'
                    ></textarea>
                    <button className="btn_primary">ثبت </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Comment