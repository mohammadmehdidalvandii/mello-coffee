import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import LoginRegister from '@/components/template/loginOrRegister/LoginRegister/LoginRegister'
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
    <LoginRegister/>
    <Footer/>
    </>
  )
}

export default page