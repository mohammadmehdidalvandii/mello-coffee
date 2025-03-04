import Footer from '@/components/module/Footer/Footer'
import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import LoginRegister from '@/components/template/loginOrRegister/LoginRegister/LoginRegister'
import React from 'react'

const page:React.FC = ()=>{
  return (
    <>
    <Navbar/>
    <MainHeader/>
    <LoginRegister/>
    <Footer/>
    </>
  )
}

export default page