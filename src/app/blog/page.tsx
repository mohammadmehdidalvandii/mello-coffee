import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb'
import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import Articles from '@/components/template/blog/Articles/Articles'
import React from 'react'

const page:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <MainHeader/>
    <Breadcrumb  text='مقالات'/>
    <Articles/>
    <Footer/>
    </>
  )
}

export default page