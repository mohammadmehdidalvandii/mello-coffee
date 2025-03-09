import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb'
import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import SingleProducts from '@/components/template/shop/SingleProducts/SingleProducts'
import React from 'react'

const page:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <MainHeader/>
    <Breadcrumb text="جزئیات محصول"/>
    <SingleProducts/>
    <Footer/>
    </>
  )
}

export default page