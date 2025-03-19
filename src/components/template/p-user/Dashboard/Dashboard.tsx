import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLocationArrow, FaMoneyBill, FaRegUser } from "react-icons/fa";
import { TiDocumentText  } from "react-icons/ti";
import {MdExitToApp, MdOutlinePayment } from 'react-icons/md'

const Dashboard: React.FC = () => {
  return (
    <section className="block">
      <div className="block">
        <p className="flex font-iranMedium text-lg">
          سلام mohammadmehdi (mohammadmehdi نیستید؟{" "}
          <button className="block text-blue-400 duration-300 ease-linear hover:text-green-600 cursor-pointer">
            خارج شوید
          </button>{" "}
          )
        </p>

        <p className="blockflex font-iranMedium text-lg mt-4">
          از پیشخوان حساب کاربری خود می توانید <b>آخرین سفارش ها</b> را ببینید ، به
          راحتی <b>آدرس حمل و نقل و صورت حساب</b> را مدیریت کنید و اطلاعات حساب کاربری
          و <b>رمز عبور</b> را تغییر دهید.
        </p>
      </div>
      <div className="grid mt-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <Link href='' className="flex justify-center flex-col items-center text-center border-2 rounded-lg p-4 border-secondary-100 duration-300 hover:border-green-600 ">
          <span className="block text-5xl">
            <TiDocumentText />
          </span>
          <span className="block font-iranBold">سفارش</span>
        </Link>
        <Link href='' className="flex justify-center flex-col items-center text-center border-2 rounded-lg p-4 border-secondary-100 duration-300 hover:border-green-600 ">
          <span className="block text-5xl">
            <FaLocationArrow/>
          </span>
          <span className="block font-iranBold">آدرس</span>
        </Link>
        <Link href='' className="flex justify-center flex-col items-center text-center border-2 rounded-lg p-4 border-secondary-100 duration-300 hover:border-green-600 ">
          <span className="block text-5xl">
            <MdOutlinePayment  />
          </span>
          <span className="block font-iranBold">روش های پرداخت</span>
        </Link>
        <Link href='' className="flex justify-center flex-col items-center text-center border-2 rounded-lg p-4 border-secondary-100 duration-300 hover:border-green-600 ">
          <span className="block text-5xl">
            <FaMoneyBill />
          </span>
          <span className="block font-iranBold">کیف پول من</span>
        </Link>
        <Link href='' className="flex justify-center flex-col items-center text-center border-2 rounded-lg p-4 border-secondary-100 duration-300 hover:border-green-600 ">
          <span className="block text-5xl">
            <FaRegUser />
          </span>
          <span className="block font-iranBold">اطلاعات حساب من</span>
        </Link>
        <button  className="flex cursor-pointer justify-center flex-col items-center text-center border-2 rounded-lg p-4 border-secondary-100 duration-300 hover:border-green-600 ">
          <span className="block text-5xl">
            <MdExitToApp  />
          </span>
          <span className="block font-iranBold">خروج</span>
        </button>
   
      </div>
    </section>
  );
};

export default Dashboard;
