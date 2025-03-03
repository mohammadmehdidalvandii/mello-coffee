import ProductCart from '@/components/module/ProductCart/ProductCart'
import React from 'react'
import { FaBars } from 'react-icons/fa'

const Products:React.FC = ()=>{
  return (
    <section className="block border-t border-t-secondary-100 ">
        <div className="container">
            <div className="block my-4">
                <button className="flex items-center gap-2 text-lg font-bold font-iranMedium cursor-pointer duration-300 hover:text-primary-100">
                    <span className="block">
                        <FaBars/>
                    </span>
                    <span className="block">
                        مشاهده فیلترها
                    </span>
                </button>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
                    <ProductCart/>
            </div>
            <div className="flex justify-center items-center mt-8">
                <button className="btn_primary cursor-pointer">مشاهده بیشتر</button>
            </div>
        </div>
    </section>
  )
}

export default Products