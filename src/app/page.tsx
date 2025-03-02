import MainHeader from '@/components/module/MainHeader/MainHeader'
import Navbar from '@/components/module/Navbar/Navbar'
import Confidence from '@/components/template/home/Confidence/Confidence'
import Category from '@/components/template/home/Category/Category'
import React from 'react'
import Products from '@/components/template/home/Products/Products'
import TypeCoffee from '@/components/template/home/TypeCoffee/TypeCoffee'
import ToolsCoffee from '@/components/template/home/ToolsCoffee/ToolsCoffee'
import SuggestProducts from '@/components/template/home/SuggestProducts/SuggestProducts'
import HomeAbout from '@/components/template/home/HomeAbout/HomeAbout'
import Articles from '@/components/template/home/Articles/Articles'
import Newsletter from '@/components/template/home/Newsletter/Newsletter'
import Footer from '@/components/module/Footer/Footer'

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
  <SuggestProducts/>
  <HomeAbout/>
  <Articles/>
  <Newsletter/>
  <Footer/>
  </>
  )
}

export default page