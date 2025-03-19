"use client"
import React, { useState } from 'react'
import { validationEmail , validationPassword } from '@/utils/auth'
import { showAlert } from '@/utils/helper';

const Login:React.FC = ()=>{
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");


  const handlerLoginUser = async (e:React.FormEvent)=>{
    e.preventDefault();

    const formData = new FormData();

    formData.append("email" , email )
    formData.append("password" , password )

    if(!email || !password){
      showAlert("لطفا تمام فیلد ها را پرکنید ","error","تلاش مجدد");
      setEmail("")
      setPassword("")
      return;
    }
    if(!validationEmail(email)){
      showAlert("لطفا مقدار ایمیل و رمزعبور خود را درست واردکنید","error","تلاش مجدد");
      setEmail("")
      setPassword("")
      return;
    }
    if(!validationPassword(password)){
      showAlert("لطفا مقدار ایمیل و رمزعبور خود را درست واردکنید","error","تلاش مجدد");
      setEmail("")
      setPassword("")
      return;
    }

    const res = await fetch('/api/auth/signin',{
      method: 'POST',
      body:formData,
    });
    const data = await res.json();

    switch(res.status){
      case 200:
        swal({
          title:"ورود شما موفقیت آمیز بود",
          icon:"success",
          buttons:"خانه" 
        }).then(()=>{
          location.replace('/');
        });
        break;
      case 401:
        showAlert("رمز عبور یا ایمیل شما اشتباه است","error","تلاش مجدد");
        break;
      case 422 :
        showAlert("این کار با مشخصات  وجود ندارد","error","تلاش مجدد");
        break;
      case 500:
        showAlert("خطای سرور لطفا دوباره تلاش کن","error","تلاش مجدد");
        break;
      default:
        showAlert("خطای ناشناخته لطفا دوباره تلاش کن","error","تلاش مجدد");
    }


  }

  return (
    <form action="#" className="form_style">
    <h6 className="block text-center font-iranBold font-extrabold text-primary-100 text-2xl">ورود</h6>
    <input type="text" 
      value={email}
      onChange={event=>setEmail(event.target.value)}
    className="input_style
    " placeholder='ایمیل'/> 
    <input type="password" 
      value={password}
      onChange={event=>setPassword(event.target.value)}
    className="input_style
    " placeholder='رمز عبور'/> 
    <button type='submit' onClick={handlerLoginUser} className="btn_primary w-full mt-4">ورود</button>
 </form>
  )
}

export default Login