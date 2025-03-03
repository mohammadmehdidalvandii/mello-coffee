import React from 'react';
import { BreadcrumbType } from '@/app/type';


const Breadcrumb:React.FC<BreadcrumbType> = ({text})=>{
  return (
    <section className="block my-12">
        <div className="container">
            <div className="flex justify-center items-center bg-secondary-500 rounded-lg">
                <h5 className="block font-iranBlack text-4xl  py-3 text-secondary-100">{text}</h5>
            </div>
        </div>
    </section>
  )
}

export default Breadcrumb