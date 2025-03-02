import Link from 'next/link'
import React from 'react'

const HomeAbout:React.FC = ()=>{
  return (
    <section className="block mt-12">
        <div className="container">
            <div className="block bg-white shadow-md shadow-secondary-200 rounded-lg p-4">
                <h4 className="block font-iranBlack text-2xl text-primary-100">درباه ملو کافی</h4>
                <p className="block mt-8 font-iranMedium font-bold text-md text-secondary-100">مجموعه قهوه ملو در زمینه ارائه انواع قهوه و تجهیزات دم آوری و دستگاه های قهوه ساز به مشتریان خانگی، قهوه فروشی ها، کافی شاپ و رستوران ها فعالیت دارد. مجموعه ما از سال ۱۳۸۴ در زمینه برشته کاری و تولید قهوه های تجاری و تخصصی در حال فعالیت می باشد.</p>
                <p className="block mt-8 font-iranMedium font-bold text-md text-secondary-100">فروشگاه اینترنتی قهوه ملو با هدف ارائه محصولات با کیفیت و درجه یک و سهولت در خرید اینترنتی به دوست داران قهوه درحال فعالیت می باشد. مجموعه قهوه ملو به صورت متمرکز در زمینه بازار قهوه سعی در توسعه فرهنگ نوشیدنی های متفاوت ,ارتقا کیفیت محصولات در زمینه قهوه در ایران و همچنین اطلاع رسانی به مشتریان و تبادل نظر با آنها در زمینه ها مختلف را دارد تا در بلند مدت فرهنگ بررسی و خرید نوشیدنی و تجهیزات مختلف در زمینه قهوه را بصورت اینترنتی جا انداخته و میسر سازد.</p>
                <div className="flex mt-8 gap-4 pt-4 border-t border-t-secondary-200">
                    <Link href='' className='btn_primary'>درباه ما</Link>
                    <Link href='' className='btn_secondary'>تماس با ما</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeAbout