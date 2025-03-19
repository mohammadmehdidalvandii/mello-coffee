import React from 'react'
import { layoutPropsType } from "../../app/type";
import Navbar from '../module/Navbar/Navbar';
import MainHeader from '../module/MainHeader/MainHeader';
import Sidebar from '../module/Sidebar/Sidebar';


const UserPanelLayout  = async ({children}:layoutPropsType):Promise<React.JSX.Element>=>{
  return (
   <section className='black'>
          <div className="block">
          <Navbar/>
          <MainHeader/>
      </div>
      <div className="container mt-12">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="block lg:col-span-1">
          <Sidebar/>
        </div>
        <div className="block lg:col-span-3">
          {children}
        </div>
      </div>
      </div>
   </section>
  )
}

export default UserPanelLayout