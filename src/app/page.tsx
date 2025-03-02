import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import Confidence from '@/components/template/home/Confidence/Confidence'
import Category from '@/components/template/home/Category/Category'
import React from 'react'
import Products from '@/components/template/home/Products/Products'
import TypeCoffee from '@/components/template/home/TypeCoffee/TypeCoffee'
import ToolsCoffee from '@/components/template/home/ToolsCoffee/ToolsCoffee'

const page:React.FC = ()=>{
  return (
  <>
  <Navbar/>
  <MainHeader/>
  <Category/>
  <Confidence/>
  <Products/>
  <TypeCoffee/>
  <ToolsCoffee/>
  <br /><br /><br /><br /><br />
  </>
  )
}

export default page