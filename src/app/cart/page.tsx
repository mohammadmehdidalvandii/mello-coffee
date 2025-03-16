import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb'
import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import Basket from '@/components/template/cart/Basket/Basket'
import React from 'react'

const page:React.FC =()=>{
  return (
    <>
    <Navbar/>
    <MainHeader/>
    <Breadcrumb text='سبد خرید'/>
    <Basket/>
    <Footer/>
    </>
  )
}

export default page