import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb'
import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import Category from '@/components/template/shop/Category/Category'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <MainHeader/>
    <Breadcrumb text='فروشگاه / ترک'/>
    <Category/>
    <Footer/>
    </>
  )
}

export default page