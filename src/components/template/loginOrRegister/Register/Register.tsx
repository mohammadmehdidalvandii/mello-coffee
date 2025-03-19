"use client"
import React, { useState } from 'react';
import { validationEmail , validationPassword ,validationPhone } from '@/utils/auth';
import { showAlert } from '@/utils/helper';
import swal from 'sweetalert';
import { Span } from 'next/dist/trace';

const Register:React.FC =  ()=>{
  const [email , setEmail ] = useState("");
  const [phone , setPhone] = useState("");
  const [name , setName] = useState("");
  const [password ,setPassword] = useState("");
  const [isEmail , setIsEmail ] = useState<boolean>(false);
  const [isPhone , setIsPhone ] = useState<boolean>(false);
  const [isName , setIsName ] = useState<boolean>(false);
  const [isPassword , setIsPassword ] = useState<boolean>(false);


  const handlerRegisterUser= async (e:React.FormEvent)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("name",name);
    formData.append("password",password);

    console.log("formData", formData)

    
    if(!email || !phone || !name || !password){
      showAlert("لطفا تمامی فیلدها را پر کنید","error","تلاش مجدد")
      return;
    }
    
    if(!validationEmail(email)){
      showAlert("مقدار ایمیل معتبر نیست","error","تلاش مجدد")
      return;
    }
    
    if(!validationPassword(password)){
      showAlert("مقدار رمزعبور معتبر نیست","error","تلاش مجدد")
      return;
    }
    
    if(!validationPhone(phone)){
      showAlert("مقدار شماره تلفن معتبر نیست","error","تلاش مجدد")
      return;
    }

    try {
      const res = await fetch('/api/auth/signup',{
        method:"POST",
        body: formData,
      })

      const data = await res.json();

      switch(res.status) {
        case 201:
          swal({
            title: "ثبت نام با موفقیت انجام شد",
            icon: "success",
            buttons: "خانه" 
          }).then(() => {
            location.replace('/');
          });
          break;

        case 400:
          showAlert(data.message || "خطا در اطلاعات ارسالی", "error", "تلاش مجدد");
          break;

        case 409:
          showAlert("این ایمیل یا شماره تلفن قبلاً ثبت شده است", "error", "تلاش مجدد");
          break;

        case 500:
          showAlert("خطای سرور، لطفاً دوباره تلاش کنید", "error", "تلاش مجدد");
          break;

        default:
          showAlert("خطای ناشناخته، لطفاً دوباره تلاش کنید", "error", "تلاش مجدد");
      }
    } catch (error) {
      showAlert("خطا در ارتباط با سرور", "error", "تلاش مجدد");
    }
  }


  return (
    <form action="#" className="block shadow shadow-secondary-200 bg-white rounded-lg mt-8 p-4">
    <h6 className="block text-center font-iranBold font-extrabold text-primary-100 text-2xl">ثبت نام</h6>
    <input type="text"
      value={email}
      onChange={event=>setEmail(event.target.value)}
      onFocus={()=>setIsEmail(true)}
      onBlur={()=>setIsEmail(false)}
      className="input_style
       " placeholder='ایمیل'/> 
       {
        isEmail && (<span className='block font-iranMedium text-sm text-danger my-2'>مقدار ایمیل باید exmple@gmail.com باشد</span>)
       }
       <input type="text"
        value={phone}
        onChange={event=>setPhone(event.target.value)}
        onFocus={()=>setIsPhone(true)}
        onBlur={()=>setIsPhone(false)}
       className="input_style
       " placeholder='شماره همراه'/> 
       {
        isPhone && (<span className='block font-iranMedium text-sm text-danger my-2'>مقدار تلفن باید 09121112233 باشد</span>)
       }
       <input type="text"
        value={name}
        onChange={event=>setName(event.target.value)}
        onFocus={()=>setIsName(true)}
        onBlur={()=>setIsName(false)}
       className="input_style
       " placeholder='نام کاربری'/> 
       {
        isName && (<span className='block font-iranMedium text-sm text-danger my-2'>مقدار نام کاربری باید بین 3 تا 10 کاراکتر باشد</span>)
       }
       <input type="password"
        value={password}
        onChange={event=>setPassword(event.target.value)}
        onFocus={()=>setIsPassword(true)}
        onBlur={()=>setIsPassword(false)}
       className="input_style
       " placeholder='رمز عبور'/> 
       {
        isPassword && (<span className='block font-iranMedium text-sm text-danger my-2'> رمز عبور باید حداقل ۱۰ کاراکتر شامل حروف بزرگ، کوچک و اعداد باشد</span>)
       }
       <button type='submit' onClick={handlerRegisterUser} className="btn_primary w-full mt-4">ثبت نام</button>
    </form>
  )
}

export default Register