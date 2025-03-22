import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb'
import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import Category from '@/components/template/shop/Category/Category'
import connectToDB from '@/config/db'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

async function page() {
  await connectToDB()

  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user ? true :false} role={user?.role}/>
    <MainHeader/>
    <Breadcrumb text='فروشگاه / ترک'/>
    <Category/>
    <Footer/>
    </>
  )
}

export default page