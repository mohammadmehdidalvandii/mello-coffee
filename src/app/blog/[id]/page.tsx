import Breadcrumb from '@/components/module/Breadcrumb/Breadcrumb';
import Footer from '@/components/module/Footer/Footer';
import MainHeader from '@/components/module/MainHeader/MainHeader';
import Navbar from '@/components/module/Navbar/Navbar';
import SingleArticles from '@/components/template/blog/SingleArticles/SingleArticles';
import React from 'react';

const page:React.FC =  ()=>{
  return (
    <>
    <Navbar/>
    <MainHeader/>
    <Breadcrumb 
    text='مقاله'
    />
    <SingleArticles/>
    <Footer/>
    </>
  )
}

export default page