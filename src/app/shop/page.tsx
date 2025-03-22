import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb'
import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import Products from '@/components/template/shop/Products/Products'
import connectToDB from '@/config/db'
import { authUser } from '@/utils/serverHelpers'
import React from 'react'

const page:React.FC = async ()=>{
  await connectToDB()

  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user ? true :false} role={user?.role}/>
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