import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb'
import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import React from 'react'

function page() {
  return (
    <>
    <Navbar/>
    <MainHeader/>
    <Breadcrumb text='فروشگاه / ترک'/>
    <Footer/>
    </>
  )
}

export default page