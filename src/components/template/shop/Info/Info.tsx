"use client"
import React, { useState } from 'react'

const Info:React.FC = ()=>{
    const [menu , setMenu] = useState<String>("describe")

    const handlerMenu = (menuID : String)=>{
        setMenu(menuID)
    }

  return (
    <section className="block mt-4">
            <div className="flex items-center gap-4">
                <button className={menu === "describe" ? "block font-iranBold text-lg text-primary-200 cursor-pointer " :"block font-iranBold text-lg text-secondary-200 cursor-pointer" }
                onClick={()=>handlerMenu("describe")}
                >توضیحات</button>
                <button className={menu === "comment" ? "block font-iranBold text-lg text-primary-200 cursor-pointer " :"block font-iranBold text-lg text-secondary-200 cursor-pointer" }
                onClick={()=>handlerMenu("comment")}
                >نظرات 0</button>
            </div>
            <div className="block mt-4">
                {menu === "describe" && (<h1>d</h1>)}
                {menu === "comment" && (<h1>c</h1>)}
            </div>
    </section>
  )
}

export default Info