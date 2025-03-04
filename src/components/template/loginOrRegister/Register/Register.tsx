import React from 'react'

const Register:React.FC =  ()=>{
  return (
    <form action="#" className="block shadow shadow-secondary-200 bg-white rounded-lg mt-8 p-4">
    <h6 className="block text-center font-iranBold font-extrabold text-primary-100 text-2xl">ثبت نام</h6>
    <input type="text" className="input_style
       " placeholder='ایمیل'/> 
       <input type="text" className="input_style
       " placeholder='شماره همراه'/> 
       <input type="text" className="input_style
       " placeholder='نام کاربری'/> 
       <input type="password" className="input_style
       " placeholder='رمز عبور'/> 
       <button className="btn_primary w-full mt-4">ثبت نام</button>
    </form>
  )
}

export default Register