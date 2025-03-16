import ProductCart from '@/components/module/ProductCart/ProductCart'
import React from 'react'

const Category:React.FC = ()=>{
  return (
    <section className="block">
        <div className="container">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
        </div>
    </section>
  )
}

export default Category