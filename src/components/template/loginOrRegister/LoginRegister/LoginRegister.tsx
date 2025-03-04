"use client"
import React, { useState } from 'react'
import Login from '../Login/Login'
import Register from '../Register/Register'

const LoginRegister:React.FC = ()=>{
    const [loginOrRegister , setLoginOrRegister] = useState<string>("Login")

    const handlerChangeForm:React.ReactEventHandler<HTMLButtonElement>= ()=>{
        if(loginOrRegister === "Login"){
            setLoginOrRegister("Register")
        } else(
            setLoginOrRegister("Login")
        )
    }

  return (
    <section className="block my-12">
        <div className="container">
            <div className="block mx-auto max-w-[300px] lg:max-w-[400px] md:max-w-[350px] sm:max-w-[300px]">
                <button className="block font-iranBlack text-xl text-secondary-100 cursor-pointer duration-300 ease-linear hover:text-primary-100"
                onClick={handlerChangeForm}
                >
                 {loginOrRegister !== "Login" ? "ورود" : "ثبت نام"}
                </button>
                {loginOrRegister === "Login" ? (
                     <Login/>
                ) : (
                       <Register/>
                )}
             
            </div>
        </div>
    </section>
  )
}

export default LoginRegister