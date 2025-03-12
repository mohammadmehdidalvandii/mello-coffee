import React from 'react'

const Describe:React.FC = ()=>{
  return (
    <section className="block">
        <h4 className="block font-iranBlack text-2xl text-primary-100">توضیحات</h4>
        <p className="block my-4 font-iranMedium  text-md ">
            <b>کپسول قهوه نسپرسو مدل Mexico Espresso،</b>
            گزینه‌ای ایده‌آل برای کسانی است که به دنبال یک اسپرسوی غنی و پرانرژی هستند. این محصول از ترکیب دانه‌های ارگانیک عربیکا و روبوستا که در ارتفاعات مکزیک کشت شده‌اند، تهیه شده است. فرآیند دقیق برداشت و رست این دانه‌ها طعمی قدرتمند و کمی دودی را به همراه نت‌های ادویه‌ای و آجیل ارائه می‌دهد.
        </p>

        <span className="block font-iranMedium text-sm">ویژگی‌های برجسته این محصول:</span>
        <ul className="block mt-4">
            <li className="flex items-center gap-2 mb-4">
                <span className="block font-iranMedium text-md font-black">ترکیب :</span>
                <span className="block font-medium text-md text-secondary-100">100% ارگانیک از دانه‌های عربیکا و روبوستا</span>
            </li>
            <li className="flex items-center gap-2 mb-4">
                <span className="block font-iranMedium text-md font-black">میزان تلخی :</span>
                <span className="block font-medium text-md text-secondary-100">متوسط به بالا</span>
            </li>
            <li className="flex items-center gap-2 mb-4">
                <span className="block font-iranMedium text-md font-black"> نت های طعمی :</span>
                <span className="block font-medium text-md text-secondary-100"> ادویه‌ای، دودی و آجیل</span>
            </li>
            <li className="flex items-center gap-2 mb-4">
                <span className="block font-iranMedium text-md font-black">مناسب برای :</span>
                <span className="block font-medium text-md text-secondary-100">دستگاه‌های قهوه‌ساز نسپرسو</span>
            </li>
            <p className="block my-4 font-iranMedium text-md">این کپسول‌ها با بسته‌بندی ویژه‌ای طراحی شده‌اند که تازگی و کیفیت قهوه را حفظ می‌کند. هر فنجان از Mexico Espresso نه‌تنها طعمی بی‌نظیر، بلکه انرژی لازم برای روز شما را فراهم می‌کند.

نکته: برای حفظ کیفیت و عطر، کپسول‌ها را دور از نور مستقیم و رطوبت نگهداری کنید و با دستگاه‌های سازگار نسپرسو استفاده نمایید</p>
        </ul>
    </section>
  )
}

export default Describe