import React from 'react'

const Login:React.FC = ()=>{
  return (
    <form action="#" className="form_style">
    <h6 className="block text-center font-iranBold font-extrabold text-primary-100 text-2xl">ورود</h6>
    <input type="text" className="input_style
    " placeholder='ایمیل'/> 
    <input type="password" className="input_style
    " placeholder='رمز عبور'/> 
    <button className="btn_primary w-full mt-4">ورود</button>
 </form>
  )
}

export default Login