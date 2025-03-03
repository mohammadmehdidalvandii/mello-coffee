import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb'
import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import Products from '@/components/template/shop/Products/Products'
import React from 'react'

const page:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <MainHeader/>
    <Breadcrumb
        text='فروشگاه'
    />
    <Products/>
    <Footer/>
    </>
  )
}

export default page