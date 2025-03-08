import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer:React.FC = ()=>{
  return (
    <section className="block mt-20 bg-secondary-100 py-8">
        <div className="container">
            <div className="block bg-secondary-200 p-4 rounded-md">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    <div className="block text-center">
                        <h6 className="block font-iranBlack text-xl">ارسال پیک و پست</h6>
                        <span className="block font-iranMedium text-md text-secondary-300 mt-2">ارسال سفارشات به تمام نقاط کشور</span>
                    </div>
                    <div className="block text-center">
                        <h6 className="block font-iranBlack text-xl">ضمانت 7 روزه</h6>
                        <span className="block font-iranMedium text-md text-secondary-300 mt-2">عودت سفارش در صورت داشتن مشکل</span>
                    </div>
                    <div className="block text-center">
                        <h6 className="block font-iranBlack text-xl">پشتیبانی قهوه ملو</h6>
                        <span className="block font-iranMedium text-md text-secondary-300 mt-2">درصوت نیاز تماس باشید</span>
                    </div>
                    <div className="block text-center">
                        <h6 className="block font-iranBlack text-xl">روست تخصصی قهوه های</h6>
                        <span className="block font-iranMedium text-md text-secondary-300 mt-2">در بهترین کیفیت و حالت</span>
                    </div>
                </div>
            </div>
            <div className="grid mt-8 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
                <div className="block col-span-3">
                    <ul className="block">
                        <li className='block mb-4'>
                            <h5 className="block font-iranBlack text-2xl ">آدرس فروشگاه ها</h5>
                        </li>
                        <li className='block mb-2'>
                            <span className="block font-iranMedium font-bold text-md text-secondary-300">شعبه بهار شمالی: خ بهار شمالی قبل از خیابان موسوی پ 330</span>
                        </li>
                        <li className='block mb-2'>
                            <span className="block font-iranMedium font-bold text-md text-secondary-300">واحد اینترنتی: میدان انقلاب خیابان کارگر جنوبی، پایین تر از خیابان لبافی نژاد پلاک 886</span>
                        </li>
                        <li className='block mb-2'>
                            <span className="block font-iranMedium font-bold text-md text-secondary-300">شعبه میدان ولیعصر: ضلع شرقی میدان ولی عصر،نبش پاساژ ایرانیان، پلاک 1699</span>
                        </li>
                    </ul>
                            <h5 className="block mt-8 font-iranBlack text-2xl "> ساعات کاری فروشگاه</h5>
                    <ul className="block sm:flex gap-4 mt-4">
                        <li className='block mb-4'>
                        <span className="block font-iranMedium font-bold text-sm text-secondary-300">اینترنتی: 10 صبح تا 17 بعد از ظهر</span>
                        </li>
                        <li className='block mb-2'>
                            <span className="block font-iranMedium font-bold text-sm text-secondary-300">پنجشنبه: 10 صبح تا 14 بعد از ظهر</span>
                        </li>
                        <li className='block mb-2'>
                            <span className="block font-iranMedium font-bold text-sm text-secondary-300">شعبه خیابان بهار: 10 صبح تا 9 شب</span>
                        </li>
                        <li className='block mb-2'>
                            <span className="block font-iranMedium font-bold text-sm text-secondary-300">شعبه خیابان ولیعصر: 8 صبح تا 10 شب</span>
                        </li>
                    </ul>
                </div>
                <div className="block text-center">
                <h5 className="block mt-8 font-iranBlack text-2xl ">مجوز ها</h5>
                    <div className="flex mt-3">
                        <Link href=''>
                           <Image src='/assets/images/logo-min.png.webp' alt='logo' width={100} height={100}/>
                        </Link>
                        <Link href=''>
                           <Image src='/assets/images/logo-etehhhhhhhdie-min.png.webp' alt='logo' width={100} height={100}/>
                        </Link>
                        <Link href=''>
                           <Image src='/assets/images/enamad.png' alt='logo' width={100} height={100}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-8 bg-white py-4 text-secondary-100 rounded-md">
                <ul className="flex items-center justify-center gap-8 flex-wrap">
                    <li className='block'>
                        <Link href='/' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>خانه</Link>
                    </li>
                    <li className='block'>
                        <Link href='/blog' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>مقاله </Link>
                    </li>
                    <li className='block'>
                        <Link href='' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>قهوه برند</Link>
                    </li>
                    <li className='block'>
                        <Link href='' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>پنل کاربری</Link>
                    </li>
                    <li className='block'>
                        <Link href='' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>راهنمای خرید</Link>
                    </li>
                    <li className='block'>
                        <Link href='' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>پیگیری سفارش</Link>
                    </li>
                </ul>
            </div>
            <ul className="flex justify-center items-center  mt-8 gap-8  flex-wrap">
                <li className="block">
                    <Link href='/' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>واتساپ: 09377489675</Link>
                </li>
                <li className="block">
                    <Link href='/' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>شماره تلفن: 02166426784
                    </Link>
                </li>
                <li className="block">
                    <Link href='/' className='block font-iranMedium text-md font-bold duration-300 ease-linear hover:text-primary-100'>ایمیل : Info@melocoffee.com</Link>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Footer