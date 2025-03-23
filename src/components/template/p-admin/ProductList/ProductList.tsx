import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductList:React.FC = ()=>{
  return (
    <section className="block">
        <div className="block border-b border-b-secondary-100 pb-4">
            <Link href='/PanelAdmin/Add_Product' className='btn_primary'>افزودن محصول</Link>
            <div className="flex border border-secondary-100 rounded-lg mt-4 p-1">
                <input type="text" placeholder='جستجو محصول' className='block w-full px-2 font-iranBold text-md outline-none'/>
                <button className='btn_primary '>جستجو</button>
            </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <Link href='' className="block bg-white shadow-sm shadow-secondary-200 p-4 rounded-lg">
                <Image src='/assets/images/p-1.webp' alt='product' width={400} height={200}/>
                <div className="flex justify-center items-center gap-2">
                    <button className="btn_primary w-[90px] h-8 bg-green-700 hover:bg-green-500">ویرایش</button>
                    <button className="btn_primary w-[90px] h-8 bg-red-700 hover:bg-red-500">حذف</button>
                </div>
            </Link>
            <Link href='' className="block bg-white shadow-sm shadow-secondary-200 p-4 rounded-lg">
                <Image src='/assets/images/p-1.webp' alt='product' width={400} height={200}/>
                <div className="flex justify-center items-center gap-2">
                    <button className="btn_primary w-[90px] h-8 bg-green-700 hover:bg-green-500">ویرایش</button>
                    <button className="btn_primary w-[90px] h-8 bg-red-700 hover:bg-red-500">حذف</button>
                </div>
            </Link>
            <Link href='' className="block bg-white shadow-sm shadow-secondary-200 p-4 rounded-lg">
                <Image src='/assets/images/p-1.webp' alt='product' width={400} height={200}/>
                <div className="flex justify-center items-center gap-2">
                    <button className="btn_primary w-[90px] h-8 bg-green-700 hover:bg-green-500">ویرایش</button>
                    <button className="btn_primary w-[90px] h-8 bg-red-700 hover:bg-red-500">حذف</button>
                </div>
            </Link>
            <Link href='' className="block bg-white shadow-sm shadow-secondary-200 p-4 rounded-lg">
                <Image src='/assets/images/p-1.webp' alt='product' width={400} height={200}/>
                <div className="flex justify-center items-center gap-2">
                    <button className="btn_primary w-[90px] h-8 bg-green-700 hover:bg-green-500">ویرایش</button>
                    <button className="btn_primary w-[90px] h-8 bg-red-700 hover:bg-red-500">حذف</button>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default ProductList